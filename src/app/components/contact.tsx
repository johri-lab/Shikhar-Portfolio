import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaMapLocationDot } from 'react-icons/fa6';
import { contactData } from '../utils/constants/data';

const Contact = () => {
  return (
    <div id="contact" className="py-10 flex flex-col justify-start pl-52">
      <h1 className="uppercase font-bold pb-5 text-xl text-blue-500">
        Contact
      </h1>
      <h1 className="font-semibold text-lg">Don&apos;t be shy! Hit me up!</h1>

      <div className="flex flex-row items-center justify-start py-5">
        <span className="text-xl text-blue-600">
          <FaMapLocationDot />
        </span>
        <p className="pl-5 font-medium">{contactData.place}</p>
      </div>
      <div className="flex flex-row items-center justify-start">
        <span className="text-xl text-blue-600">
          <MdEmail />
        </span>
        <a href={`mailto:${contactData.email}`} className="pl-5 font-medium">
          {contactData.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
