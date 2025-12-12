import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactMe = () => {
  const contactDetails = {
    email: "gimarajarathna@gmail.com",
    phone: "070-219-6195",
    address: "160, Kondadeniya, Katugastota",
    github: "https://github.com/GimaR03",
    linkedin: "https://linkedin.com/in/yourprofile", // Add your LinkedIn if available
    whatsapp: "https://wa.me/94702196195",
    telegram: "https://t.me/yourusername" // Add your Telegram if available
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactDetails.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactDetails.phone}`;
  };

  const handleWhatsAppClick = () => {
    window.open(contactDetails.whatsapp, '_blank');
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-200 px-4 sm:px-6 py-12 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Get In Touch
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Feel free to reach out to me for collaborations, opportunities, or just a friendly chat!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Details Card */}
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8 border border-slate-200 dark:border-slate-700"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400 flex items-center">
              <FaMapMarkerAlt className="mr-3" />
              Contact Information
            </h2>
            
            <div className="space-y-6">
              {/* Email */}
              <motion.div 
                className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50 dark:bg-slate-700/50 hover:bg-blue-100 dark:hover:bg-slate-700 transition-colors duration-300 cursor-pointer group"
                whileHover={{ x: 5 }}
                onClick={handleEmailClick}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-slate-600 dark:text-slate-400">{contactDetails.email}</p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyToClipboard(contactDetails.email);
                      }}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="flex items-start space-x-4 p-4 rounded-xl bg-green-50 dark:bg-slate-700/50 hover:bg-green-100 dark:hover:bg-slate-700 transition-colors duration-300 cursor-pointer group"
                whileHover={{ x: 5 }}
                onClick={handlePhoneClick}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Phone Number</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-slate-600 dark:text-slate-400">{contactDetails.phone}</p>
                    <div className="flex space-x-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyToClipboard(contactDetails.phone);
                        }}
                        className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium"
                      >
                        Copy
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsAppClick();
                        }}
                        className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium"
                      >
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div 
                className="flex items-start space-x-4 p-4 rounded-xl bg-purple-50 dark:bg-slate-700/50 hover:bg-purple-100 dark:hover:bg-slate-700 transition-colors duration-300 cursor-pointer group"
                whileHover={{ x: 5 }}
                onClick={() => handleCopyToClipboard(contactDetails.address)}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Address</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-slate-600 dark:text-slate-400">{contactDetails.address}</p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyToClipboard(contactDetails.address);
                      }}
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Media Links */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6 text-slate-700 dark:text-slate-300">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                {/* GitHub */}
                <motion.button
                  onClick={() => handleSocialClick(contactDetails.github)}
                  className="flex items-center space-x-3 px-5 py-3 bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-xl" />
                  <span className="font-medium">GitHub</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </motion.button>

                {/* Gmail */}
                <motion.button
                  onClick={handleEmailClick}
                  className="flex items-center space-x-3 px-5 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SiGmail className="text-xl" />
                  <span className="font-medium">Gmail</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </motion.button>

                {/* WhatsApp */}
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="flex items-center space-x-3 px-5 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="text-xl" />
                  <span className="font-medium">WhatsApp</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8 border border-slate-200 dark:border-slate-700"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400">Send Me a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all duration-300 outline-none"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                    Your Email *
                  </label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all duration-300 outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all duration-300 outline-none"
                  placeholder="Project collaboration or job opportunity"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Your Message *
                </label>
                <textarea 
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all duration-300 resize-none outline-none"
                  placeholder="Hello, I would like to discuss..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-center space-x-2 text-slate-600 dark:text-slate-400">
                <FaEnvelope className="text-blue-500" />
                <span>Response time: Usually within 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Contact Bar */}
        <motion.div 
          className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-6 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Ready to work together?</h3>
              <p className="text-blue-100">Let's discuss your project ideas and opportunities</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={handleEmailClick}
                className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="inline mr-2" />
                Email Me
              </motion.button>
              <motion.button
                onClick={handleWhatsAppClick}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="inline mr-2" />
                WhatsApp
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactMe;