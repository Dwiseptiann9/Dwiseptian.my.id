import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function SkillCard({ icon: Icon, title, description }: SkillCardProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <Icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4 transition-colors duration-300" />
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{description}</p>
    </motion.div>
  );
}