import Link from "next/link";
import "./footer.css";
import { AboutMe } from "@/app/data";

export default function Footer() {
    return (
        <footer className="site-footer" id="contact">
            <div className="footer-content flex flex-row justify-between items-center">
                <div className="close-stamp">TO&nbsp;BE&nbsp;CONTINUED</div>
                <div className="flex flex-col">
                    <Link href={`mailto:${AboutMe.Email}`}>victoria@victoriadoyon.dev</Link>
                    <Link href={AboutMe.LinkedIn}>linkedin.com/in/victoriadoyon</Link>
                    <Link href={AboutMe.GitHub}>github.com/VictoriaDoyon</Link>
                </div>
            </div>
            <div className="footer-note">— TWO THREADS, ONE MANUSCRIPT —</div>
        </footer>
    );
}
