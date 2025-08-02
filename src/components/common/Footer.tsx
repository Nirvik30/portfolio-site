"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Github, Twitter, Instagram, Mail } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Nirvik30",
    label: "GitHub"
  },
  {
    icon: Twitter,
    href: "https://twitter.com/nirvik",
    label: "Twitter"
  },
  {
    icon: Instagram,
    href: "https://instagram.com/nirvik",
    label: "Instagram"
  },
  {
    icon: Mail,
    href: "mailto:nirvikacharekar@gmail.com",
    label: "Email"
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-gray-900 border-t border-white/[0.1]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/[0.02] to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Nirvik Acharekar
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>in Mumbai, India</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>nirvikacharekar@gmail.com</p>
              <p>Mumbai, India</p>
            </div>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.1] transition-all duration-300"
                  title={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/[0.1] flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Nirvik Acharekar. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <span>Built with Next.js & Tailwind CSS</span>
            <span>•</span>
            <span>Designed & Developed by Nirvik Acharekar</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}