import React from "react";
import { motion } from "framer-motion";

export const AboutSection = () => (
  <section id="about" className="py-20 md:py-32 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white"
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-2xl border border-white/10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 mb-6 leading-relaxed"
        >
          I'm a Full-Stack Web Developer specialising in React, Node.js, and
          real-time data workflows. I focus on building clean, intuitive, and
          responsive user interfaces, along with reusable components that
          support scalable product development. On the backend, I work on
          efficient API integrations, data handling pipelines, and modular code
          structures that align with performance and maintainability goals.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          I enjoy working on practical, real-world product requirements where I
          can solve technical challenges, simplify complex workflows, and
          improve usability or performance through continuous iteration. My
          approach is hands-on, detail-oriented, and driven by learning,
          experimentation, and collaboration. I aim to contribute to modern,
          user-centric digital products where quality, clarity, and delivery
          matter.
        </motion.p>
      </motion.div>
    </div>
  </section>
);