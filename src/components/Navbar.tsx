import React, { useState } from "react";
import ExpandDownIcon from '../assets/images/expand-down.svg'

const Navbar = () => {
  const [areLinksDisplayed, setLinksDisplay] = useState<boolean>(false);

  const linksDisplayHandler = () => {
    setLinksDisplay((prevLinksDisplay: boolean) => !prevLinksDisplay);
  };

  return (
    // <nav className='border-b border-slate-700 p-1'>
    <nav className="border-b-2 border-slate-800 bg-slate-900/40 backdrop-blur-xl p-3 fixed w-full z-50">
      <button onClick={linksDisplayHandler} className="sm:hidden flex ml-auto">
        <img src={ExpandDownIcon} className={`w-[35px] h-[35px] duration-300 button-hover card ${areLinksDisplayed ? 'rotate-180' : null}`} />
      </button>

      {/* apply ternary operator inside classname on larger devices */}
      {(areLinksDisplayed) ? <ul className="flex flex-col text-center gap-3 sm:flex-row sm:justify-center mt-3">
        <li className="nav-link">Home</li>
        <li className="nav-link">About</li>
        <li className="nav-link">Projects</li>
        <li className="nav-link">Contact</li>
      </ul> : null}
    </nav>
  );
};

export default Navbar;
