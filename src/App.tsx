import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import About from "./components/About";
import Game from "./components/Game";
import ProjectPreviewContextProvider from "./store/project-preview-context";
import TimerContextProvider from "./store/timer-context";
import ProjectPreview from "./components/ProjectPreview";
import Experience from "./components/Experience";

function App() {
  const [isGameDisplayed, setGameDisplay] = useState<boolean>(false);

  const gameDisplayHandler = () => {
    setGameDisplay((prevDisplay) => !prevDisplay);
  };

  return (
    <div>
      <ProjectPreviewContextProvider>
        <ProjectPreview />

        <TimerContextProvider>
          {isGameDisplayed && <Game onDisplayChange={gameDisplayHandler} />}
        </TimerContextProvider>

        <Navbar />
        <Home onGameDisplayChange={gameDisplayHandler} />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </ProjectPreviewContextProvider>
    </div>
  );
}

export default App;
