import React from "react";
import { type ProjectsData } from "./Projects";
import ProjectCard from "./ProjectCard";

type ProjectCardListProps = {
  projectsData: ProjectsData;
};

const ProjectCardList = ({ projectsData }: ProjectCardListProps) => {
  return (
    <div className="flex flex-col p-6 gap-10 mt-8">
      {projectsData.map((projectData) => (
        <ProjectCard projectData={projectData} key={Math.random()}/>
      ))}
    </div>
  );
};

export default ProjectCardList;
