import ProjectCardList from "./ProjectCardList";
import JobfinderImage from "../assets/images/jobfinder.jpg"
import DjangstaurantImage from "../assets/images/djangstaurant.jpg"
import DeparturesImage from "../assets/images/departures.jpg"
import TributePageImage from "../assets/images/tribute_page.jpg"

export type ProjectData = {
  title: string;
  description: string;
  stack: Array<string>;
  image?: string;
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
      image: JobfinderImage,
      githubLink: "https://github.com/mweglowski/jobfinder",
    },
    {
      title: "Djangstaurant",
      description: "🍹 Restaurant/Pub app. Django CRUD educational project.",
      stack: ["Python", "Django", "CSS", "HTML", "SQLite3"],
      image: DjangstaurantImage,
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
      image: DeparturesImage,
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
      image: TributePageImage,
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
