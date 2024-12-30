import React from 'react';
import aboutImg from '../assets/me.png';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500"> Me </span>
      </h2>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:p-8 order-1 lg:order-1">
          <div className="flex items-center justify-center lg:justify-start">
            <img src={aboutImg} alt="About Me" className="rounded-full w-80 h-80" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 order-2 lg:order-2">
          <div className="flex justify-center lg:justify-start">
            <p className="text-justify text-lg">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;