import "./line.css"

interface Point {
    x: number;
    y: number;
}

interface LineProps {
    from: Point;
    to: Point;
    drawDirection?: "from-to" | "to-from";
}

export default function Line(props: LineProps) {
    const distance = Math.abs(props.to.x - props.from.x);
    const curve = Math.max(24, distance * 0.45);
    const controlFrom = {
        x: props.from.x + curve,
        y: props.from.y,
    };
    const controlTo = {
        x: props.to.x - curve,
        y: props.to.y,
    };
    const path = [
        `M ${props.from.x} ${props.from.y}`,
        `C ${controlFrom.x} ${controlFrom.y}`,
        `${controlTo.x} ${controlTo.y}`,
        `${props.to.x} ${props.to.y}`,
    ].join(" ");
    const highlightPath = props.drawDirection === "to-from"
        ? [
            `M ${props.to.x} ${props.to.y}`,
            `C ${controlTo.x} ${controlTo.y}`,
            `${controlFrom.x} ${controlFrom.y}`,
            `${props.from.x} ${props.from.y}`,
        ].join(" ")
        : path;

    return (
        <g className="line-connection">
            <path
                className="line-connection__hitbox"
                d={path}
                fill="none"
                strokeWidth="22"
                strokeLinecap="round"
            />
            <path
                className="line-connection__base"
                d={path}
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                className="line-connection__highlight"
                d={highlightPath}
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                pathLength={1}
            />
        </g>
  );
}
