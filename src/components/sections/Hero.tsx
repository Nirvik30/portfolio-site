"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/[0.05] to-transparent" />
      
      {/* Minimal grid pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} 
      />
      
      {/* Subtle floating orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-500/[0.08] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-purple-500/[0.08] rounded-full blur-3xl"
        />
      </div>

      {/* Content - with proper spacing from navbar */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-20">
        {/* Name - Single line with uniform styling and thicker font */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-medium tracking-wide text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Nirvik Acharekar
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-gray-300 font-normal mb-6">
            Full Stack Developer
          </p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-12 rounded-full" />
        </motion.div>

        {/* Introduction - More visible color */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed mb-16 font-normal">
            Code. Create. Connect.
          </p>
        </motion.div>
      </div>

      {/* Email Me Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="mailto:nirvikacharekar@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center px-6 py-3 text-sm text-gray-300 border border-gray-600 rounded-full hover:bg-white/[0.05] hover:text-white hover:border-gray-500 transition-all duration-300"
        >
          <Mail className="mr-2 h-4 w-4" />
          Email Me
        </motion.a>
      </motion.div>

      {/* Simple Scroll Text - No Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center"
      >
        <motion.p 
          className="text-sm text-gray-400 font-light tracking-wider mb-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Scroll to know more about me
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-500 cursor-pointer hover:text-gray-300 transition-colors duration-300"
          onClick={scrollToNext}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}