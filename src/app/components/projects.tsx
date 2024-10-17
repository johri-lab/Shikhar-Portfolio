import React from 'react';
import { ProjectCard } from '.';
import { projectData } from '../utils/constants/data';

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-50 py-10 px-5">
      <div className="lg:pl-52 text-center lg:text-left">
        <h1 className="uppercase font-bold pb-5 text-lg md:text-xl text-blue-500">
          Portfolio
        </h1>
        <h2 className="font-semibold text-xl md:text-2xl">
          Each project is a unique piece of development 🧩
        </h2>
      </div>
      <div className="w-full lg:w-3/4 mx-auto py-5">
        {projectData.map((project) => (
          <ProjectCard
            key={project.title}
            img={project.img}
            title={project.title}
            description={
              <ul className="w-full text-justify">
                {project.description.map((desc, index) => (
                  <li key={index} className="py-2">
                    {desc}
                  </li>
                ))}
              </ul>
            }
            link={project.link}
            stack={project.stack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
