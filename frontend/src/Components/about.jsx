import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const timeline = [
    {
      year: "2017",
      title: "Sri Lanka Under 15 Malaysia Hockey Tour",
      description: "I served as the captain of my hockey team during a match held in Penang City, Malaysia, in 2017.",
      icon: "🏑"
    },
    {
      year: "2022",
      title: "A/L Physical Science Stream",
      description: "Completed Advanced Level examinations in Physical Science stream, building a strong foundation in mathematics and physics.",
      icon: "📚"
    },
    {
      year: "2023",
      title: "University Journey Begins",
      description: "Joined Sri Lanka Institute of Information Technology (SLIIT) and chose software engineering specialization, marking the beginning of my formal computer science education.",
      icon: "🎓"
    },
    {
      year: "2024",
      title: "Full Stack Development",
      description: "Dived deep into modern web development, mastering React, Next.js, and backend technologies while maintaining excellent academic performance.",
      icon: "💻"
    }
  ];

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
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - My Journey */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-slate-800 dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-700">
              <div className="flex flex-col items-center mb-6">
                <motion.img
                  src="/images/gimani.jpg"
                  alt="Gimani Rajarathna"
                  className="w-32 h-32 rounded-full object-cover border-4 border-cyan-400 shadow-xl mb-4"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <h2 className="text-2xl font-bold text-white mb-1">
                  Gimani Rajarathna
                </h2>
                <p className="text-cyan-400 font-semibold">
                  Full-Stack Developer
                </p>
              </div>
              <p className="text-slate-300 text-center text-sm">
                From Hockey fields to code repositories, my journey has been about passion, dedication, and continuous learning. Here's my story of transformation and growth.
              </p>
            </div>

            {/* My Journey Card */}
            <div className="bg-slate-800 dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-semibold text-cyan-400">My Journey</h3>
                <span className="text-yellow-400 text-2xl">🏆</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                My journey into technology began unexpectedly. As a hockey player for the Sri Lanka Under 15 team in 2017, I learned the importance of teamwork, strategy, and continuous improvement. These values became the foundation of my approach to software development.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                After completing my A/Ls in the Physical Science stream, I was drawn to the logical thinking and problem-solving aspects of mathematics and physics. This naturally led me to choose software engineering as my specialization at SLIIT.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Today, I'm a passionate full-stack developer who loves building innovative web applications. My background in physical sciences gives me a unique perspective on problem-solving, while my hockey experience has taught me the value of collaboration and persistence in achieving goals.
              </p>
            </div>

            {/* Current Education Card */}
            <div className="bg-slate-800 dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-cyan-400 text-2xl">🎓</span>
                <h3 className="text-xl font-semibold text-white">Current Education</h3>
              </div>
              <p className="text-slate-300 mb-1">Sri Lanka Institute of Information Technology</p>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                <span>📍 Malabe, Sri Lanka</span>
                <span>📅 2023 - Present</span>
              </div>
              <div className="bg-slate-700 rounded-lg p-4">
                <p className="text-cyan-400 font-semibold">BSc (Hons) in Information Technology (Software Engineering)</p>
                
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="bg-slate-800 dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-700">
            <h3 className="text-2xl font-semibold text-cyan-400 text-center mb-8">Timeline</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-400/30"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-0 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2"></div>
                    
                    {/* Year */}
                    <span className="text-cyan-400 font-bold text-lg">{item.year}</span>
                    <div className="w-16 h-0.5 bg-cyan-400 mt-1 mb-2"></div>
                    
                    {/* Title */}
                    <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                    
                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-8 bg-slate-800 dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-700">
          <h3 className="text-2xl font-semibold mb-6 text-cyan-400 text-center">Skills & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "JavaScript", level: "95%" },
              { name: "React", level: "90%" },
              { name: "Node.js", level: "85%" },
              { name: "MongoDB", level: "85%" },
              { name: "Express.js", level: "85%" },
              { name: "Kotlin", level: "80%" },
              { name: "Java", level: "80%" },
              { name: "Tailwind CSS", level: "90%" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-slate-700 p-4 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="font-semibold text-white">{skill.name}</p>
                <div className="w-full bg-slate-600 rounded-full h-2 mt-2">
                  <div 
                    className="bg-cyan-400 h-2 rounded-full" 
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-slate-800 dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-700">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400 text-center">Get In Touch</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://github.com/GimaR03" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a 
              href="mailto:gimani@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
