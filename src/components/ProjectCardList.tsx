import React from "react";
import { type ProjectsData } from "./Projects";
import ProjectCard from "./ProjectCard";

type ProjectCardListProps = {
  projectsData: ProjectsData;
};

const ProjectCardList = ({ projectsData }: ProjectCardListProps) => {
  return (
    <div className="flex p-4 gap-8 mt-8 flex-wrap justify-center">
      {projectsData.map((projectData) => (
        <ProjectCard projectData={projectData} key={Math.random()}/>
      ))}
    </div>
  );
};

export default ProjectCardList;
