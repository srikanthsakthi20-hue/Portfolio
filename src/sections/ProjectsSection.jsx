import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "../components/ui/ProjectCard";
import { PROJECTS_DATA } from "../constants/projects";
import { animationVariants } from "../config/animations";

export const ProjectsSection = () => (
  <section id="projects" className="py-20 md:py-32 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white"
      >
        Featured Projects
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={animationVariants.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  </section>
);
