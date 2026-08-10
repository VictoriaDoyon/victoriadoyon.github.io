import "./node.css"

export interface NodeParams{
    Title: string
}

export default function Node(props: NodeParams) {
    return (
        <div className="node">
            <label>{props.Title}</label>
        </div>
    );
}
