import { Node } from "@/app/components/node/node";
import { ResearchPublications } from "@/app/data";
import "./research.css";

export default function Publications() {
    return (
        <section className="portfolio-group" id="publications" aria-labelledby="publications-title">
            <h3 className="sr-only" id="publications-title">Publications</h3>
            <div className="group-cards">
                {ResearchPublications.map((pub, index) =>
                    <Node id={`publication-${index}`} label={pub.Title} category="Publication" key={pub.Title}>
                        <h4>{pub.Title}</h4>
                        <p>{pub.Blurb}</p>
                        {pub.Link ? <a href={pub.Link} target="_blank" rel="noopener noreferrer">{pub.Button}<span className="sr-only"> (opens in a new tab)</span></a> : <p className="publication-pending">Publication link forthcoming</p>}
                    </Node>
                )}
            </div>
        </section>
    );
}
