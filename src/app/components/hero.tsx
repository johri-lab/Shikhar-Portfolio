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
      <div className="flex justify-center items-center py-10">
        <div className="w-1/2 flex flex-col justify-center items-start pl-32">
          <h1 className="text-xl font-bold pt-5 pb-2 hero-title">
            <TypeAnimation
              sequence={introData.sequence}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <h2 className="text-lg pb-5 pt-3 font-medium text-gray-600 pr-20 hero-subtitle">
            {introData.introLine}
          </h2>
          <div className="flex items-center text-gray-800">
            <a
              href={introData.linkedInLink}
              target="_blank"
              className="text-4xl font-bold pr-2">
              <CiLinkedin />
            </a>
            <a
              href={introData.gitHubLink}
              target="_blank"
              className="text-3xl font-medium pl-2">
              <FiGithub />
            </a>
          </div>
        </div>
        <figure className="pr-32">
          <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
            <Image
              className="rounded-2xl"
              src={man}
              height={400}
              width={400}
              alt={'My Photo'}
            />
          </Tilt>
        </figure>
      </div>
      <div className="flex flex-col items-center justify-center py-10">
        <div className="text-xl font-semibold">Tech Stack</div>
        <div className="py-5 text-xl">-</div>
        <div className="flex justify-center items-center">
          {techStack?.map((tech) => (
            <Image
              key={tech.name}
              src={`https://skillicons.dev/icons?i=${tech.name}`}
              height={70}
              width={70}
              className="px-2 "
              alt="tech"
            />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center py-10">
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
