import { Node } from "@/app/components/node/node";
import { TwoMasks } from "@/app/data";
import "./twoloves.css"
import "@/app/globals.css"

export default function TwoLoves() {
    return (
        <div className="twoloves">
            <Node label={TwoMasks.Consulting.AriaLabel}>
                <MaskNode title={TwoMasks.Consulting.Title} subtitle={TwoMasks.Consulting.Subtitle} blurb={TwoMasks.Consulting.Blurb}/>
            </Node>
            <p className="note">{TwoMasks.Intersection}</p>
            <Node label={TwoMasks.Research.AriaLabel}>
                <MaskNode title={TwoMasks.Research.Title} subtitle={TwoMasks.Research.Subtitle} blurb={TwoMasks.Research.Blurb}/>
            </Node>
        </div>
    );
}

interface Mask {
    title: string
    subtitle: string
    blurb: string
}

function MaskNode(props: Mask) {
    return (
        <div className="masknode">
            <hgroup>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </hgroup>
            <p>{props.blurb}</p>
        </div>
    );
}