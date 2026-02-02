import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { publicationsData } from '../utils/constants/data';

type Publication = {
  title: string;
  venue: string;
  year: string;
  description: string;
  link?: string;
};

const Publications = () => {
  return (
    <div id="publications" className="bg-gray-50 py-10 px-5">
      <div className="lg:pl-52 text-center lg:text-left">
        <h1 className="uppercase font-bold pb-5 text-lg md:text-xl text-blue-500">
          Publications
        </h1>
        <h2 className="font-semibold text-xl md:text-2xl">
          Selected papers and publications
        </h2>
      </div>

      <div className="w-full lg:w-3/4 mx-auto py-5">
        <div className="space-y-6">
          {publicationsData.map((pub: Publication) => {
            const key = `${pub.title}-${pub.year}`;

            return (
              <div
                key={key}
                className="p-5 bg-white rounded-2xl shadow-sm flex flex-col"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-base md:text-lg text-gray-900">
                      {pub.title}
                    </h3>
                    <div className="text-sm md:text-base text-gray-600 font-medium">
                      {pub.venue} • {pub.year}
                    </div>
                  </div>

                  {pub.link ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      className="hover:scale-105 font-bold inline-flex items-center py-2 px-4 rounded-full bg-blue-500 text-white w-fit"
                    >
                      <span className="px-2">View</span>
                      <FiExternalLink />
                    </a>
                  ) : null}
                </div>

                <p className="text-sm md:text-base text-gray-700 mt-3">
                  {pub.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Publications;
