import { AboutMe, Skills, Stats } from "@/app/data";
import Image from "next/image";
// import profile from "../../../public/IMG_";
import "./charsheet.css";

export default function CharacterSheet() {
    return (
        <div id="about" className="character-bio flex flex-col items-center mx-60 mb-15">
            <h2 className="section-title">Detailed Character Bio</h2>
            <div className="charactersheet">

                <div className="charactersheet-left">
                    <Image alt="" src="/IMG_6180.jpg" width={300} height={300} className="m-5"/>
                    <div className="skills">
                        {Skills.map(({ Cat, Vals }) => (
                            <div key={Cat} className="skill">
                                <div className="skill-cat">{Cat}</div>
                                <div className="skill-vals">{Vals}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="charactersheet-right">
                    {AboutMe.Bio.map((paragraph, index) =>
                        <p key={`bio-paragraph-${index}`}>{paragraph}</p>
                    )}
                    <div className="stats-grid">
                        {Stats.map(([n, l]) => (
                        <div key={l} className="stats-card">
                            <div className="stats-value">{n}</div>
                            <div className="stats-key">{l}</div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
