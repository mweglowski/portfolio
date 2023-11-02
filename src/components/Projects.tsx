import ProjectCardList from "./ProjectCardList";

export type ProjectData = {
  title: string;
  stack: Array<string>;
  imgSrc: string;
  githubLink: string;
};

export type ProjectsData = Array<ProjectData>;

const Projects = () => {
  const projectsData: ProjectsData = [
    {
      title: "Jobfinder",
      stack: [
        "Next.js",
        "React.js",
        "JavaScript",
        "OAuth",
        "MongoDb",
        "CSS",
        "Tailwind",
        "HTML",
      ],
      imgSrc: "../assets/images/jobfinder.jpg",
      githubLink: "https://github.com/mweglowski/jobfinder",
    },
    {
      title: "Djangstaurant",
      stack: [
        "Python",
        "Django",
        "CSS",
        "HTML",
        "SQLite3",
      ],
      imgSrc: "../assets/images/djangstaurant.jpg",
      githubLink: "https://github.com/mweglowski/djangstaurant",
    },
    {
      title: "Property Price Predictor",
      stack: [
        "Python",
        "Machine Learning",
        "Numpy",
        "Seaborn",
        "BeautifulSoup",
        "Pandas",
        "Matplotlib"
      ],
      imgSrc: "../assets/images/property_price_predictor.jpg",
      githubLink: "https://github.com/mweglowski/property_price_predictor",
    },
    {
      title: "Tribute Page",
      stack: [
        "HTML",
        "SCSS"
      ],
      imgSrc: "../assets/images/tribute_page.jpg",
      githubLink: "https://github.com/mweglowski/tribute-page",
    }
  ];

  return (
    <section>
      <header className="">
        <h2 className="section-title">Projects</h2>
        <p className="text-slate-400 text-center">
          Each project you can find on my github
        </p>
      </header>

      {/* PROJECT CARD LIST */}
      <ProjectCardList projectsData={projectsData} />
    </section>
  );
};

export default Projects;
