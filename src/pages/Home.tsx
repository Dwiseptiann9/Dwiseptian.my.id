import React from 'react';
import { Link } from 'react-router-dom';
import { Network, BookOpen, Blocks, Download } from 'lucide-react';
import { SkillCard } from '../components/SkillCard';
import { motion } from 'framer-motion';

export function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Ananda Dwiseptian Romadhon
              </h1>
              <p className="text-xl text-blue-600 dark:text-blue-400 mb-6 transition-colors duration-300">
                Information Technology Network Administration
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg transition-colors duration-300">
                A student majoring in Computer and Network Engineering, focused on Aspiring IT Networking Specialist | Exploring AI and Blockchain Solutions.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/resume"
                  className="inline-flex items-center bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300"
                >
                  View My Resume
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://i.imgur.com/hQj22Ac.jpeg?auto=format&fit=crop&q=80&w=500&h=500"
                alt="Ananda Dwiseptian"
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg dark:shadow-gray-900 mx-auto transform hover:scale-105 transition-all duration-300"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Interest
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <SkillCard
                icon={Network}
                title="Networking"
                description="Expert in network infrastructure, security, and fiber optic installations. Specializing in enterprise-level"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <SkillCard
                icon={BookOpen}
                title="Artificial Intelligence"
                description="Writing and researching about emerging technologies, cybersecurity trends, and network innovations."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <SkillCard
                icon={Blocks}
                title="Blockchain"
                description="Exploring blockchain technology, smart contracts, and decentralized applications (DApps)."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}