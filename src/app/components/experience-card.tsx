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
      <div className="flex items-center gap-4">
        {logo && (
          <Image
            src={logo}
            alt={`${companyName} logo`}
            width={40}
            height={40}
            className="object-contain"
          />
        )}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{companyName}</h3>
          <h4 className="text-gray-600 font-medium">{role}</h4>
        </div>
      </div>
      <time className="my-1 text-sm font-normal leading-none text-gray-400">
        {timeline}
      </time>
      <ul>{description}</ul>
      {subRole && (
        <div className="mt-4">
          <h4 className="text-gray-600 font-medium">{subRole}</h4>
          <ul>{subDescription}</ul>
        </div>
      )}
    </li>
  );
};

export default ExperienceCard;
