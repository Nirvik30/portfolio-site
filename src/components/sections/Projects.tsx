"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";
import DarkVeil from "@/components/common/DarkVeil";
import "@/components/common/DarkVeil.css";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, TypeScript, and MongoDB. Features user authentication, payment integration, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
    demoUrl: "https://demo-ecommerce.vercel.app",
    githubUrl: "https://github.com/nirvik/ecommerce-platform",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "Express", "PostgreSQL"],
    demoUrl: "https://taskmaster-demo.vercel.app",
    githubUrl: "https://github.com/nirvik/task-management",
  },
  {
    id: 3,
    title: "Weather Analytics Dashboard",
    description: "An interactive weather dashboard with data visualization, forecasting, and location-based weather insights using modern APIs.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Chart.js"],
    demoUrl: "https://weather-analytics.vercel.app",
    githubUrl: "https://github.com/nirvik/weather-dashboard",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* DarkVeil Background */}
      <div className="absolute inset-0">
        <DarkVeil 
          noiseIntensity={0.04}
          scanlineIntensity={0.09}
          scanlineFrequency={0.06}
          warpAmount={0.05}
          resolutionScale={1}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 drop-shadow-lg">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-8 rounded-full shadow-lg" />
          <p className="text-lg text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            A showcase of my recent work, featuring full-stack applications 
            built with modern technologies and best practices.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Minimal Project Card */}
              <div className="relative bg-white/[0.04] backdrop-blur-md border border-white/[0.1] rounded-xl p-6 h-full hover:bg-white/[0.06] hover:border-white/[0.2] transition-all duration-300 shadow-lg">
                
                {/* Project Header */}
                <div className="mb-6">
                  {/* Minimal Project Icon */}
                  <div className="w-full h-32 bg-white/[0.03] rounded-lg mb-4 flex items-center justify-center border border-white/[0.05] group-hover:border-white/[0.1] transition-all duration-300">
                    <Code className="w-12 h-12 text-white/40 group-hover:text-white/60 transition-colors duration-300 drop-shadow-sm" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300 drop-shadow-sm">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 drop-shadow-sm">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-white/[0.05] text-gray-300 rounded border border-white/[0.1] hover:bg-white/[0.08] transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/[0.1] backdrop-blur-sm border border-white/[0.15] text-white text-sm rounded-lg hover:bg-white/[0.15] hover:border-white/[0.25] transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-white/[0.15] text-gray-300 text-sm rounded-lg hover:bg-white/[0.05] hover:text-white hover:border-white/[0.25] transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>

                {/* Subtle hover glow */}
                <div className="absolute inset-0 rounded-xl bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 drop-shadow-sm">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/Nirvik30"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.15] text-gray-300 rounded-full hover:bg-white/[0.05] hover:text-white hover:border-white/[0.25] transition-all duration-300 backdrop-blur-sm"
          >
            <Github className="w-5 h-5" />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}