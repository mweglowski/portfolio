import ContactForm from "./ContactForm";
import LinkedinIcon from "../assets/images/linkedin.svg"
import GithubIcon from "../assets/images/github.svg"
import DatacampIcon from "../assets/images/datacamp.svg"
import CodewarsIcon from "../assets/images/codewars.svg"

const Contact = () => {
  return (
    <section className="mt-[100px]">
      <header>
        <h2 className="section-title">Contact</h2>
        <p className="text-slate-400 text-center">
          You can reach me in different ways
        </p>
      </header>

      {/* EMAIL */}
      <ContactForm />

      {/* SOCIAL MEDIA LINKS */}
      <h2 className="text-center text-lg text-slate-400 mt-14">SOCIAL MEDIA</h2>
      {/* ICONS */}
      <div className="flex gap-5 justify-center py-4">
        <a href="https://www.linkedin.com/in/marcin-w%C4%99g%C5%82owski/" target="_blank">
          <img src={LinkedinIcon} className="socials-icon" />
        </a>
        <a href="https://github.com/mweglowski" target="_blank">
          <img src={GithubIcon}className="socials-icon" />
        </a>
        <a href="https://www.datacamp.com/portfolio/s1lent" target="_blank">
          <img src={DatacampIcon} className="socials-icon" />
        </a>
        <a href="https://www.codewars.com/users/_silent">
          <img src={CodewarsIcon} className="socials-icon" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
