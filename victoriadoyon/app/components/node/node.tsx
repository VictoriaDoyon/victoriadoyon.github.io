import type { ReactNode } from "react";
import { getRelatedLinks } from "../board/connections";
import "./node.css";

export interface NodeParams {
    id: string;
    label: string;
    category?: string;
    className?: string;
    children: ReactNode;
}

export function Node({ id, label, category, className = "", children }: NodeParams) {
    return (
        <article id={id} className={`node ${className}`} data-node-id={id} data-reveal-node aria-label={label} tabIndex={-1}>
            {category && <p className="node-category">{category}</p>}
            {children}
            {getRelatedLinks(id).map(related => (
                <a className="related-thread" href={`#${related.id}`} aria-label={`Related ${related.category}: ${related.title}`} key={related.id}>
                    Related {related.category} <span aria-hidden="true">↗</span>
                </a>
            ))}
        </article>
    );
}
