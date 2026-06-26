import React from "react";
import { motion as Motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { personalInfo, socialLinks, quickLinks } from "../../data";
import { fadeUp } from "../../utils/animations";

const socialIconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  instagram: <FaInstagram />,
};

const Footer = () => {
  const scrollTop = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative theme-footer overflow-hidden border-t border-cyan-400/15">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

      <Motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1fr_auto_1fr] md:items-center lg:px-10"
      >
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold theme-heading">
            {personalInfo.name}{" "}
            <span className="gradient-text">{personalInfo.lastName}</span>
          </h2>
          <p className="theme-muted mt-3">
            {personalInfo.roles[0]} | AI/ML Enthusiast
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-2 theme-text">
            {quickLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold transition duration-300 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                {item.name}
              </a>
            ))}
          </div>

          <p className="text-slate-500 text-sm mt-6">
            © {currentYear} {personalInfo.fullName}. All Rights Reserved.
          </p>
        </div>

        {/* Social + Back to top */}
        <div className="flex items-center justify-center gap-3 md:justify-end">
          {socialLinks.map((item) => (
            <Motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-11 h-11 rounded-2xl theme-tile border flex items-center justify-center text-cyan-400 text-xl transition-all duration-300 hover:border-cyan-400"
            >
              {socialIconMap[item.platform]}
            </Motion.a>
          ))}
          <button
            onClick={scrollTop}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 transition hover:-translate-y-1 hover:border-cyan-400"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </Motion.div>
    </footer>
  );
};

export default Footer;
