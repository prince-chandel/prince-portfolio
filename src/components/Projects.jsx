import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Amazon Clone",
    tech: "HTML, CSS, Font Awesome",
    image: "/amazon.png",
    description: `🛒 Amazon Clone (Frontend Development)

A responsive e-commerce landing page inspired by Amazon, built to practice frontend web development concepts.

✨ Features:
- Custom navigation bar with logo, search bar, cart, and user account sections
- Hero section with promotional banner
- Product grid layout (clothing, electronics, personal care, toys, etc.) designed using flexbox & CSS grid
- Responsive design compatible with desktop and mobile
- Interactive UI with hover effects and clickable sections for better user experience

💡 Key Learning: Strengthened my skills in HTML semantics, CSS styling, layout design, and responsiveness while replicating a real-world product website.`,
    github: "https://github.com/prince-chandel/Amazon-Interface-Clone",
    demo: "#",
  },
  {
    title: "To-Do List",
    tech: "HTML, CSS, JavaScript",
    image: "/to-do-list.png",
    description: `📝 To-Do List App

A simple task management app for adding, deleting, and marking tasks as complete.

✨ Features:
- Add new tasks
- Mark tasks as done
- Delete tasks instantly
- Local storage support

💡 Key Learning: Improved my DOM manipulation and JavaScript event handling skills.`,
    github: "#",
    demo: "#",
  },
  {
    title: "ATM Simulator",
    tech: "Java",
    image: "/atm-simulator.png",
    description: `🏦 ATM Simulator (Java Project)

A console-based ATM simulation built using Java.

✨ Features:
- User authentication with PIN
- Balance check
- Deposit & Withdrawal
- Mini statement

💡 Key Learning: Practiced OOP concepts like classes, objects, methods, and exception handling.`,
    github: "#",
    demo: "#",
  },
  {
    title: "Tour & Travel Website",
    tech: "HTML, CSS, JavaScript",
    image: "/tour-n-travel.png",
    description: `🌍 Tour & Travel Website

A static travel website showcasing destinations and packages.

✨ Features:
- Attractive homepage with hero image
- Destination cards with details
- Responsive UI
- Simple booking form (frontend only)

💡 Key Learning: Enhanced my frontend design and responsiveness skills.`,
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold gradient-text mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm italic">Tech Used: {project.tech}</p>
              <button
                onClick={() => setSelected(project)}
                className="mt-3 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow hover:opacity-90"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white dark:bg-neutral-800 rounded-xl p-6 max-w-2xl shadow-lg overflow-y-auto max-h-[80vh]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-3">
                  {selected.title}
                </h3>
                <p className="whitespace-pre-line text-sm mb-4">
                  {selected.description}
                </p>
                <div className="flex gap-4">
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      className="px-4 py-2 bg-black text-white rounded-lg shadow hover:opacity-80"
                    >
                      🔗 GitHub
                    </a>
                  )}
                  {selected.demo && (
                    <a
                      href={selected.demo}
                      target="_blank"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:opacity-80"
                    >
                      🌍 Live Demo
                    </a>
                  )}
                  <button
                    onClick={() => setSelected(null)}
                    className="ml-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:opacity-80"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}