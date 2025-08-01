"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.link.replace("#", ""));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId.replace("#", ""));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[5000]"
    >
      <div className="flex items-center justify-center px-6 py-3 border border-white/10 rounded-full bg-black/20 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center space-x-1">
          {navItems.map((navItem, idx) => (
            <button
              key={`link-${idx}`}
              onClick={() => scrollToSection(navItem.link)}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105",
                activeSection === navItem.link.replace("#", "")
                  ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              )}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "relative z-10 font-semibold",
                  activeSection === navItem.link.replace("#", "")
                    ? "text-white"
                    : "text-white/70"
                )}
              >
                {navItem.name}
              </motion.span>

              {/* Active indicator */}
              {activeSection === navItem.link.replace("#", "") && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/0 to-purple-800/0 opacity-0 transition-opacity duration-300 hover:opacity-20" />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}