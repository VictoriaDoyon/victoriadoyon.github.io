import { Node } from "@/app/components/node/node";
import { ResearchPublications } from "@/app/data";
import "./research.css"

export default function Publications() {
    return (
        <div>
            {ResearchPublications.map((pub, index) =>
                <Node label={pub.Title} key={`r-publication-${index}`}>
                    <PublicationNode title={pub.Title} blurb={pub.Blurb} blabel={pub.Button} link={pub.Link}/>
                </Node>
            )}
        </div>
    );
}

interface Publication {
    title: string
    blurb: string
    blabel: string
    link: string
}

function PublicationNode(props: Publication) {
    return (
        <div className="pubnode">
            <hgroup>
                <h1>{props.title}</h1>
            </hgroup>
            <p>{props.blurb}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                {props.blabel}
            </a>
        </div>
    );
}