"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import Line from "../line/line";
import { connections } from "./connections";
import "./board.css";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

function roundedRoute(points: { x: number; y: number }[]) {
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let index = 1; index < points.length - 1; index++) {
        const previous = points[index - 1];
        const point = points[index];
        const next = points[index + 1];
        const before = Math.hypot(point.x - previous.x, point.y - previous.y);
        const after = Math.hypot(next.x - point.x, next.y - point.y);
        const radius = Math.min(22, before / 2, after / 2);
        if (!before || !after) continue;
        const entry = {
            x: point.x + (previous.x - point.x) * radius / before,
            y: point.y + (previous.y - point.y) * radius / before,
        };
        const exit = {
            x: point.x + (next.x - point.x) * radius / after,
            y: point.y + (next.y - point.y) * radius / after,
        };
        path += ` L ${entry.x} ${entry.y} Q ${point.x} ${point.y} ${exit.x} ${exit.y}`;
    }
    const last = points[points.length - 1];
    return `${path} L ${last.x} ${last.y}`;
}

export default function Board({ children }: { children: ReactNode }) {
    const boardRef = useRef<HTMLDivElement>(null);
    const noteMaskRef = useRef<SVGGElement>(null);
    const noteMaskId = useId();

    useEffect(() => {
        const board = boardRef.current;
        if (!board) return;

        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const narrow = window.matchMedia("(max-width: 760px)");
        const nodes = new Map(Array.from(board.querySelectorAll<HTMLElement>("[data-node-id]")).map(node => [node.dataset.nodeId!, node]));
        const edges = connections.map(connection => ({
            ...connection,
            element: board.querySelector<SVGGElement>(`[data-connection-id="${connection.id}"]`)!,
            target: nodes.get(connection.to)!,
        }));
        const revealed = new Set<string>(["hero"]);
        const progress = new Map<string, number>();
        let frame = 0;
        let geometryDirty = true;
        let disposed = false;

        function reveal(id: string) {
            revealed.add(id);
            nodes.get(id)?.setAttribute("data-visible", "true");
            // Cross-links never gate the reading or reveal order.
            const incoming = connections.find(edge => edge.kind !== "cross" && edge.to === id);
            if (incoming) {
                progress.set(incoming.id, 1);
                if (!revealed.has(incoming.from)) reveal(incoming.from);
            }
        }

        function update() {
            frame = 0;
            if (disposed || !board) return;
            const bounds = board.getBoundingClientRect();
            const rects = new Map(Array.from(nodes, ([id, node]) => [id, node.getBoundingClientRect()]));
            const local = (rect: DOMRect) => ({
                left: rect.left - bounds.left, right: rect.right - bounds.left,
                top: rect.top - bounds.top, bottom: rect.bottom - bounds.top,
                x: rect.left + rect.width / 2 - bounds.left,
                y: rect.top + rect.height / 2 - bounds.top,
            });

            if (geometryDirty) {
                for (const edge of edges) {
                    const from = local(rects.get(edge.from)!);
                    const to = local(rects.get(edge.to)!);
                    let path: string;
                    if (edge.kind === "root") {
                        if (narrow.matches) {
                            const right = edge.to === "research";
                            const lane = right ? bounds.width - 13 : 13;
                            path = roundedRoute([
                                { x: from.x, y: from.bottom },
                                { x: from.x, y: from.bottom + 28 },
                                { x: lane, y: from.bottom + 28 },
                                { x: lane, y: to.y },
                                { x: right ? to.right : to.left, y: to.y },
                            ]);
                        } else {
                            const distance = to.top - from.bottom;
                            path = `M ${from.x} ${from.bottom} C ${from.x} ${from.bottom + distance * 0.6} ${to.x} ${to.top - distance * 0.35} ${to.x} ${to.top}`;
                        }
                    } else if (edge.kind === "cross") {
                        if (narrow.matches) {
                            const lane = bounds.width - 9;
                            path = roundedRoute([{ x: from.right, y: from.y }, { x: lane, y: from.y }, { x: lane, y: to.y }, { x: to.right, y: to.y }]);
                        } else {
                            const direction = to.x >= from.x ? 1 : -1;
                            const start = direction > 0 ? from.right : from.left;
                            const end = direction > 0 ? to.left : to.right;
                            const curve = Math.max(40, Math.abs(end - start) * 0.5);
                            path = `M ${start} ${from.y} C ${start + direction * curve} ${from.y} ${end - direction * curve} ${to.y} ${end} ${to.y}`;
                        }
                    } else if (narrow.matches) {
                        const lane = 22;
                        path = roundedRoute([
                            { x: from.x, y: from.bottom },
                            { x: from.x, y: from.bottom + 28 },
                            { x: lane, y: from.bottom + 28 },
                            { x: lane, y: to.y },
                            { x: to.left, y: to.y },
                        ]);
                    } else {
                        // Independent curves follow scattered cards instead of a shared column gutter.
                        const distance = Math.max(48, to.top - from.bottom);
                        path = `M ${from.x} ${from.bottom} C ${from.x} ${from.bottom + distance * 0.4} ${to.x} ${to.top - distance * 0.25} ${to.x} ${to.top}`;
                    }
                    edge.element.querySelectorAll("path").forEach(element => element.setAttribute("d", path));
                }
                geometryDirty = false;
            }

            const height = window.innerHeight;
            for (const edge of edges) {
                let value = motion.matches ? 1 : progress.get(edge.id) ?? 0;
                if (!motion.matches) {
                    if (edge.kind === "cross") {
                        value = revealed.has(edge.from) && revealed.has(edge.to) ? 1 : 0;
                    } else if (revealed.has(edge.from)) {
                        const top = rects.get(edge.to)!.top;
                        value = Math.max(value, clamp((height * 0.98 - top) / (height * 0.3)));
                    }
                }
                progress.set(edge.id, value);
                edge.element.style.setProperty("--draw-progress", String(value));
                edge.element.setAttribute("data-complete", String(value >= 1));
                if (value >= 1 && edge.kind !== "cross") {
                    revealed.add(edge.to);
                    edge.target.setAttribute("data-visible", "true");
                }
            }
            board.dataset.enhanced = "true";
        }

        function schedule() {
            if (!frame) frame = requestAnimationFrame(update);
        }

        function measure() {
            geometryDirty = true;
            schedule();
        }

        function revealTarget(target: Element | null) {
            const node = target?.closest<HTMLElement>("[data-node-id]");
            if (node?.dataset.nodeId) reveal(node.dataset.nodeId);
            // Section links must not land in unrevealed content.
            if (target?.matches(".portfolio-group")) {
                const first = target.querySelector<HTMLElement>("[data-node-id]");
                if (first?.dataset.nodeId) reveal(first.dataset.nodeId);
            }
            schedule();
        }

        function onFocus(event: FocusEvent) {
            if (event.target instanceof Element) revealTarget(event.target);
        }

        function onHashChange() {
            if (!window.location.hash) return;
            let id: string;
            try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
            const target = document.getElementById(id);
            if (target && board?.contains(target)) revealTarget(target);
        }

        function highlight(id?: string) {
            edges.forEach(edge => edge.element.setAttribute("data-highlighted", String(edge.from === id || edge.to === id)));
        }

        function onHighlight(event: Event) {
            const focused = document.activeElement?.closest<HTMLElement>("[data-node-id]");
            if (event.type.startsWith("pointer") && focused?.dataset.nodeId) {
                highlight(focused.dataset.nodeId);
                return;
            }
            const target = event.type === "focusout" || event.type === "pointerout"
                ? (event as FocusEvent | PointerEvent).relatedTarget : event.target;
            highlight(target instanceof Element ? target.closest<HTMLElement>("[data-node-id]")?.dataset.nodeId : undefined);
        }

        const observer = new ResizeObserver(measure);
        observer.observe(board);
        nodes.forEach(node => observer.observe(node));
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", measure);
        window.addEventListener("hashchange", onHashChange);
        motion.addEventListener("change", measure);
        narrow.addEventListener("change", measure);
        board.addEventListener("focusin", onFocus);
        board.addEventListener("focusin", onHighlight);
        board.addEventListener("focusout", onHighlight);
        board.addEventListener("pointerover", onHighlight);
        board.addEventListener("pointerout", onHighlight);
        document.fonts.ready.then(() => { if (!disposed) measure(); });
        onHashChange();
        measure();

        return () => {
            disposed = true;
            cancelAnimationFrame(frame);
            observer.disconnect();
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", measure);
            window.removeEventListener("hashchange", onHashChange);
            motion.removeEventListener("change", measure);
            narrow.removeEventListener("change", measure);
            board.removeEventListener("focusin", onFocus);
            board.removeEventListener("focusin", onHighlight);
            board.removeEventListener("focusout", onHighlight);
            board.removeEventListener("pointerover", onHighlight);
            board.removeEventListener("pointerout", onHighlight);
            delete board.dataset.enhanced;
        };
    }, []);

    return (
        <div className="board" ref={boardRef}>
            <svg className="board-threads" aria-hidden="true" focusable="false">
                <defs>
                    <mask id={noteMaskId} maskUnits="userSpaceOnUse">
                        <rect width="100%" height="100%" fill="white" />
                        <g ref={noteMaskRef} />
                    </mask>
                </defs>
                <g mask={`url(#${noteMaskId})`}>
                    {connections.map(connection => <Line key={connection.id} id={connection.id} kind={connection.kind} />)}
                </g>
            </svg>
            {children}
        </div>
    );
}
