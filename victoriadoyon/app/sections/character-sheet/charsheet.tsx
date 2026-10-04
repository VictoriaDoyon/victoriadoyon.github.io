import { AboutMe } from "@/app/data";
import Image from "next/image";
import profile from "@/public/vercel.svg"
import "./charsheet.css"

export default function CharacterSheet() {
    return (
        <div>
            <h4>Character Sheet</h4>
            <div className="charactersheet">
                <div className="charactersheet-left">
                    <Image alt="Victoria" src={profile} width={300} height={300}></Image>
                </div>
                <div className="charactersheet-right">
                    <p>{AboutMe.Name}</p>
                    {AboutMe.Bio.map((paragraph, index) => 
                        <p key={`bio-paragraph-${index}`}>{paragraph}</p>
                    )}
                </div>
            </div>
        </div>
    );
}