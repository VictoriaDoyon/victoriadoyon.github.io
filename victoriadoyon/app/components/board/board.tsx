import "./board.css"
import type { ReactNode } from "react";
import {Node, NodeParams} from "../node/node";
import Line from "../line/line";
////REDO ONCE REST IS DONE; WILL PROBABLY HAVE TO HAVE THIS ON BACKGROUND

// The best industry standard approach is to build your core website using completely normal, accessible HTML/CSS, 
// and then layer the animated lines over or under it using an independent, absolute-positioned SVG.

// Implementing the Hybrid Approach
// Aria-Hidden Canvas: Keep aria-hidden="true" and focusable="false" on the large canvas element so screen readers completely ignore
//  the decorative animations.Layering with CSS: Position your HTML elements normally. 
// 
// Use position: absolute or fixed with width: 100% and height: 100% on the SVG to let it float invisibly behind or ahead of your content.
// 
// Pointer Events: Apply pointer-events: none to the background SVG so users can smoothly click, select, and interact with the actual HTML text and buttons underneath it.
// 
// Dynamic Coordinate Mapping: Use a lightweight JavaScript library like LeaderLine or the native getBoundingClientRect() method to find the exact screen coordinates of 
// your HTML category blocks, then map the SVG line points directly to those targets dynamically.

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

function getCenter(node: NodeParams) {
    return {
        x: node.x + node.width / 2,
        y: node.y + node.height / 2,
    };
}

const boardWidth = Math.max(...Object.values(nodes).map((node) => node.x + node.width)) + BOARD_PADDING;
const boardHeight = Math.max(...Object.values(nodes).map((node) => node.y + node.height)) + BOARD_PADDING;

export default function Board(){
    // return (
    //      <div className="board">
    //          <svg viewBox={`0 0 ${boardWidth} ${boardHeight}`} role="img" aria-label="Connected board nodes">
    //                  <Line from={getCenter(nodes.sample)} to={getCenter(nodes.sample2)}/>
    //         </svg>
    //                  <Node title={nodes.sample.title} x={nodes.sample.x} y={nodes.sample.y} height={nodes.sample.height} width={nodes.sample.width}/>
    //                  <Node title={nodes.sample2.title} x={nodes.sample2.x} y={nodes.sample2.y} height={nodes.sample2.height} width={nodes.sample2.width}/>
    //      </div>
    // )
     return (
         <div className="board">
             <svg viewBox={`0 0 ${boardWidth} ${boardHeight}`} role="img" aria-label="Connected board nodes">
                     <Line from={getCenter(nodes.sample)} to={getCenter(nodes.sample2)}/>
                     <Node title={nodes.sample.title} x={nodes.sample.x} y={nodes.sample.y} height={nodes.sample.height} width={nodes.sample.width}/>
                     <Node title={nodes.sample2.title} x={nodes.sample2.x} y={nodes.sample2.y} height={nodes.sample2.height} width={nodes.sample2.width}/>
             </svg>
         </div>
     );
}