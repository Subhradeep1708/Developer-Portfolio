import React, { useState } from 'react'
import { cn } from '../lib/utils'
import { ImHtmlFive } from 'react-icons/im';
import { RiJavascriptFill, RiNextjsFill } from 'react-icons/ri';
import { FaDocker, FaFigma, FaGitAlt, FaReact } from 'react-icons/fa';
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { VscVscodeInsiders } from 'react-icons/vsc';

const skills = [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend" ,icon: <ImHtmlFive size={34}/>},
    { name: "JavaScript", level: 90, category: "frontend", icon: <RiJavascriptFill size={34} /> },
    { name: "React", level: 90, category: "frontend", icon: <FaReact size={34} /> },
    { name: "TypeScript", level: 85, category: "frontend", icon: <BiLogoTypescript size={34} /> },
    { name: "Tailwind CSS", level: 90, category: "frontend", icon: <SiTailwindcss size={34} /> },
    { name: "Next.js", level: 80, category: "frontend", icon: <RiNextjsFill size={34} /> },

    // Backend
    { name: "Node.js", level: 80, category: "backend", icon: <DiNodejs size={34} /> },
    { name: "Express", level: 75, category: "backend", icon: <SiExpress size={34} /> },
    { name: "MongoDB", level: 70, category: "backend", icon: <SiMongodb size={34} /> },
    { name: "PostgreSQL", level: 65, category: "backend", icon: <BiLogoPostgresql size={34} /> },
    // { name: "GraphQL", level: 60, category: "backend" },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools", icon: <FaGitAlt size={34} /> },
    { name: "Docker", level: 70, category: "tools", icon: <FaDocker size={34} /> },
    { name: "Figma", level: 85, category: "tools", icon: <FaFigma size={34} /> },
    { name: "VS Code", level: 95, category: "tools", icon: <VscVscodeInsiders size={34} /> },

    // app
    { name: "React Native", level: 90, category: "app", icon: <FaReact size={34} /> },
    // { name: "Docker", level: 70, category: "app", icon: <ImHtmlFive size={30} /> },
]

const categories = ["all", "frontend", "backend", "tools","app"];

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) =>
        activeCategory === "all" || skill.category === activeCategory)
    return (
        <section id='skills'
            className='py-25 px-4 relative bg-secondary/30 '
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    My <span className='text-primary'> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                'px-5 py-2 rounded-full transition-colors duration-300 capitalize border-2 border-transparent hover:border-primary/50',
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary",
                
                            )}

                        >
                            {category}
                        </button>
                    ))}
                </div>


                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="py-4 bg-card rounded-lg shadow-md card-hover border-2 border-transparent hover:border-primary/50 hover:duration-300">

                            {/* icons */}
                            <div className=" flex justify-center  ">
                                <div className='bg-slate-300/30 h-14 w-14 justify-center items-center flex rounded-full mb-4 text-primary text-2xl'>
                                {skill.icon}
                                </div>
                            </div>
                            {/* Heading  */}
                            <div className='text-center mb-2'>
                                <h3 className='font-semibold text-lg'>
                                    {skill.name}
                                </h3>
                            </div>
                            {/* Progress Bar */}
                            {/* <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                                <div className="h-2 bg-primary rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div> */}
                            {/* % value */}
                            {/* <div className='text-right mt-1'>
                                <span className='text-sm text-muted-foreground'>
                                    {skill.level}%
                                </span>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default SkillsSection
