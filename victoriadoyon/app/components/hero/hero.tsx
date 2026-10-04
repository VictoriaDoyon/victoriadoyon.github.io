import "./hero.css"
import { AboutMe } from "@/app/data";

export default function Hero() {
    return (
        <div className="hero-node">
            <h1>{AboutMe.Headline}</h1>
            <h2>{AboutMe.Name}</h2>
            <div className="hero-copy">
                <h3>{AboutMe.Title} · {AboutMe.Subtitle}</h3>
                <p>{AboutMe.Blurb}</p>
            </div>
        </div>
    );
}
