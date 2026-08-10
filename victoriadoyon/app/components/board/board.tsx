import "./board.css"
import type { ReactNode } from "react";
import Node from "../node/node";
import Line from "../line/line";

const BOARD_PADDING = 16;

const nodes = {
    sample: {
        title: "Sample",
        x: 24,
        y: 24,
        width: 132,
        height: 48,
    },
    sample2: {
        title: "Sample2",
        x: 360,
        y: 160,
        width: 148,
        height: 48,
    },
};

function getCenter(node: BoardNode) {
    return {
        x: node.x + node.width / 2,
        y: node.y + node.height / 2,
    };
}

const boardWidth = Math.max(...Object.values(nodes).map((node) => node.x + node.width)) + BOARD_PADDING;
const boardHeight = Math.max(...Object.values(nodes).map((node) => node.y + node.height)) + BOARD_PADDING;

export default function Board(){
    return (
        <div className="board">
            <svg viewBox={`0 0 ${boardWidth} ${boardHeight}`} role="img" aria-label="Connected board nodes">
                    <SVGWrapper node={nodes.sample}>
                        <Node Title={nodes.sample.title}/>
                    </SVGWrapper>
                    <Line from={getCenter(nodes.sample)} to={getCenter(nodes.sample2)}/>
                    <SVGWrapper node={nodes.sample2}>
                        <Node Title={nodes.sample2.title}/>
                    </SVGWrapper>
            </svg>
        </div>
    );
}

interface BoardNode {
    title: string;
    x: number;
    y: number;
    width: number;
    height: number;
}

interface SVGWrapperProps {
    children: ReactNode;
    node: BoardNode;
}

function SVGWrapper(props: SVGWrapperProps){
    return (
        <foreignObject x={props.node.x} y={props.node.y} width={props.node.width} height={props.node.height}>
            <div className="board__node-html">
                {props.children}
            </div>
        </foreignObject>
    )
}
