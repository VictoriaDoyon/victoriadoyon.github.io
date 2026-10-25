import { Node } from "@/app/components/node/node";
import Note from "@/app/components/note/note";
import { TwoMasks } from "@/app/data";
import FocusAreasSection from "../focusareas/focusareas";
import Industry from "../industry/experience";
import RInterests from "../research/interests";
import Publications from "../research/publications";
import "./twoloves.css";

export default function TwoLoves() {
    return (
        <section className="portfolio-map" id="portfolio" aria-label="Professional portfolio" tabIndex={-1}>
            <div className="board-introduction">
                <Node id="consulting" label="Consulting" className="node-hub">
                    <h2 id="consulting-title">{TwoMasks.Consulting.Title}</h2>
                    <p className="hub-subtitle">{TwoMasks.Consulting.Subtitle}</p>
                    <p>{TwoMasks.Consulting.Blurb}</p>
                </Node>
                <Note className="intersection-note">{TwoMasks.Intersection}</Note>
                <Node id="research" label="Research" className="node-hub">
                    <h2 id="research-title">{TwoMasks.Research.Title}</h2>
                    <p className="hub-subtitle">{TwoMasks.Research.Subtitle}</p>
                    <p>{TwoMasks.Research.Blurb}</p>
                </Node>
            </div>
            <div className="portfolio-constellation">
                <FocusAreasSection />
                <Industry />
                <RInterests />
                <Publications />
            </div>
        </section>
    );
}
