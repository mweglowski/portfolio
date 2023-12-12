import React from "react";
import { type ProjectData } from "./Projects";
import { useProjectPreviewContext } from "../store/project-preview-context";

type ProjectCardProps = {
  projectData: ProjectData;
};

const ProjectCard = ({ projectData }: ProjectCardProps) => {
  const { toggleDisplay, setImageSource } = useProjectPreviewContext();

  const { title, description, stack, image, githubLink } = projectData;

  const previewDisplayHandler = () => {
    setImageSource(image as string);
    toggleDisplay();
  };

  return (
    <div className="card min-w-[350px] w-[45%] max-w-[400px] flex flex-col h-fit">
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
          {stack.map((tech) => (
            <li className="tech" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* ACTIONS */}
      <div className="flex justify-between mt-3 items-end">
        {image ? (
          <button
            className="text-slate-400 border-t-2 border-r-2 border-slate-800 p-2 rounded-tr-md button-hover"
            onClick={previewDisplayHandler}
          >
            Preview
          </button>
        ) : null}
        <a
          className="text-amber-400 hover:underline cursor-pointer p-1 pr-2 hover:text-amber-500 duration-300 ml-auto"
          href={githubLink}
          target="_blank"
        >
          See on github →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
