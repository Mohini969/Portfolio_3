import React, { Suspense, lazy } from "react";
import { motion as Motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { personalInfo, socialLinks } from "../../data";
import { staggerContainer, staggerItem } from "../../utils/animations";
import MagneticButton from "../ui/MagneticButton";

const HeroScene = lazy(() => import("../3d/HeroScene"));

const socialIconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedinIn />,
  instagram: <FaInstagram />,
};

const stats = [
  { value: "MERN", label: "Full-stack projects" },
  { value: "Java", label: "OOP & backend" },
  { value: "4+", label: "Hackathons" },
];

const Hero = () => {
  const typeSequence = personalInfo.roles.flatMap((role) => [role, 2000]);

  const container = staggerContainer(0.12, 0.1);
  const item = staggerItem;

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-6 lg:px-20"
    >
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <Motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="glass-card rounded-[2rem] p-8 sm:p-10 lg:p-14"
        >
          <Motion.div variants={item} className="eyebrow mb-6">
            <Sparkles size={16} />
            <span>{personalInfo.availabilityText}</span>
          </Motion.div>

          <Motion.p variants={item} className="theme-text mb-3 text-lg font-medium">
            Hello, I'm
          </Motion.p>

          <Motion.h1
            variants={item}
            className="text-balance text-5xl font-extrabold leading-[1.02] theme-heading sm:text-6xl lg:text-7xl"
          >
            {personalInfo.name} <span className="gradient-text">{personalInfo.lastName}</span>
          </Motion.h1>

          <Motion.div
            variants={item}
            className="mt-5 min-h-[3rem] text-2xl font-bold theme-heading sm:text-3xl lg:text-4xl"
          >
            <span className="theme-muted">I build as a </span>
            <span className="text-cyan-400">
              <TypeAnimation sequence={typeSequence} repeat={Infinity} />
            </span>
          </Motion.div>

          <Motion.p variants={item} className="theme-muted mt-7 max-w-2xl text-base leading-8 sm:text-lg">
            {personalInfo.tagline}
          </Motion.p>

          <Motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-3 theme-text">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 text-sm">
              <MapPin size={16} className="text-cyan-400" />
              {personalInfo.location}
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <Mail size={16} />
              {personalInfo.email}
            </a>
          </Motion.div>

          <Motion.div variants={item} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <MagneticButton as="a" href="#contact" className="primary-btn">
              Hire Me
              <ArrowDown size={18} />
            </MagneticButton>

            <MagneticButton as="a" href="#projects" className="secondary-btn">
              View Projects
              <ArrowDown size={18} />
            </MagneticButton>

            <MagneticButton as="a" href={personalInfo.resumePath} download className="secondary-btn">
              <Download size={18} />
              Download CV
            </MagneticButton>
          </Motion.div>

          <Motion.div variants={item} className="mt-8 flex items-center gap-4">
            {socialLinks.map((social) => (
              <Motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-400 transition hover:border-cyan-400 hover:shadow-[0_0_26px_rgba(34,211,238,.24)]"
              >
                {socialIconMap[social.platform]}
              </Motion.a>
            ))}
          </Motion.div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-8 grid gap-3 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <Motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-5 text-center"
            >
              <p className="mono text-2xl font-bold text-cyan-400">{stat.value}</p>
              <p className="theme-muted mt-2 text-sm leading-6">{stat.label}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
