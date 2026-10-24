import { ResumeUrl } from "@/app/data";
import "./header.css";

export default function Header() {
  const resumeReady = ResumeUrl && !ResumeUrl.includes("link_to_resume");
  return (
    <header className="site-header">
      <a className="notebook-mark" href="#hero-name" aria-label="Victoria Doyon, back to introduction">Notebook no. 001<span aria-hidden="true"> / VD</span></a>
      <nav aria-label="Main navigation">
        <a href="#portfolio">Board</a>
        <a href="#consulting">Consulting</a>
        <a href="#research">Research</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        {resumeReady && <a href={ResumeUrl}>Résumé <span aria-hidden="true">↗</span></a>}
      </nav>
    </header>
  );
}
