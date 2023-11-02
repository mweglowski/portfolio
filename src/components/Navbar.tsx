import React, { useState } from "react";

const Navbar = () => {
  const [areLinksDisplayed, setLinksDisplay] = useState<boolean>(true);

  const linksDisplayHandler = () => {
    setLinksDisplay((prevLinksDisplay: boolean) => !prevLinksDisplay);
  };

  return (
    // <nav className='border-b border-slate-700 p-1'>
    <nav className="border-b border-slate-700/30 p-3 fixed w-full">
      <button onClick={linksDisplayHandler} className="sm:hidden relative left-[88%]">
        {areLinksDisplayed ? "hide" : "show"}
      </button>
      {/* <ul className='flex justify-center gap-2'> */}
      {(areLinksDisplayed) ? <ul className="flex flex-col text-center gap-3 sm:flex-row sm:justify-center">
        <li className="nav-link">Home</li>
        <li className="nav-link">About</li>
        <li className="nav-link">Projects</li>
        <li className="nav-link">Contact</li>
      </ul> : null}
    </nav>
  );
};

export default Navbar;
