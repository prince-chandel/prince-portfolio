import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-6 gradient-text">Resume</h2>

        {/* Thumbnail + Button side by side */}
        <div className="flex items-center justify-center gap-6">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <img
              src="/resume-preview.png"
              alt="Resume Preview"
              className="w-40 rounded-lg shadow-md border border-neutral-300 dark:border-neutral-700 hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            ⬇️ Download
          </a>
        </div>
      </div>
    </section>
  );
}