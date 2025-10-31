import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import ThemeButton from './ThemeButton'

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "light") {
            setIsDarkMode(false)
            document.documentElement.classList.remove("dark")
        } else {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
            if (!storedTheme) {
                localStorage.setItem("theme", "dark")
            }
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
                    " z-50 rounded-full duration-300",
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
