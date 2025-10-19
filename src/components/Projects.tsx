import ProjectCardList from "./ProjectCardList";
import BanditSimulatorImage from "../assets/images/bandit_simulator.png"
import PathfindingSimulatorImage from "../assets/images/pathfinding_simulator.png"

export type ProjectData = {
  title: string;
  description: string;
  stack: Array<string>;
  image?: string;
  video?: string;
  githubLink: string;
};

export type ProjectsData = Array<ProjectData>;

const Projects = () => {
  const projectsData: ProjectsData = [
    {
      title: "Concert RAG System",
      description: "🎤 AI-powered system that answers concert-related questions. It processes documents, summarizes, stores relevant data, and answers prompts with the help of advanced NLP techniques, vector databases and web search.",
      stack: ["Python", "LangChain", "Huggingface", "FastAPI", "SerpAPI", "OpenRouter", "Chroma", "TypeScript", "React.js"],
      video: 'https://www.youtube.com/watch?v=HANnxs0kN7Q&feature=youtu.be',
      githubLink: "https://github.com/mweglowski/concert_rag",
    },
    {
      title: "Frozen Lake Case Study",
      description: "🧊 A reinforcement learning project using Q-learning on Gym's Frozen Lake environment. Built in Python with Pygame visualizations and Q-value snapshots. It was presented using Google Slides live at university class explaining core concepts.",
      stack: ['Reinforcement Learning', 'Python', 'Gym', 'Matplotlib', 'PyGame', 'Numpy'],
      githubLink: "https://github.com/mweglowski/frozen_lake",
    },
    {
      title: "Dynamite Avoider",
      description: "🧨 Interactive temporal difference algorithm simulator in which agent has to find the optimal path while avoiding manually placed dynamites to reach certain destination.",
      stack: [
        "Reinforcement Learning", "JavaScript", "React.js", "Tailwind"
      ],
      image: PathfindingSimulatorImage,
      githubLink: "https://github.com/mweglowski/pathfinding_simulator",
    },
    {
      title: "K-Armed Bandit Problem Simulator",
      description: "🦾🤖 Visual and interactive simulator of k-armed bandit problem",
      stack: ["Reinforcement Learning", "JavaScript", "React.js", "Tailwind"],
      image: BanditSimulatorImage,
      githubLink: "https://github.com/mweglowski/bandit_problem_simulator",
    },
  ];

  return (
    <section id="projects">
      <header>
        <h2 className="section-title mt-[150px]">Projects</h2>
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
