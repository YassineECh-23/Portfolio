import React from 'react';
import aboutImg from '../assets/me.png';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500"> Me </span>
      </h2>
      <div className="flex flex-wrap items-center">
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8 order-1 lg:order-1">
          <div className="flex items-center justify-center lg:justify-start">
            <img src={aboutImg} alt="About Me" className="rounded-full w-80 h-80" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8 order-2 lg:order-2">
          <div className="flex justify-center lg:justify-start">
            <p className="text-justify text-lg">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;