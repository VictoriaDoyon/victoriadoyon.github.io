import { Node } from "@/app/components/node/node";
import Note from "@/app/components/note/note";
import { FocusAreas } from "@/app/data";
import "./focusareas.css";

export default function FocusAreasSection() {
    return (
        <section className="portfolio-group" id="focus-areas" aria-labelledby="focus-areas-title">
            <h3 className="sr-only" id="focus-areas-title">Focus areas</h3>
            <Note className="group-intro">{FocusAreas.Blurb}</Note>
            <div className="group-cards">
                {FocusAreas.Areas.map((area, index) =>
                    <Node id={`focus-${index}`} label={area.Title} category="Focus area" key={area.Title}>
                        <h4>{area.Title}</h4>
                        <p>{area.Blurb}</p>
                        <ul className="focus-area-tags" aria-label="Related skills">
                            {area.Tags.map(tag => <li key={tag}>{tag}</li>)}
                        </ul>
                    </Node>
                )}
            </div>
        </section>
    );
}
