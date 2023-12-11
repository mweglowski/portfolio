import ProjectCardList from "./ProjectCardList";

export type ProjectData = {
  title: string;
  description: string;
  stack: Array<string>;
  imgSrc?: string;
  githubLink: string;
};

export type ProjectsData = Array<ProjectData>;

const Projects = () => {
  const projectsData: ProjectsData = [
    {
      title: "Jobfinder",
      description: "🔍 Application that searches among different artificially generated job offers and stores them in the cloud.",
      stack: [
        "Next.js",
        "React.js",
        "JavaScript",
        "OAuth",
        "MongoDb",
        "CSS",
        "Tailwind",
        "HTML",
        "GCP",
      ],
      imgSrc: "jobfinder.jpg",
      githubLink: "https://github.com/mweglowski/jobfinder",
    },
    {
      title: "Djangstaurant",
      description: "🍹 Restaurant/Pub app. Django CRUD educational project.",
      stack: ["Python", "Django", "CSS", "HTML", "SQLite3"],
      imgSrc: "djangstaurant.jpg",
      githubLink: "https://github.com/mweglowski/djangstaurant",
    },
    {
      title: "Property Price Predictor",
      description: "🏠 Predict property price by square footage using linear regression, based on data scraped from the web.",
      stack: [
        "Python",
        "Machine Learning",
        "Numpy",
        "Seaborn",
        "BeautifulSoup",
        "Pandas",
        "Matplotlib",
      ],
      githubLink: "https://github.com/mweglowski/property_price_predictor",
    },
    {
      title: "Departures",
      description: "🚌 Application that shows the nearest arrival times of buses and trams from nearby stops.",
      stack: [
        "JavaScript",
        "React.js",
        "Tailwind",
        "HTML",
        "CSS"
      ],
      imgSrc: "departures.jpg",
      githubLink: "https://github.com/mweglowski/departures",
    },
    {
      title: "This Portfolio",
      description: "🗃️ My Personal Portfolio",
      stack: [
        "TypeScript",
        "React.js",
        "Tailwind",
        "HTML",
        "CSS"
      ],
      githubLink: "https://github.com/mweglowski/portfolio-typescript",
    },
    {
      title: "Tribute Page",
      description: "🗽 Steve Jobs tribute page.",
      stack: ["HTML", "SCSS"],
      imgSrc: "tribute_page.jpg",
      githubLink: "https://github.com/mweglowski/tribute-page",
    },
  ];

  return (
    <section id="projects">
      <header>
        <h2 className="section-title mt-[100px]">Projects</h2>
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
