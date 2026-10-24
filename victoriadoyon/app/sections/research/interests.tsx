import { Node } from "@/app/components/node/node";
import { ResearchInterests } from "@/app/data";
import "./research.css";

export default function RInterests() {
    return (
        <section className="portfolio-group" id="research-interests" aria-labelledby="interests-title">
            <h3 className="sr-only" id="interests-title">Research interests</h3>
            <div className="group-cards">
                {ResearchInterests.map((interest, index) =>
                    <Node id={`interest-${index}`} label={interest.Topic} category="Research interest" key={interest.Topic}>
                        <h4>{interest.Topic}</h4>
                        <p>{interest.Specifics}</p>
                        {index < 2 && <a className="related-thread" href={`#focus-${index}`}>Related focus area <span aria-hidden="true">↗</span></a>}
                    </Node>
                )}
            </div>
        </section>
    );
}
