import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaTwitter } from 'react-icons/fa'
import photo from '/IMG_20240831_122440.jpg'

export default function Hero() {
  return (
    <section className='section'>
      <div className='max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10'>
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className='text-4xl md:text-6xl font-bold'>
            Hi, I'm <span className='gradient-text'>Prince</span>
          </h1>
          <p className='mt-4 text-neutral-600 dark:text-neutral-300'>
            Front-end / Full-stack Developer | Fresher (B.Tech CSE 2024)
          </p>

          {/* Social icons */}
          <div className='mt-6 flex gap-6 text-2xl'>
            <a href='mailto:prince1chadel@gmail.com'><FaEnvelope /></a>
            <a href='https://www.linkedin.com/in/princechandel/' target='_blank'><FaLinkedin /></a>
            <a href='https://github.com/your-github' target='_blank'><FaGithub /></a>
            <a href='https://www.instagram.com/prince.chandel_/' target='_blank'><FaInstagram /></a>
            <a href='https://x.com/chandel666' target='_blank'><FaTwitter /></a>
          </div>

          {/* Resume button */}
          <motion.a
            href='/resume.pdf'
            download
            className='inline-block mt-8 px-6 py-3 rounded-full bg-sky-500 text-white font-medium shadow-lg hover:bg-sky-600 transition transform hover:scale-105'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            📄 Download Resume
          </motion.a>
        </motion.div>

        {/* Right photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex justify-center'
        >
          <img
            src={photo}
            alt='Prince'
            className='w-64 h-64 object-cover rounded-full border-4 border-sky-400 shadow-lg'
          />
        </motion.div>
      </div>
    </section>
  )
}