import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { footerData } from '@/app/utils/constants/data';

const Footer = () => {
  return (
    <div className="bg-[#2D2E32] h-auto py-10 lg:h-32 flex flex-col lg:flex-row justify-center lg:justify-around items-center text-white">
      <div className="font-bold text-center text-lg md:text-xl mb-3 lg:mb-0">
      Built with ❤️ & ☕️ by Shikhar Johri
      </div>
      <div className="flex justify-center items-center">
        <a
          target="_blank"
          href={footerData.linkedIn}
          className="text-2xl md:text-3xl px-2">
          <CiLinkedin />
        </a>
        <a
          target="_blank"
          href={footerData.github}
          className="text-2xl md:text-3xl">
          <FiGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
