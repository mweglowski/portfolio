import { Link } from "react-scroll";

const NavLinks = () => {
  const sections = ["home", "about", "experience", "education", "projects", "contact"];

  return (
    <>
      {sections.map((section) => <Link
        to={section}
        spy={true}
        smooth={true}
        offset={-120}
        duration={500}
        key={section}
      >
        <li className="nav-link animate-slide-down">{section[0].toUpperCase() + section.slice(1, section.length)}</li>
      </Link>)}
    </>
  )
}

export default NavLinks