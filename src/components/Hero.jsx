import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/image.png";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const RoleCycler = ({ roles, typingSpeed = 100, pauseTime = 2000 }) => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        let typingTimeout;

        if (!isDeleting && displayedText !== currentRole) {
            // Add the next character
            typingTimeout = setTimeout(() => {
                setDisplayedText(currentRole.slice(0, displayedText.length + 1));
            }, typingSpeed);
        } else if (isDeleting && displayedText !== '') {
            // Remove the last character
            typingTimeout = setTimeout(() => {
                setDisplayedText(currentRole.slice(0, displayedText.length - 1));
            }, typingSpeed);
        } else if (!isDeleting && displayedText === currentRole) {
            // Pause before deleting
            typingTimeout = setTimeout(() => {
                setIsDeleting(true);
            }, pauseTime);
        } else if (isDeleting && displayedText === '') {
            // Move to the next role
            setIsDeleting(false);
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }

        return () => clearTimeout(typingTimeout);
    }, [displayedText, isDeleting, roles, currentRoleIndex, typingSpeed, pauseTime]);

    return (
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500">
            {"I'm "}{displayedText}
            <span className="animate-blink">|</span>
        </span>
    );
};

const Hero = () => {
    const roles = ["Full Stack Developer", "Software Engineer", "Data Engineer"];

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-5xl font-tjin tracking-tight lg:mt16 lg:text-6xl"
                        >
                            Yassine ECH-CHAIRI 
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="text-4xl tracking-tight"
                        >
                            <RoleCycler roles={roles} />
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            alt="profile"
                            className="rounded-lg shadow-lg w-5/6" // Adjusted size
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;