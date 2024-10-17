import React from 'react';
import Image from 'next/image';
import setup from '../utils/images/coding.webp';
import { aboutData } from '../utils/constants/data';

const About = () => {
  return (
    <div
      id="about"
      className="py-20 px-5 flex flex-col lg:flex-row justify-center items-center">
      <figure className="mb-10 lg:mb-0 lg:mr-10">
        <Image
          className="rounded-3xl"
          src={setup}
          height={400}
          width={400}
          alt="setup"
        />
      </figure>
      <div className="flex flex-col justify-center h-full text-center lg:text-left">
        <h1 className="uppercase font-bold text-lg mb-4 text-blue-500">
          about me
        </h1>
        <h2 className="font-bold text-xl md:text-2xl mb-4 max-w-lg">
          {aboutData.aboutLine}
        </h2>
        <p className="max-w-lg">{aboutData.aboutDescription}</p>
      </div>
    </div>
  );
};

export default About;
