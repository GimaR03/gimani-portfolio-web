import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AnimalPlant = () => {
  return (
    <motion.div
      className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-6 py-12 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <Link to="/projects" className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block">
          ← Back to Projects
        </Link>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-blue-600 dark:text-blue-400"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Animal Plant Health Management
        </motion.h1>

        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-200 dark:border-slate-700">
          <img 
            src="/images/animalplantFull.png" 
            alt="Animal Plant Health Management" 
            className="w-full h-48 object-cover rounded-lg mb-6"
          />

          <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 rounded-full text-sm font-semibold mb-4">
            👤 Self Activity Project
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Project Overview</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            A comprehensive health management system for monitoring and managing animal and plant health 
            with advanced tracking capabilities. This system helps farmers and agricultural professionals 
            maintain optimal health conditions for their livestock and crops.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Technologies Used</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-300 rounded-full">JavaScript (99.4%)</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 rounded-full">Health Management</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full">Tracking System</span>
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Features</h2>
          <ul className="list-disc list-inside text-slate-500 dark:text-slate-400 space-y-2 mb-6">
            <li>Animal health monitoring and tracking</li>
            <li>Plant health management system</li>
            <li>Disease detection and prevention</li>
            <li>Health records and history</li>
            <li>Vaccination and treatment scheduling</li>
            <li>Analytics and reporting dashboard</li>
          </ul>

          <a 
            href="https://github.com/GimaR03/animal-plant-health-management" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimalPlant;