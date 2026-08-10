import Link from "next/link";
import "./header.css"

export default function Header() {
  return (
    <header className="flex justify-between">
        <div>NOTEBOOK NO. 001</div>
        <nav>
            <Link className="link" href={"/"}>
                Board
            </Link>
            <Link className="link" href={"/"}>
                Engineering
            </Link>
            <Link className="link" href={"/"}>
                Research
            </Link>
            <Link className="link" href={"/"}>
                Personnel
            </Link>
            <Link className="link" href={"/"}>
                Contact
            </Link>
        </nav>
    </header>
  );
}
