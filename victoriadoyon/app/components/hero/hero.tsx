import "./hero.css"
import Constants from "../../../content/constants.json"

export default function Hero() {
    return (
        <div className="hero-node">
            <h1>{Constants.AboutMe.Headline}</h1>
            <h2>{Constants.AboutMe.Name}</h2>
            <h3>{Constants.AboutMe.Title} · {Constants.AboutMe.Subtitle}</h3>
            <p>{Constants.AboutMe.Blurb}</p>
        </div>
    );
}