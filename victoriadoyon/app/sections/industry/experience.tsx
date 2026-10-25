import { Node } from "@/app/components/node/node";
import { Experience } from "@/app/data";
import "./experience.css";

export default function Industry() {
    return (
        <section className="portfolio-group" id="experience" aria-labelledby="experience-title">
            <h3 className="sr-only" id="experience-title">Experience</h3>
            <div className="group-cards">
                {Experience.Work.map((position, index) =>
                    <Node id={`experience-${index}`} label={`${position.Title} at ${position.Employer}`} category="Experience" key={`${position.Employer}-${position.Start}`}>
                        <p className="experience-dates">{position.Start} — {position.End}</p>
                        <h4>{position.Employer}</h4>
                        <p className="experience-role">{position.Title}</p>
                        {position.Blurb && <p>{position.Blurb}</p>}
                    </Node>
                )}
            </div>
        </section>
    );
}
