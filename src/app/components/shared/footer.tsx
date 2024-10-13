import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { footerData } from '@/app/utils/constants/data';

const Footer = () => {
  return (
    <div className="bg-[#2D2E32] h-32 flex justify-around text-white items-center">
      <div className="font-bold text-xl">
        Built with ❤️ & ☕️ by Shikhar Johri{' '}
      </div>
      <div className="flex justify-center items-center">
        <a target="_blank" href={footerData.linkedIn} className="text-3xl px-2">
          <CiLinkedin />
        </a>
        <a target="_blank" href={footerData.github} className="text-2xl">
          <FiGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
