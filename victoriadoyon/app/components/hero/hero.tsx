import "./hero.css";
import { AboutMe } from "@/app/data";

export default function Hero() {
    return (
        <section className="hero-node" aria-labelledby="hero-name">
            <div className="hero-introduction">
                <p className="hero-eyebrow">{AboutMe.Location} <span aria-hidden="true"> / </span> Engineering &amp; research</p>
                <p className="hero-headline">{AboutMe.Headline}</p>
                <h1 id="hero-name">{AboutMe.Name}</h1>
                <div className="hero-copy">
                    <p className="hero-role">{AboutMe.Title}</p>
                    <p className="hero-credentials">{AboutMe.Subtitle}</p>
                    <p className="hero-blurb">{AboutMe.Blurb}</p>
                </div>
            </div>
            <div className="hero-thread-origin" data-node-id="hero">
                <a className="hero-scroll" href="#portfolio">Follow the threads <span aria-hidden="true">↓</span></a>
                <span className="thread-origin" aria-hidden="true" />
            </div>
        </section>
    );
}
