import Link from "next/link";
import "./footer.css";
import { AboutMe } from "@/app/data";

export default function Footer() {
    return (
        <footer className="site-footer" id="contact">
            <div className="footer-content flex flex-row justify-between items-center">
                <div className="close-stamp">TO&nbsp;BE&nbsp;CONTINUED</div>
                <nav className="flex flex-col footer-links" aria-label="Contact links">
                    <Link href={`mailto:${AboutMe.Email}`} aria-label="Email Victoria Doyon">Email <span aria-hidden="true">↗</span></Link>
                    <Link href={AboutMe.LinkedIn} target="_blank">LinkedIn <span aria-hidden="true">↗</span></Link>
                    <Link href={AboutMe.GitHub} target="_blank">GitHub <span aria-hidden="true">↗</span></Link>
                </nav>
            </div>
            <div className="footer-note">— TWO THREADS, ONE MANUSCRIPT —</div>
        </footer>
    );
}
