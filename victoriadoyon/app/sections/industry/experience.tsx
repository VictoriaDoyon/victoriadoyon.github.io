import { Node } from "@/app/components/node/node";
import { Experience } from "@/app/data";
import "./experience.css"

export default function Industry() {
    return (
        <div>
            {Experience.Work.map((position, index) =>
                <Node label={position.Title} key={`industry-experience-${index}`}>
                    <ExperienceNode title={position.Title} employer={position.Employer} start={position.Start} end={position.End} blurb={position.Blurb}/>
                </Node>
            )}
        </div>
    );
}

interface Exp {
    title: string
    blurb: string
    employer: string
    start: string
    end: string
}

function ExperienceNode(props: Exp) {
    return (
        <div className="expNode">
            <hgroup>
                <h1 className="employer">{props.employer}</h1>
                <h2>{props.title}</h2>
            </hgroup>
            <p>{props.start} — {props.end}</p>
            <p>{props.blurb}</p>
        </div>
    );
}