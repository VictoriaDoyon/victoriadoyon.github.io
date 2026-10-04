import { Node } from "@/app/components/node/node";
import { FocusAreas } from "@/app/data";
import "./focusareas.css"
import "@/app/globals.css"

export default function FocusAreasSection() {
    return (
        <div>
            <p className="note">{FocusAreas.Blurb}</p>
            {FocusAreas.Areas.map((area, index) =>
                <Node label={area.Title} key={`focus-area-${index}`}>
                    <FocusNode title={area.Title} blurb={area.Blurb} tags={area.Tags}/>
                </Node>
            )}
        </div>
    );
}

interface Focus {
    title: string
    blurb: string
    tags: string[]
}

function FocusNode(props: Focus) {
    return (
        <div className="focusnode">
            <hgroup>
                <h1>{props.title}</h1>
            </hgroup>
            <p>{props.blurb}</p>
            <div className="focus-area-tags-div">
                {props.tags.map((tag, index) => 
                    <span className="focus-area-tag" key={`focus-area-skill-${index}`}>{tag}</span>
                )}
            </div>
        </div>
    );
}