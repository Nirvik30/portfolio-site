"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Zap, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, TypeScript, and MongoDB. Features user authentication, payment integration, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
    demoUrl: "https://demo-ecommerce.vercel.app",
    githubUrl: "https://github.com/nirvik/ecommerce-platform",
    image: "/project1.jpg", // You can add project images later
    color: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "Express", "PostgreSQL"],
    demoUrl: "https://taskmaster-demo.vercel.app",
    githubUrl: "https://github.com/nirvik/task-management",
    image: "/project2.jpg",
    color: "from-green-600 to-teal-600"
  },
  {
    id: 3,
    title: "Weather Analytics Dashboard",
    description: "An interactive weather dashboard with data visualization, forecasting, and location-based weather insights using modern APIs.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Chart.js"],
    demoUrl: "https://weather-analytics.vercel.app",
    githubUrl: "https://github.com/nirvik/weather-dashboard",
    image: "/project3.jpg",
    color: "from-orange-600 to-red-600"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-20">
      {/* Background effects consistent with other sections */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/[0.05] to-transparent" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} 
      />
      
      {/* Floating orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/5 left-1/5 w-96 h-96 bg-blue-500/[0.06] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/5 right-1/5 w-80 h-80 bg-purple-500/[0.06] rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-8">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-8 rounded-full" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Project Card */}
              <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.1] rounded-2xl p-6 h-full hover:bg-white/[0.05] hover:border-white/[0.2] transition-all duration-500">
                
                {/* Project Header */}
                <div className="mb-6">
                  <div className={`w-full h-48 bg-gradient-to-br ${project.color} rounded-xl mb-4 flex items-center justify-center relative overflow-hidden`}>
                    {/* Placeholder for project image */}
                    <div className="text-white/20 text-6xl">
                      <Code />
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <Globe className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-white/[0.1] text-gray-300 rounded-full border border-white/[0.1] hover:bg-white/[0.15] transition-colors duration-300"
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
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
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
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 text-sm rounded-lg hover:bg-white/[0.1] hover:text-white transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>

                {/* Glow effect */}
                <div 
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl -z-10`}
                />
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
          <p className="text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/Nirvik30"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-full hover:bg-white/[0.1] hover:text-white transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}