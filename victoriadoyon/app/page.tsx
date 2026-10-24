import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Board from "./components/board/board";
import TwoLoves from "./sections/twoloves/twoloves";
import CharacterSheet from "./sections/character-sheet/charsheet";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#portfolio">Skip to portfolio</a>
      <main id="main-content">
        <Board>
          <div className="landing">
            <Header />
            <Hero />
          </div>
          <TwoLoves />
        </Board>
        <CharacterSheet />
      </main>
      <Footer />
    </>
  );
}
