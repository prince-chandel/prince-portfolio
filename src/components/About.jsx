import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section bg-neutral-50 dark:bg-neutral-900 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <motion.h2
          className="text-3xl md:text-4xl font-bold gradient-text mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          I’m <span className="font-semibold text-indigo-500">Prince</span>, a 
          <span className="font-medium"> Computer Science Engineering graduate (2024)</span> with a strong foundation in 
          <span className="font-semibold text-sky-500"> Core Java</span>, 
          <span className="font-semibold text-sky-500"> React.js</span>, 
          <span className="font-semibold text-sky-500"> Node.js</span>, 
          <span className="font-semibold text-sky-500"> Express.js</span>, 
          <span className="font-semibold text-sky-500"> MySQL</span>, 
          <span className="font-semibold text-sky-500"> HTML</span>, 
          <span className="font-semibold text-sky-500"> CSS</span>, and 
          <span className="font-semibold text-sky-500"> JavaScript</span>.
          <br /><br />
          I have built and worked on various projects that strengthened my understanding of both frontend and backend development, 
          from creating responsive user interfaces to managing database-driven applications.
          <br /><br />
          I am passionate about <span className="italic">problem-solving</span>, 
          <span className="italic"> learning new technologies</span>, 
          and <span className="italic">adapting quickly</span> to different challenges. 
          While I am primarily focused on <span className="font-medium">Web Development (Frontend/Backend/Full Stack)</span>, 
          I am open to exploring diverse opportunities across the IT field where I can contribute, grow, and deliver value.
          <br /><br />
          My goal is to join a <span className="font-semibold">dynamic team</span> where I can apply my skills, 
          keep learning, and contribute to building impactful, real-world solutions.
        </motion.p>
      </div>
    </section>
  );
}