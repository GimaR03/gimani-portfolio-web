import React from "react";
import { motion } from "framer-motion";

const Certification = () => {
  return (
    <motion.div
      className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-6 py-12 transition-colors duration-300"
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
          Certifications
        </motion.h1>
        
        <div className="space-y-6">
          {[
            { name: "React Developer Certification", issuer: "Meta", date: "2024" },
            { name: "Node.js Certification", issuer: "OpenJS", date: "2024" },
            { name: "MongoDB Developer Certification", issuer: "MongoDB University", date: "2023" }
          ].map((cert, index) => (
            <motion.div 
              key={index}
              className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg p-6 flex items-center space-x-4 border border-slate-200 dark:border-slate-700"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                <span className="text-2xl">📜</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{cert.name}</h3>
                <p className="text-slate-500 dark:text-slate-400">{cert.issuer} • {cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Certification;
