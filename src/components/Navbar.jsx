import { useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300 px-10",
            isScrolled ? "py-4 backdrop-blur-md shadow-xs" : "py-4"
        )}>

            <div className=" flex items-center justify-between ">
                <a
                    href='#hero'
                    className='text-xl sm:text-2xl font-bold text-primary flex items-center'
                >
                    <span className='relative z-10 hidden md:inline-block'>

                        <span className='text-glow text-foreground'>Subhradeep's</span> Portfolio
                    </span>
                    <img className='md:hidden size-12' alt='logo' src='/favicon.svg'/>
                </a>

                {/* desktop nav */}
                <div className='hidden md:flex space-x-7 px-2 items-center '>
                    {navItems.map((item, key) =>
                        <a href={item.href} key={key}
                            className='text-foreground/80 hover:text-primary transition-colors duration-300 font-semibold'
                        >

                            {item.name}</a>
                    )}
                    <div className="md:block hidden">
                        <ThemeToggle />
                    </div>

                </div>

                {/* mobile nav */}
                <div className="md:hidden py-2 flex items-center text-foreground ">
                   <div className="mr-4">

                    <ThemeToggle />
                   </div>


                    <button onClick={() => setIsMenuOpen((prev) => !prev)}
                        className='md:hidden p-2 text-foreground z-50 '
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <div className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col ",
                        "items-center justify-center transition-all duration-300 md:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}>
                        <div className='flex flex-col space-y-8 '>
                            {navItems.map((item, key) =>
                                <a href={item.href} key={key}
                                    className='text-foreground/80 hover:text-primary transition-colors duration-300 font-semibold'
                                    onClick={() => setIsMenuOpen(false)}
                                >

                                    {item.name}</a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
