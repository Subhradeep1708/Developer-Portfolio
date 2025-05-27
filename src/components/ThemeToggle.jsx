import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import ThemeButton from './ThemeButton'

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        } else {
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
        }
    }, [])
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true)

        }
    }

    return (
        <>
            {/* <ThemeButton onClick={toggleTheme}
                className= "fixed max-sm:hidden top-5 right-5 z-50 rounded-full duration-300 focus:outline-hidden"
            ></ThemeButton> */}
            <button
                onClick={toggleTheme}
                className={cn(
                    "fixed max-sm:hidden top-5 right-5 z-50 rounded-full duration-300",
                    "focus:outline-hidden p-1"
                )}
            >
                {isDarkMode ? (
                    <Sun className='h-6 w-6 text-yellow-300' />)
                    : (
                        <Moon className='h-6 w-6 text-blue-900' />
                    )}
            </button>

        </>
    )
}

export default ThemeToggle
