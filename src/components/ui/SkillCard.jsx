import React from "react";
import { motion } from "framer-motion";
import { animationVariants } from "../../config/animations";

export const SkillCard = ({ skill }) => (
  <motion.div
    className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg shadow-xl hover:shadow-teal-500/30 transition-shadow duration-300"
    variants={animationVariants.item}
  >
    <skill.icon className={`w-10 h-10 mb-3 ${skill.color}`} />
    <span className="text-sm font-medium text-gray-200">{skill.name}</span>
  </motion.div>
);