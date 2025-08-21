import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    degree: "B.Tech – Computer Science Engineering",
    school: "Chandigarh Group of Colleges, Landran",
    period: "2020 – 2024",
    score: "CGPA 7.23",
  },
  {
    degree: "Intermediate (CBSE)",
    school: "Shiwalik Public School",
    period: "2019 – 2020",
    score: "62%",
  },
  {
    degree: "Matriculation (CBSE)",
    school: "Rayat International School",
    period: "2016 – 2017",
    score: "CGPA 7.2",
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 gradient-text">Education</h2>

        <div className="relative max-w-3xl mx-auto">
          {/* vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />

          <ul className="space-y-8">
            {items.map((edu, i) => (
              <li key={i} className="relative pl-12">
                <span className="absolute left-3 top-2 w-3 h-3 rounded-full bg-sky-500" />
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="card"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">{edu.period}</span>
                  </div>
                  <p className="mt-1 text-neutral-700 dark:text-neutral-300">{edu.school}</p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{edu.score}</p>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}