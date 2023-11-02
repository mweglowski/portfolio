import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      {/* CREATE GAME THAT YOU CAN PLAY ON WEBPAGE, THERE IS A GRID OF CELLS, SUDDENLY RANDOM CELL IS COLORED AND USER HAS TO CLICK IT AS FAST AS POSSIBLE SINCE GAME'S PURPOSE IS TO MEASURE TIME OF REACTION */}

      <Navbar />
      <Home />
      {/* ABOUT */}
      <Projects />
      {/* CONTACT */}
    </div>
  );
}

export default App;
