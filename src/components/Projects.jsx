import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl">Projects</motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <a 
                        key={index} 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="card p-4 border-2 border-dashed border-red-500 rounded-xl shadow-lg transform transition-transform hover:scale-105"
                    >
                        <div className="flex justify-center">
                            <img 
                                src={project.image} 
                                className="w-64 h-64 object-cover" 
                                alt={project.title} 
                            />
                        </div>
                        <h3 className="mt-4 text-xl font-bold text-center">{project.title}</h3>
                        <p className="mt-2 text-center">{project.description}</p>
                        <div className="mt-2 text-center">
                            {project.technologies.map((tech, techIndex) => (
                                <span 
                                    key={techIndex} 
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;