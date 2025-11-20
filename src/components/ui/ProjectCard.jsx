import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { animationVariants } from "../../config/animations";

export const ProjectCard = ({ project }) => (
  <motion.div
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-teal-500/50 flex flex-col h-full"
    variants={animationVariants.item}
  >
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold mb-3 text-teal-400">{project.title}</h3>
      <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-semibold px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      {project?.live && (
        <button
          onClick={() =>
            window.open(project?.live, "_blank", "noopener,noreferrer")
          }
          className="mt-auto flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
        >
          <ExternalLink size={18} />
          <span className="text-sm font-medium">Preview</span>
        </button>
      )}
    </div>
  </motion.div>
);
