
    import { RiReactjsLine } from "react-icons/ri";
    import { DiJava, DiPython, DiJavascript1, DiMysql, DiPostgresql, DiPhp, DiGit, DiHtml5, DiCss3 } from "react-icons/di";
    import { SiC, SiOracle, SiLaravel, SiSymfony, SiApachemaven, SiFigma, SiMongodb, SiNotion } from "react-icons/si";
    import { motion } from "framer-motion";


const iconVariants = (duration) => ({
    initial : {  y: -50 },
    animate : { 
        y: [10, -10],
        transition: {
            duration: duration,
            ease : "linear",
            repeat : Infinity,
            repeatType: "reverse",
        },   
    },
});

    const Technologies = () => {
        return (
            <div className="border-b border-neutral-800 pb-24">
                <motion.h2 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}                    
                
                className="my-20 text-center text-4xl">Technologies</motion.h2>


                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}   

                className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div 
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400"/>
                    </motion.div>  
                    <motion.div 
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiJava className="text-7xl text-red-600"/>
                    </motion.div> 
                    <motion.div  
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiC className="text-7xl text-blue-600"/>
                    </motion.div> 
                    <motion.div 
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiPython className="text-7xl text-yellow-400"/>
                    </motion.div> 
                    <motion.div 
                        variants={iconVariants(4.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiJavascript1 className="text-7xl text-yellow-500"/>
                    </motion.div> 
                    <motion.div 
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiMysql className="text-7xl text-blue-500"/>
                    </motion.div> 
                    <motion.div 
                        variants={iconVariants(5.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiOracle className="text-7xl text-red-500"/>
                    </motion.div> 
                    <motion.div 
                        variants={iconVariants(6)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiPostgresql className="text-7xl text-blue-600"/>
                    </motion.div> 
                </motion.div>


                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }} 
                className="flex flex-wrap items-center justify-center gap-4 mt-8">
                    <motion.div 
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiPhp className="text-7xl text-purple-600"/>
                    </motion.div> 
                    <motion.div 
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiLaravel className="text-7xl text-red-600"/>
                    </motion.div> 
                    <motion.div 
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiSymfony className="text-7xl text-white"/>
                    </motion.div> 
                    <motion.div 
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiGit className="text-7xl text-orange-600"/>
                    </motion.div> 
                    <motion.div 
                        variants={iconVariants(4.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiApachemaven className="text-7xl text-red-600"/>
                    </motion.div> 
                    <motion.div 
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiFigma className="text-7xl text-purple-600"/>
                    </motion.div> 
                </motion.div>


                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }} 
                className="flex flex-wrap items-center justify-center gap-4 mt-8">
                    <motion.div 
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiHtml5 className="text-7xl text-orange-600"/>
                    </motion.div> 
                    <motion.div 
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiCss3 className="text-7xl text-blue-600"/>
                    </motion.div> 
                    <motion.div 
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiMongodb className="text-7xl text-green-600"/>
                    </motion.div> 
                    <motion.div 
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiNotion className="text-7xl text-white"/>
                    </motion.div> 
                </motion.div>
            </div>
        )
    }

    export default Technologies;

