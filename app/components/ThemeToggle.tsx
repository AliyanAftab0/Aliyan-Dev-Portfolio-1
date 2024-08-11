"use client"
import { useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa'
import { BsSunFill } from 'react-icons/bs'

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") {
            setDarkMode(true)
        } else {
            setDarkMode(false)
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    return (
        <div>
            <button 
                className={`p-3 rounded-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-slate-100 text-yellow-400'}`}
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? <FaMoon size={18} /> : <BsSunFill size={18} />}
            </button>
        </div>
    )
}

export default ThemeToggle
