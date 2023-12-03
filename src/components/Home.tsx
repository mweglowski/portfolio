import { useState } from "react";
import { useModalContext } from "../store/modal-context";

type HomeProps = {
  onGameDisplayChange: () => void;
}

const Home = ({ onGameDisplayChange }: HomeProps) => {
  const gameDisplayHandler = () => {
    onGameDisplayChange();
  }

  return (
    <section className="h-[100vh] flex flex-col relative">
      <header className="pt-[35vh]">
        <div className="text-4xl text-slate-300 text-center">
          <p>Hi!</p>
          <p>I'm Marcin</p>
          <p className="text-xl pt-3 text-slate-400">Software Engineer</p>
        </div>
      </header>

      <div className="flex items-center gap-4 mx-auto top-[40vh] relative">
        <p className="text-slate-400">Feeling bored?</p>
        <button className="button-hover card text-slate-400 py-1 px-2" onClick={gameDisplayHandler}>Play a game!</button>
      </div>
    </section>
  );
};

export default Home;
