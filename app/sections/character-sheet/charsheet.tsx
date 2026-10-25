import { AboutMe, Education, Skills, Stats } from "@/app/data";
import Image from "next/image";
// import profile from "../../../public/IMG_";
import "./charsheet.css";

export default function CharacterSheet() {
    return (
        <div id="about" className="character-bio flex flex-col items-center mx-60 mb-15">
            <h2 className="section-title">Detailed Character Bio</h2>
            <div className="charactersheet">

                <div className="charactersheet-left">
                    <Image alt="" src="/IMG_6180.jpg" width={300} height={300}/>
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
                    <div className="details">
                        <label className="attribute-label" id="character-name">Name:</label>
                        <h4 className="character-name" aria-labelledby="character-name">{AboutMe.Name}</h4>
                        <label className="attribute-label" id="character-backstory">Backstory:</label>
                        <article className="mb-5" aria-labelledby="character-backstory">
                            {AboutMe.Bio.map((paragraph, index) =>
                                <p key={`bio-paragraph-${index}`}>{paragraph}</p>
                            )}
                        </article>
                        <label className="attribute-label" id="character-education">Education:</label>
                        <div>
                            {Education.map((degree) => (
                                <p key={degree.Major}>
                                    {degree.Major} - {degree.University}
                                </p>
                            ))}
                        </div>
                    </div>
                    {/* <div className="stats-grid">
                        {Stats.length > 0 && Stats.map(([n, l]) => (
                        <div key={l} className="stats-card">
                            <div className="stats-value">{n}</div>
                            <div className="stats-key">{l}</div>
                        </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    );
}
