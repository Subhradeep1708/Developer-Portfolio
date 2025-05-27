import AboutMeSection from "../components/AboutMeSection"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import SkillsSection from "../components/SkillsSection"
import StarBackground from "../components/StarBackground"
import ThemeToggle from "../components/ThemeToggle"
import "../index.css"
const Home = () => {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <HeroSection/>
                <AboutMeSection/>
                <SkillsSection/>
            </main>

            {/* Footer */}
        </div>
    )
}

export default Home
