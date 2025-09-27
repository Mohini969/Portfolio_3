import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Mohini969",
      color: "#6e5494",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mohini-sahoo-64924933b",
      color: "#0077b5",
    },
  
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/khu_si__khusi/",
      color: "#e74c3c",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-12 relative overflow-hidden">
      {/* Decorative Glows (Kept from original) */}
      <span className="absolute w-60 h-60 rounded-full bg-purple-700 opacity-20 blur-3xl top-[-50px] left-[-50px]"></span>
      <span className="absolute w-80 h-80 rounded-full bg-blue-600 opacity-20 blur-3xl bottom-[-80px] right-[-60px]"></span>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
        {/* Logo / Name */}
        <div className="mb-8 md:mb-0 text-center md:text-left basis-1/3">
          <h2 className="text-3xl font-bold text-white">Mohini Sahoo</h2>
          <p className="text-gray-300 mt-2">
            Full Stack Developer | AI/ML Enthusiast
          </p>
        </div>

        {/* Quick Links & Copyright (Combined for proper vertical alignment) */}
        <div className="mb-8 md:mb-0 text-center basis-1/3">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <div className="flex justify-center space-x-6">
            {quickLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-purple-400 transition-colors duration-300 text-sm" // Added text-sm to match image size
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* MOVED & MODIFIED COPYRIGHT SECTION */}
          <div className="mt-4 text-gray-400 text-sm">
             &copy; 2025 Mohini Sahoo. All rights reserved.
          </div>
        </div>

        {/* Social Icons */}
        <div className="text-center md:text-right basis-1/3">
          <h3 className="font-semibold mb-4">Connect with Me</h3>
          <div className="flex justify-center md:justify-end space-x-6">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-purple-400 transition-colors duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;