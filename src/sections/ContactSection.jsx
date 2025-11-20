import React from "react";
import { motion } from "framer-motion";
import { Code, Linkedin } from "lucide-react";

export const ContactSection = () => (
  <section id="contact" className="py-20 md:py-32 bg-black">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white"
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-2xl text-center border border-white/10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-lg text-gray-300 mb-8">
          Feel free to reach out directly via phone or connect with me on
          LinkedIn.
        </p>

        <div className="flex justify-center items-center mb-6 space-x-4 p-4 rounded-lg bg-white/5 border border-white/10">
          <Code className="w-6 h-6 text-teal-400" />
          <p className="text-xl text-white font-semibold">
            Call: (+91) 6380998704
          </p>
        </div>

        <div className="flex justify-center mt-8 pt-6 border-t border-white/10">
          <a
            href="https://www.linkedin.com/in/srikanth-sakthi-8a2239326"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors flex items-center space-x-3 text-lg font-medium p-3 rounded-lg hover:bg-white/10"
          >
            <Linkedin className="w-8 h-8 text-teal-400" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);