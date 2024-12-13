import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <PageTransition>
      <div className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Get in Touch</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-6 dark:text-white">Send Me a Message</h2>
                <ContactForm />
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-6 dark:text-white">Connect With Me</h2>
                <div className="space-y-6">
                  <motion.a
                    href="mailto:anandadwiseptianromadon@gmail.com"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="h-6 w-6 mr-3" />
                    Email
                  </motion.a>
                  
                  <motion.a
                    href="https://instagram.com/adwiseptianr"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram className="h-6 w-6 mr-3" />
                    Instagram
                  </motion.a>
                  
                  <motion.a
                    href="https://linkedin.com/in/adwiseptianr24"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="h-6 w-6 mr-3" />
                    LinkedIn Profile
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}