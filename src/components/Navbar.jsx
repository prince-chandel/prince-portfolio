import React, { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function Navbar({ dark, setDark }) {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" } 
      // triggers earlier for shorter sections like Projects
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => sections.forEach((sec) => observer.unobserve(sec))
  }, [])

  const linkClass = (id) =>
    `relative hover:text-sky-500 transition ${
      activeSection === id
        ? "text-sky-500 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-sky-500 after:rounded-full"
        : ""
    }`

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="font-bold text-lg">
          Prince<span className="text-sky-500">.dev</span>
        </a>
        <div className="flex gap-4 items-center text-sm">
          <a href="#about" className={linkClass("about")}>About</a>
          <a href="#skills" className={linkClass("skills")}>Skills</a>
          <a href="#projects" className={linkClass("projects")}>Projects</a>
          <a href="#education" className={linkClass("education")}>Education</a>
          <a href="#resume" className={linkClass("resume")}>Resume</a>
          <a href="#hobbies" className={linkClass("hobbies")}>Hobbies</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>
          <button onClick={() => setDark(!dark)} className="p-2">
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </header>
  )
}