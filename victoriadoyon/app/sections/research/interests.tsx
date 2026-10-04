import { Node } from "@/app/components/node/node";
import { ResearchInterests } from "@/app/data";
import "./research.css"

export default function RInterests() {
    return (
        <div>
            {ResearchInterests.map((interest, index) =>
                <Node label={interest.Topic} key={`r-interest-${index}`}>
                    <InterestNode topic={interest.Topic} blurb={interest.Specifics}/>
                </Node>
            )}
        </div>
    );
}

interface Interest {
    topic: string
    blurb: string
}

function InterestNode(props: Interest) {
    return (
        <div className="interestnode">
            <hgroup>
                <h1>{props.topic}</h1>
            </hgroup>
            <p>{props.blurb}</p>
        </div>
    );
}