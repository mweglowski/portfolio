import React from "react";
import { type ProjectData } from "./Projects";

type ProjectCardProps = {
  projectData: ProjectData;
};

const ProjectCard = ({ projectData }: ProjectCardProps) => {
	const {title, description, stack, imgSrc, githubLink} = projectData;

  return (
    <div className="border-2 border-slate-800 rounded-md">
      {/* CARD HEADER */}
      <div className="text-center text-xl p-2 border-b-2 border-slate-800">
        {title}
      </div>

      <div className="p-2 text-center border-b-2 border-slate-800">
        <p className="text-slate-400">{description}</p>
      </div>

      {/* TECH STACK */}
      <div className="p-2">
        <div className="text-slate-500  text-center">Tech Stack</div>
        <ul className="flex flex-wrap gap-2 justify-center">
					{stack.map((tech) => <li className="tech" key={tech}>{tech}</li>)}
        </ul>
      </div>

      {/* ACTIONS */}
      <div className="flex justify-between mt-3 items-end">
        <button className="text-slate-400 border-t-2 border-r-2 border-slate-800 p-2 rounded-tr-md hover:bg-slate-800 duration-300">
          Preview
        </button>
        <a className="text-amber-400 hover:underline cursor-pointer p-1 pr-2 hover:text-amber-500 duration-300" href={githubLink} target="_blank">
          See on github →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
