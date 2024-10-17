import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaMapLocationDot } from 'react-icons/fa6';
import { contactData } from '../utils/constants/data';

const Contact = () => {
  return (
    <div
      id="contact"
      className="py-10 px-5 lg:px-20 flex flex-col justify-start lg:pl-52">
      <h1 className="uppercase font-bold pb-5 text-lg md:text-xl text-blue-500 text-center lg:text-left">
        Contact
      </h1>
      <h1 className="font-semibold text-base md:text-lg text-center lg:text-left">
        Don&apos;t be shy! Hit me up!
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-start py-5 space-y-5 md:space-y-0 md:space-x-5 text-center lg:text-left">
        <div className="flex flex-row items-center justify-center md:justify-start">
          <span className="text-xl text-blue-600">
            <FaMapLocationDot />
          </span>
          <p className="pl-3 font-medium">{contactData.place}</p>
        </div>
        <div className="flex flex-row items-center justify-center md:justify-start">
          <span className="text-xl text-blue-600">
            <MdEmail />
          </span>
          <a href={`mailto:${contactData.email}`} className="pl-3 font-medium">
            {contactData.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
