import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Board from "./components/board/board";
import TwoLoves from "./sections/twoloves/twoloves";
import FocusAreasSection from "./sections/focusareas/focusareas";
import RInterests from "./sections/research/interests";
import Publications from "./sections/research/publications";
import CharacterSheet from "./sections/character-sheet/charsheet";
import Industry from "./sections/industry/experience";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TwoLoves />
      <FocusAreasSection />
      <RInterests />
      <Publications />
      <Industry />
      {/* <Board /> */}
      <CharacterSheet />
      <Footer />
    </>
  );
}
