import type { Connection } from "../board/connections";
import "./line.css";

export default function Line({ id, kind }: { id: string; kind: Connection["kind"] }) {
    return (
        <g className="line-connection" data-connection-id={id} data-kind={kind}>
            <path className="line-connection__hitbox" fill="none" strokeWidth="18" />
            <path className="line-connection__base" fill="none" strokeWidth="1.5" pathLength="1" />
            <path className="line-connection__highlight" fill="none" strokeWidth="1.5" pathLength="1" />
        </g>
    );
}
