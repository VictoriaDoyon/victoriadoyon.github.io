import type { ReactNode } from "react";
import "./note.css";

interface NoteProps {
    children: ReactNode;
    className?: string;
}

export default function Note({ children, className = "" }: NoteProps) {
    return <p className={`handwritten-note ${className}`} data-thread-note>{children}</p>;
}
