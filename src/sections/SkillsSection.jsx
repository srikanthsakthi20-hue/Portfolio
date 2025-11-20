import React from "react";
import { motion } from "framer-motion";
import { SkillCard } from "../components/ui/SkillCard";
import { SKILLS_DATA } from "../constants/skills";
import { animationVariants } from "../config/animations";

export const SkillsSection = () => (
  <section id="skills" className="py-20 md:py-32 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white"
      >
        My Tech Stack
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6"
        variants={animationVariants.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {SKILLS_DATA.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </motion.div>
    </div>
  </section>
);


