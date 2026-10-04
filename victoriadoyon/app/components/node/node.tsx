import "./node.css"

export interface NodeParams{
    label: string
    children: React.ReactNode
    // x: number;
    // y: number;
    // width: number;
    // height: number;
}

export function Node(props: NodeParams) {
    return (
        // <foreignObject x={props.x} y={props.y} width={props.width} height={props.height}>
                <div className="node" aria-label={props.label}>
                    {props.children}
                </div>
        // </foreignObject>
    );
}
