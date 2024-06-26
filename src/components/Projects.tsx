import ProjectCardList from "./ProjectCardList";
import DjangstaurantImage from "../assets/images/djangstaurant.jpg"
import DeparturesImage from "../assets/images/departures.png"
import BanditSimulatorImage from "../assets/images/bandit_simulator.png"
import PathfindingSimulatorImage from "../assets/images/pathfinding_simulator.png"

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
      title: "Pathfinding Simulator",
      description: "🧨 Interactive temporal difference algorithm simulator in which agent has to find the optimal path to reach certain destination.",
      stack: [
        "Reinforcement Learning", "JavaScript", "React.js", "Tailwind"
      ],
      image: PathfindingSimulatorImage,
      githubLink: "https://github.com/mweglowski/pathfinding_simulator",
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
      title: "K-Armed Bandit Problem Simulator",
      description: "🦾🤖 Visual and interactive simulator of k-armed bandit problem",
      stack: ["Reinforcement Learning", "JavaScript", "React.js", "Tailwind"],
      image: BanditSimulatorImage,
      githubLink: "https://github.com/mweglowski/bandit_problem_simulator",
    },
    {
      title: "Djangstaurant",
      description: "🍹 Restaurant/Pub app. Django CRUD educational project.",
      stack: ["Python", "Django", "CSS", "HTML", "SQLite3"],
      image: DjangstaurantImage,
      githubLink: "https://github.com/mweglowski/djangstaurant",
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
