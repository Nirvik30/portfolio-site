"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  siJavascript,
  siTypescript,
  siPython,
  siReact,
  siNodedotjs,
  siExpress,
  siMongodb,
  siCplusplus,
  siTailwindcss,
  siHtml5,
  siCss,
  siGit
} from 'simple-icons';

const technologies = [
  {
    name: "JavaScript",
    icon: siJavascript,
    color: "#F7DF1E"
  },
  {
    name: "TypeScript", 
    icon: siTypescript,
    color: "#3178C6"
  },
  {
    name: "Python",
    icon: siPython,
    color: "#3776AB"
  },
  {
    name: "React",
    icon: siReact,
    color: "#61DAFB"
  },
  {
    name: "Node.js",
    icon: siNodedotjs,
    color: "#339933"
  },
  {
    name: "Express.js",
    icon: siExpress,
    color: "#000000"
  },
  {
    name: "MongoDB",
    icon: siMongodb,
    color: "#47A248"
  },
  {
    name: "C++",
    icon: siCplusplus,
    color: "#00599C"
  },
  {
    name: "Tailwind CSS",
    icon: siTailwindcss,
    color: "#06B6D4"
  },
  {
    name: "HTML5",
    icon: siHtml5,
    color: "#E34F26"
  },
  {
    name: "CSS",
    icon: siCss,
    color: "#1572B6"
  },
  {
    name: "Git",
    icon: siGit,
    color: "#F05032"
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-20"
    >
      {/* Same background effects as Hero */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/[0.05] to-transparent" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/[0.08] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500/[0.08] rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-8">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          {/* Divider */}
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-12 rounded-full" />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-16"
          >
            I'm a passionate full-stack developer with expertise in modern web
            technologies. I love creating beautiful, functional applications that
            solve real-world problems and provide exceptional user experiences. My
            journey in development has equipped me with a diverse skill set across
            multiple technologies and frameworks.
          </motion.p>

          {/* Technology Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-3xl mx-auto"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-lg p-4 text-center hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300">
                  <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <div 
                      className="w-8 h-8 flex items-center justify-center"
                      style={{ color: tech.color }}
                      dangerouslySetInnerHTML={{ __html: tech.icon.svg }}
                    />
                  </div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {tech.name}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
                  style={{ 
                    background: `linear-gradient(to right, ${tech.color}00, ${tech.color}40, ${tech.color}00)` 
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Always eager to learn new technologies and take on challenging
              projects. Let's build something amazing together!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}