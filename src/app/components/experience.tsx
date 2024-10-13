import React from 'react';
import { ExperienceCard } from '.';
import { experienceData } from '../utils/constants/data';

const Experience = () => {
  return (
    <div id="experience" className="ml-52 w-3/4">
      <h1 className="uppercase text-xl font-bold py-10 text-blue-500">
        Experience
      </h1>
      <ol className="relative border-s border-gray-200">
        {experienceData.map((experience: any) => (
          <ExperienceCard
            key={experience.companyName}
            logo={experience.logo} // New prop for company logo
            timeline={experience.timeline}
            companyName={experience.companyName}
            role={experience.role}
            description={
              <ul>
                {experience.description.map((desc: any) => (
                  <li key={desc} className="list-disc ml-2 my-2">
                    {desc}
                  </li>
                ))}
              </ul>
            }
          />
        ))}
      </ol>
    </div>
  );
};

export default Experience;
