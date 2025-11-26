import React from "react";
import { motion } from "framer-motion";

const ViewProject = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Animal Plant Health Management Project */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <span className="text-white text-6xl">🌿</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                Animal Plant Health Management
              </h3>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">JavaScript</span>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '99.4%'}}></div>
                </div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">99.4%</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                A comprehensive health management system for monitoring and managing animal and plant health with advanced tracking capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full">JavaScript</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-xs rounded-full">Health Management</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded-full">Tracking System</span>
              </div>
            </div>
          </motion.div>
          
          {/* FitMe App Project */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
              <span className="text-white text-6xl">💪</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                FitMe-app-Lab-Exam-2
              </h3>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">Kotlin</span>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">100%</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                This mobile application was developed as part of my Mobile Application Development Module – Assignment 2.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full">Kotlin</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-xs rounded-full">Mobile App</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded-full">Android</span>
              </div>
            </div>
          </motion.div>
          
          {/* Smart Farm Management System Project */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <span className="text-white text-6xl">🌾</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                Smart Farm Management System
              </h3>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">JavaScript</span>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '97.1%'}}></div>
                </div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">97.1%</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                A comprehensive enterprise-grade monorepo solution for integrated smart farm operations, encompassing animal management, plant management, health management, inventory control, and employee administration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full">JavaScript</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-xs rounded-full">Enterprise Solution</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded-full">Monorepo</span>
                <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 text-xs rounded-full">Smart Farm</span>
                <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 text-xs rounded-full">Management System</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ViewProject;
