import "./line.css"

interface Point {
    x: number;
    y: number;
}

interface LineProps {
    from: Point;
    to: Point;
}

export default function Line(props: LineProps) {
    const distance = Math.abs(props.to.x - props.from.x);
    const curve = Math.max(24, distance * 0.45);
    const path = [
        `M ${props.from.x} ${props.from.y}`,
        `C ${props.from.x + curve} ${props.from.y}`,
        `${props.to.x - curve} ${props.to.y}`,
        `${props.to.x} ${props.to.y}`,
    ].join(" ");

    return (
        <path
          className="draw-animation"
          d={path}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength={1}
        />
  );
}
