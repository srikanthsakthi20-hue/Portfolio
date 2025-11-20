import React from "react";
import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scrollToSection";

export const HeroSection = () => (
  <section
    id="hero"
    className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-black overflow-hidden"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4"
      >
        Hi, I'm <span className="text-teal-400">Srikanth Sakthi</span>.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto"
      >
        I build high-performance, accessible, and modern/responsive web
        applications using React and modern JavaScript.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex justify-center space-x-4"
      >
        <button
          onClick={() => scrollToSection("projects")}
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/50 cursor-pointer"
        >
          View My Work
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-bold py-3 px-8 rounded-full transition-colors duration-300 border border-gray-600 cursor-pointer"
        >
          Get In Touch
        </button>
      </motion.div>
    </div>
  </section>
);