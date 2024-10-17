'use client';

import React from 'react';
import { Tilt } from 'react-tilt';
import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';
import { ProjectCardProps } from '../utils/props';

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  stack,
  img,
}) => {
  return (
    <div className="p-5 bg-white my-10 rounded-2xl flex flex-col lg:flex-row justify-center items-center text-center lg:text-left">
      <figure className="mb-5 lg:mb-0 lg:mr-10">
        <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
          <Image
            className="rounded-3xl shadow-2xl"
            src={img}
            height={400}
            width={400}
            alt="setup"
          />
        </Tilt>
      </figure>
      <div className="flex flex-col justify-center h-full">
        <h1 className="uppercase font-bold text-lg md:text-xl mb-4 text-blue-500">
          {title}
        </h1>
        <div className="max-w-lg mb-4">{description}</div>
        <div className="flex justify-center lg:justify-start items-center py-3 flex-wrap">
          {stack?.map((tech: { name: React.Key | null | undefined }) => (
            <Image
              key={tech.name}
              src={`https://skillicons.dev/icons?i=${tech.name}`}
              height={50}
              width={50}
              className="px-2 py-2"
              alt="tech"
            />
          ))}
        </div>
        <div className="flex justify-center lg:justify-start items-center">
          <a
            href={link}
            target="_blank"
            className="hover:scale-110 font-bold flex items-center py-2 px-4 rounded-full bg-blue-500 text-white">
            <span className="px-2">View Project</span> <FiGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
