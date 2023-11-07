import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import GameModal from "./components/GameModal";

function App() {
  return (
    <div>
      <GameModal />
      {/* CREATE GAME THAT YOU CAN PLAY ON WEBPAGE, THERE IS A GRID OF CELLS, SUDDENLY RANDOM CELL IS COLORED AND USER HAS TO CLICK IT AS FAST AS POSSIBLE SINCE GAME'S PURPOSE IS TO MEASURE TIME OF REACTION */}

      <Navbar />
      <Home />
      {/* ABOUT */}
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
