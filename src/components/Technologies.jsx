
    import { RiReactjsLine } from "react-icons/ri";
    import { DiJava, DiPython, DiJavascript1, DiMysql, DiPostgresql, DiPhp, DiGit, DiHtml5, DiCss3 } from "react-icons/di";
    import { SiC, SiOracle, SiLaravel, SiSymfony, SiApachemaven, SiFigma, SiMongodb, SiNotion } from "react-icons/si";

    const Technologies = () => {
        return (
            <div className="border-b border-neutral-800 pb-24">
                <h2 className="my-20 text-center text-4xl">Technologies</h2>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400"/>
                    </div>  
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiJava className="text-7xl text-red-600"/>
                    </div> 
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiC className="text-7xl text-blue-600"/>
                    </div> 
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiPython className="text-7xl text-yellow-400"/>
                    </div> 
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiJavascript1 className="text-7xl text-yellow-500"/>
                    </div> 
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiMysql className="text-7xl text-blue-500"/>
                    </div> 
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiOracle className="text-7xl text-red-500"/>
                    </div> 
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiPostgresql className="text-7xl text-blue-600"/>
                    </div> 
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiPhp className="text-7xl text-purple-600"/>
                    </div> 
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiLaravel className="text-7xl text-red-600"/>
                    </div> 
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiSymfony className="text-7xl text-white"/>
                    </div> 
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiGit className="text-7xl text-orange-600"/>
                    </div> 
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiApachemaven className="text-7xl text-red-600"/>
                    </div> 
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiFigma className="text-7xl text-purple-600"/>
                    </div> 
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiHtml5 className="text-7xl text-orange-600"/>
                    </div> 
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiCss3 className="text-7xl text-blue-600"/>
                    </div> 
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiMongodb className="text-7xl text-green-600"/>
                    </div> 
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiNotion className="text-7xl text-wihte"/>
                    </div> 
                </div>
            </div>
        )
    }

    export default Technologies;

