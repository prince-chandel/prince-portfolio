import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ dark, setDark }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const linkClass = (id) =>
    `block px-3 py-2 rounded-md hover:text-sky-500 transition ${
      activeSection === id ? "text-sky-500 font-semibold" : ""
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        
        {/* Logo */}
        <a href="#" className="font-bold text-lg">
          Prince<span className="text-sky-500"> Portfolio</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#about" className={linkClass("about")}>About</a>
          <a href="#skills" className={linkClass("skills")}>Skills</a>
          <a href="#projects" className={linkClass("projects")}>Projects</a>
          <a href="#education" className={linkClass("education")}>Education</a>
          <a href="#resume" className={linkClass("resume")}>Resume</a>
          <a href="#hobbies" className={linkClass("hobbies")}>Hobbies</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>
        </nav>

        {/* Right side: Dark mode toggle + Hamburger */}
        <div className="flex items-center gap-3">
          <button onClick={() => setDark(!dark)} className="p-2">
            {dark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 px-4 py-3">
          <a href="#about" onClick={() => setMenuOpen(false)} className={linkClass("about")}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className={linkClass("skills")}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className={linkClass("projects")}>Projects</a>
          <a href="#education" onClick={() => setMenuOpen(false)} className={linkClass("education")}>Education</a>
          <a href="#resume" onClick={() => setMenuOpen(false)} className={linkClass("resume")}>Resume</a>
          <a href="#hobbies" onClick={() => setMenuOpen(false)} className={linkClass("hobbies")}>Hobbies</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className={linkClass("contact")}>Contact</a>
        </nav>
      )}
    </header>
  );
}