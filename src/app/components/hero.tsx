'use client';
import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import man from '../utils/images/man.png';
import Image from 'next/image';
import { techStack } from '../utils/constants/hero.const';
import { Tilt } from 'react-tilt';
import GitHubCalendar from 'react-github-calendar';
import { TypeAnimation } from 'react-type-animation';
import { introData } from '../utils/constants/data';

const Hero = () => {
  return (
    <div className="bg-gray-50 py-10 w-screen flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row justify-center items-center py-10">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:pl-32 px-5 text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl font-bold pt-5 pb-2 hero-title">
            <TypeAnimation
              sequence={introData.sequence}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1.5em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <h2 className="text-md md:text-lg pb-5 pt-3 font-medium text-gray-600 lg:pr-20 hero-subtitle">
            {introData.introLine}
          </h2>
          <div className="flex justify-center lg:justify-start items-center text-gray-800">
            <a
              href={introData.linkedInLink}
              target="_blank"
              className="text-3xl md:text-4xl font-bold pr-2">
              <CiLinkedin />
            </a>
            <a
              href={introData.gitHubLink}
              target="_blank"
              className="text-2xl md:text-3xl font-medium pl-2">
              <FiGithub />
            </a>
          </div>
        </div>
        <figure className="mt-10 lg:mt-0 lg:pr-32">
          <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
            <Image
              className="rounded-2xl"
              src={man}
              height={500}
              width={400}
              alt={'My Photo'}
            />
          </Tilt>
        </figure>
      </div>
      <div className="w-full mx-auto py-10">
        <div className="w-full mx-auto text-center text-lg md:text-xl font-semibold">
          Tech Stack
        </div>
        <div className="py-5 text-lg md:text-xl">-</div>
        <div className="flex flex-wrap justify-center items-center">
          {techStack?.map((tech) => (
            <Image
              key={tech.name}
              src={`https://skillicons.dev/icons?i=${tech.name}`}
              height={60}
              width={60}
              className="px-2 py-2"
              alt="tech"
            />
          ))}
        </div>
        <div className="w-full mx-auto flex justify-center text-center py-10">
          <GitHubCalendar
            colorScheme="light"
            username={introData.gitHubUsername}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
