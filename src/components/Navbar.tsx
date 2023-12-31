import { useState } from "react";
import ExpandDownIcon from '../assets/images/expand-down.svg'
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [areLinksDisplayed, setLinksDisplay] = useState<boolean>(false);

  const linksDisplayHandler = () => {
    setLinksDisplay((prevLinksDisplay: boolean) => !prevLinksDisplay);
  };

  return (
    // <nav className='border-b border-slate-700 p-1'>
    <nav className="border-b-2 border-slate-800 bg-slate-900/40 backdrop-blur-xl p-3 fixed w-full z-40">
      <button onClick={linksDisplayHandler} className="sm:hidden flex ml-auto">
        <img src={ExpandDownIcon} className={`w-[35px] h-[35px] duration-300 button-hover card ${areLinksDisplayed ? 'rotate-180' : null}`} />
      </button>

      {/* apply ternary operator inside classname on larger devices */}
      {(areLinksDisplayed) ? <ul className="flex flex-col text-center gap-3 mt-3 sm:hidden">
        <NavLinks />
      </ul> : null
      }

      {/* LARGER DEVICES */}
      <ul className="hidden sm:flex sm:justify-center">
        <NavLinks />
      </ul>
    </nav >
  );
};

export default Navbar;
