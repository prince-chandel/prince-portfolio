import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Resume from './components/Resume'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // ✅ Default to light mode, but check localStorage if user set a preference
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  // ✅ Apply theme & keep it saved in localStorage
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className={dark ? "dark bg-neutral-950 text-white" : "bg-white text-black"}>
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Resume />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}