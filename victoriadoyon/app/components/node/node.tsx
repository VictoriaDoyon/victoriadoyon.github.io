import type { ReactNode } from "react";
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
        </article>
    );
}
