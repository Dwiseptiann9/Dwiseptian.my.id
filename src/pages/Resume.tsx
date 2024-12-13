import React from 'react';
import { Download, GraduationCap, Briefcase, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';

export function Resume() {
  return (
    <PageTransition>
      <div className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">My Resume</h1>
              <motion.a
                href="/path-to-your-cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </motion.a>
            </div>

            {/* Education Section */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold dark:text-white">Education</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">SMK Dwija Bhakti 1 Jombang</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Computer and Network Engineering (TJKT)</p>
                <p className="text-gray-500 dark:text-gray-400">2021 - Present</p>
              </div>
            </motion.section>

            {/* Experience Section */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold dark:text-white">Experience</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">PT Lintas Jaringan Nusantara</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Internship - Network Engineering</p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">2023</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Assisted in network infrastructure maintenance and troubleshooting</li>
                  <li>Gained hands-on experience with fiber optic installations</li>
                  <li>Participated in network security implementations</li>
                </ul>
              </div>
            </motion.section>

            {/* Organizational Experience */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold dark:text-white">Organizational Experience</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Karang Taruna</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Secretary</p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">2022 - Present</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Managing organizational documentation</li>
                  <li>Coordinating community activities</li>
                  <li>Handling administrative tasks</li>
                </ul>
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold dark:text-white">Skills</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 dark:text-white">System Operasi</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>Windows Administration</li>
                      <li>Linux Sys Admin</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 dark:text-white">Microfost Office</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>Microsoft Word</li>
                      <li>Microsoft Excel</li>
                      <li>Microsoft Power Point</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}