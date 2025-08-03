"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Twitter, 
  Instagram,
  ExternalLink
} from "lucide-react";
import DarkVeil from "@/components/common/DarkVeil";
import "@/components/common/DarkVeil.css";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "nirvikacharekar@gmail.com",
    href: "mailto:nirvikacharekar@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7208761760",
    href: "tel:+917208761760"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
    href: "https://maps.google.com/?q=Mumbai,India"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Nirvik30"
  },
  {
    icon: Twitter,
    label: "Twitter", 
    href: "https://twitter.com/nirvik"
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/nirvik30"
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:nirvikacharekar@gmail.com"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* DarkVeil Background - positioned absolutely to cover full section */}
      <div className="absolute inset-0">
        <DarkVeil 
          noiseIntensity={0.03}
          scanlineIntensity={0.08}
          scanlineFrequency={0.07}
          warpAmount={0.06}
          resolutionScale={1} // Adjusted resolution scale for better performance
        />
      </div>

      {/* Content overlay - properly positioned above DarkVeil */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-8">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-200 max-w-xl mx-auto text-lg leading-relaxed">
            Based in Mumbai, always open to discussing new opportunities and exciting projects.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {contactMethods.map((method, index) => {
  // Only open Location in new tab; Email/Phone open with default protocol
  const opensInNewTab = method.label === "Location";
  return (
    <motion.a
      key={method.label}
      href={method.href}
      target={opensInNewTab ? "_blank" : undefined} // only Location opens in new tab
      rel={opensInNewTab ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      viewport={{ once: true }}
      className="group p-8 bg-white/[0.08] backdrop-blur-md border border-white/[0.15] rounded-2xl hover:bg-white/[0.12] hover:border-white/[0.25] transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 bg-white/[0.1] rounded-xl group-hover:bg-white/[0.15] transition-all duration-300">
          <method.icon className="w-7 h-7 text-white" />
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider font-medium">
            {method.label}
          </p>
          <p className="text-white font-medium text-lg">{method.value}</p>
        </div>
        {method.label === "Location" && (
          <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>
    </motion.a>
  );
})}

          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-medium text-gray-300 mb-8">Connect With Me</h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                  className="p-4 bg-white/[0.06] backdrop-blur-md border border-white/[0.12] rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Simple CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-block p-6 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl">
              <p className="text-gray-300 text-lg font-medium">
                Let&apos;s discuss your next project
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Ready to bring your ideas to life
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}