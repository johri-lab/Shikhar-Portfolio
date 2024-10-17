'use client';

import React from 'react';
import Image from 'next/image';
import { ExperienceCardProps } from '../utils/props';

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  logo,
  timeline,
  companyName,
  role,
  description,
  subRole,
  subDescription,
}) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
      <time className="block my-1 text-xs md:text-sm font-normal leading-none text-gray-400">
      {logo && (
          <Image
            src={logo}
            alt={`${companyName} logo`}
            width={40}
            height={40}
            className="object-contain"
          />
        )}
        {timeline}
      </time>
      <h3 className="text-base md:text-lg font-semibold text-gray-900">
        {companyName}
      </h3>
      <h4 className="text-sm md:text-base text-gray-600 font-medium">{role}</h4>
      <ul className="list-inside text-sm md:text-base text-gray-700">
        {description}
      </ul>
    </li>
  );
};

export default ExperienceCard;
