"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit
} from 'react-icons/si';
import DarkVeil from "@/components/common/DarkVeil";
import "@/components/common/DarkVeil.css";

const technologies = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E" // Bright yellow for visibility
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6"
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB"
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB"
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933"
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#FFFFFF" // Changed from black to white for visibility
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248"
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599C"
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4"
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26"
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "#1572B6"
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032"
  },
];

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* DarkVeil Background */}
      <div className="absolute inset-0">
        <DarkVeil 
          noiseIntensity={0.03}
          scanlineIntensity={0.08}
          scanlineFrequency={0.06}
          warpAmount={0.05}
          resolutionScale={0.5} // Adjusted for better performance
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 drop-shadow-lg">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          {/* Divider */}
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-12 rounded-full shadow-lg" />
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-16 drop-shadow-md"
          >
            I&apos;m a passionate full-stack developer with expertise in modern web
            technologies. I love creating beautiful, functional applications that
            solve real-world problems and provide exceptional user experiences. My
            journey in development has equipped me with a diverse skill set across
            multiple technologies and frameworks.
          </motion.p>

          {/* Technology Grid - Enhanced visibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-3xl mx-auto mb-16"
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
                  scale: 1.2,
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                viewport={{ once: true }}
                className="group flex flex-col items-center space-y-3"
              >
                <div 
                  className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                  style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.2))" }}
                >
                  <tech.icon size={42} color={tech.color} />
                </div>
                <div className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-center font-medium drop-shadow-sm">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              Always eager to learn new technologies and take on challenging
              projects. Let&apos;s build something amazing together!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}