import { Briefcase, Code, Phone, TabletSmartphone, User, Workflow } from 'lucide-react'
import React from 'react'

const AboutMeSection = () => {
    return (
        <section id="about" className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl '>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className='text-primary'>Me</span>
                </h2>
                {/* left Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className='text-2xl font-semibold'>Passionate Web & Application Developer </h3>

                        <p className='text-muted-foreground'>
                            With over 2 years of experience in web and App development, I specialize in
                            creating responsive, accessible and performant websites
                            and mobile applications using modern technologies.
                        </p>

                        <p className='text-muted-foreground'>
                            With over 2 years of experience in web and App development, I specialize in
                            creating responsive, accessible and performant websites
                            and mobile applications using modern technologies.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className='cosmic-button'>
                                Get In Touch
                            </a>
                            <a href="#contact" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                                Download Résumé
                            </a>
                        </div>
                    </div>
                    {/* right Section */}

                    <div className="grid grid-cols-1 gap-6">
                        {/* card 1 */}
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg text-primary'>Web Development Journey</h4>
                                    <p className='text-muted-foreground'>
                                        Creating responsive Full-Stack websites with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* card 2 */}
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className="p-3 rounded-full bg-primary/10">
                                    <TabletSmartphone className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg '>App Development Journey</h4>
                                    <p className='text-muted-foreground'>
                                        Creating responsive mobile applications with react native.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* card 3 */}
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Workflow className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg text-primary'>Devops Journey</h4>
                                    <p className='text-muted-foreground'>
                                        Learning Docker, Kubernetes & CI/CD Pipelining.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </section>
    )
}

export default AboutMeSection
