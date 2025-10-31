import { ArrowRight, ExternalLink, Github } from 'lucide-react';


const projects = [
    {
        id: 1,
        title: "Digital Wallet",
        description:
            "A modern solution to manage your finances, track expenses, and make secure transactions.",
        image: "/projects/project6.png",
        tags: ["Next.js", "ShadCN", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/Subhradeep1708/Digital-Wallet-App",
    },
    {
        id: 2,
        title: "Hotel Booking App(Booky)",
        description:
            "Hotel booking application with user authentication, room search, and reservation features.",
        image: "/projects/project7.png",
        tags: ["Next.js", "ShadCN", "TailwindCSS","Strapi","RazorPay","Kinde"],
        demoUrl: "https://booky-hotel-booking.vercel.app/",
        githubUrl: "https://github.com/Subhradeep1708/Hotel-Booking",
    },
    {
        id: 3,
        title: "Music School Website",
        description:
            "A modern website for a music school with course listings and instructor profiles.",
        image: "/projects/project4.png",
        tags: ["Next.js", "Aceternity", "TailwindCSS"],
        demoUrl: "https://music-school-website-zeta.vercel.app/",
        githubUrl: "https://github.com/Subhradeep1708/Music-School-Website",
    },
    {
        id: 4,
        title: "Organa",
        description:
            "A real time organ matching platform powered by AI. Won 2nd prize in Hackathon organized by GCECT and Bytemonk in 2025.",
        image: "/projects/organa2.jpg",
        tags: ["Next.js", "Python", "WebSocket", "TailwindCSS", "PostgreSQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/Subhradeep1708/Karmatek-2025-Organa",
    },
    // {
    //     id: 4,
    //     title: "My Portfolio",
    //     description:
    //         "A personal portfolio website showcasing my skills, projects, and experience.",
    //     image: "/projects/Portfolio.png",
    //     tags: ["React", "TailwindCSS"],
    //     demoUrl: "#",
    //     githubUrl: "https://github.com/Subhradeep1708/Developer-Portfolio",
    // },

];

const ProjectSection = () => {
    return (
        <section id='projects' className='py-4 px-4 relative'>
            <div className="container mx-auto max-w-5xl">
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Featured <span className='text-primary'>Projects</span>
                </h2>

                <p className="mb-12 text-center text-muted-foreground max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group h-auto bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                            <div className='h-48 overflow-hidden'>
                                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, key) => (
                                        <span key={key} className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'>{tag}</span>
                                    ))}
                                </div>

                                <hr />
                                <h3 className=' my-4 text-xl font-semibold mb-1'>{project.title}</h3>
                                <p className="mb-4 text-muted-foreground text-sm">
                                    {project.description}
                                </p>


                                <div className='flex justify-baseline items-center py-2'>
                                    <div className="flex space-x-3 ">
                                        <a
                                            href={project.demoUrl === "#" ? "#projects" : project.demoUrl}
                                            target={project.demoUrl === "#" ? undefined : "_blank"}
                                            rel={project.demoUrl === "#" ? undefined : "noopener noreferrer"}
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                        ><ExternalLink size={20} /></a>
                                        <a
                                            // href={project.githubUrl}
                                            // target='_blank'
                                            href={project.githubUrl === "#" ? "#projects" : project.githubUrl}
                                            target={project.githubUrl === "#" ? undefined : "_blank"}
                                            rel={project.githubUrl === "#" ? undefined : "noopener noreferrer"}
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                        ><Github size={20} /></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/Subhradeep1708"
                        target='_blank'
                        className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                        Check My Gihub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection
