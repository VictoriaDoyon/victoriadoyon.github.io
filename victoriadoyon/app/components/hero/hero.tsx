import "./hero.css";
import { AboutMe } from "@/app/data";

export default function Hero() {
    return (
        <section className="hero-node" aria-labelledby="hero-name">
            <div className="hero-introduction">
                <p className="hero-eyebrow">{AboutMe.Location} <span aria-hidden="true"> / </span> Engineering &amp; research</p>
                <p className="hero-headline">{AboutMe.Headline}</p>
                <h1 id="hero-name">{AboutMe.Name}</h1>
                <div className="hero-copy" data-node-id="hero">
                    <p className="hero-role">{AboutMe.Title}</p>
                    <p className="hero-credentials">{AboutMe.Subtitle}</p>
                    <p className="hero-blurb">{AboutMe.Blurb}</p>
                    <span className="thread-origin" aria-hidden="true" />
                </div>
            </div>
            <a className="hero-scroll" href="#portfolio">Follow the threads <span aria-hidden="true">↓</span></a>
        </section>
    );
}
