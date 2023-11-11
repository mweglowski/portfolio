import { useState } from 'react'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Game from "./components/Game";
import ModalContextProvider from "./store/modal-context";
import TimerContextProvider from './store/timer-context';

function App() {
  const [isGameDisplayed, setGameDisplay] = useState<boolean>(false);

  const gameDisplayHandler = () => {
    setGameDisplay((prevDisplay) => !prevDisplay)
  }

  return (
    <div>
      <ModalContextProvider>
        <TimerContextProvider>
          {isGameDisplayed && <Game onDisplayChange={gameDisplayHandler} />}
        </TimerContextProvider>
        {/* CREATE GAME THAT YOU CAN PLAY ON WEBPAGE, THERE IS A GRID OF CELLS, SUDDENLY RANDOM CELL IS COLORED AND USER HAS TO CLICK IT AS FAST AS POSSIBLE SINCE GAME'S PURPOSE IS TO MEASURE TIME OF REACTION */}

        <Navbar />
        <Home onGameDisplayChange={gameDisplayHandler} />
        {/* ABOUT */}
        <Education />
        <Projects />
        <Contact />

      </ModalContextProvider>
    </div>
  );
}

export default App;
