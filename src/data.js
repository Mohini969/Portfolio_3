// src/data.js — Centralized portfolio data

import htmlLogo from './assets/skills/htmlLogo.png';
import cssLogo from './assets/skills/cssLogo.png';
import jsLogo from './assets/skills/jsLogo.png';
import reactLogo from './assets/skills/reactLogo.png';
import tailwindLogo from './assets/skills/tailwindLogo.png';
import bootstrapLogo from './assets/skills/bootstrapLogo.png';
import nodeLogo from './assets/skills/nodeLogo.png';
import expressLogo from './assets/skills/expressLogo.png';
import mongodbLogo from './assets/skills/mongodbLogo.png';
import mysqlLogo from './assets/skills/mysqlLogo.png';
import gitLogo from './assets/skills/gitLogo.png';
import githubLogo from './assets/skills/githubLogo.png';
import vscodeLogo from './assets/skills/vscodeLogo.png';
import postmanLogo from './assets/skills/postmanLogo.png';
import netlifyLogo from './assets/skills/netlifyLogo.png';
import verselLogo from './assets/skills/verselLogo.png';
import cLogo from './assets/skills/cLogo.png';

// ─── Personal Info ─────────────────────────────────────────

export const personalInfo = {
  name: "Mohini",
  lastName: "Sahoo",
  fullName: "Mohini Sahoo",
  roles: ["Full Stack Developer", "Java Developer"],
  tagline: "Passionate Full Stack Developer skilled in React, Node.js, Express, MongoDB and Java. I enjoy building modern, scalable and responsive web applications with clean UI and great user experience.",
  email: "mohinisahoo395@gmail.com",
  phone: "+91 9692292596",
  location: "Bhubaneswar, Odisha",
  resumePath: "https://drive.google.com/file/d/1z6N5mTQ5ezRo1dpUUbSY_YyfFJbn_bjk/view?usp=sharing",
  availabilityText: "Available for developer opportunities",
};

// ─── Social Links ──────────────────────────────────────────

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Mohini969", platform: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohini-sahoo-64924933b", platform: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/khu_si__khusi/", platform: "instagram" },
];

// ─── Navigation ────────────────────────────────────────────

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "work", label: "Experience" },
  { id: "contact", label: "Contact" },
];

// ─── Skills ────────────────────────────────────────────────

export const skillsData = [
  {
    title: "Frontend",
    category: "frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "React", logo: reactLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    category: "backend",
    skills: [
      { name: "Node.js", logo: nodeLogo },
      { name: "Express.js", logo: expressLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Languages",
    category: "languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Python", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
      { name: "Java", logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
    ],
  },
  {
    title: "Tools & Platforms",
    category: "tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Vercel", logo: verselLogo },
    ],
  },
];

// ─── Projects ──────────────────────────────────────────────

export const projectsData = [
  {
    title: "Flight Management System",
    tech: ["Java", "OOP", "File Handling"],
    category: "java",
    description:
      "Developed a console-based Flight Management System that manages flight schedules, passenger bookings, cancellations, and user information using Object-Oriented Programming and file handling.",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Bank Management System",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    category: "mern",
    description:
      "Built a full-stack banking application with secure authentication, account management, balance tracking, and transaction history using the MERN Stack.",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "AI Movie & Music Recommendation",
    tech: ["React", "Node.js", "AI"],
    category: "ai",
    description:
      "Designed an AI-powered recommendation platform that suggests personalized movies and music based on user interests and preferences through an interactive interface.",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Creator Hub",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    category: "mern",
    description:
      "Developed a platform connecting brands with creators, enabling campaign management, creator profiles, collaboration requests, and secure authentication.",
    github: "#",
    demo: "#",
    featured: false,
  },
];

// ─── Education ─────────────────────────────────────────────

export const educationData = [
  {
    year: "2023 - 2027",
    degree: "B.Tech in Computer Science & Engineering",
    school: "GIFT Autonomous College",
    location: "Bhubaneswar, Odisha",
    result: "CGPA : 8.88",
    description:
      "Currently pursuing B.Tech in Computer Science and Engineering with a strong focus on Full Stack Development, Java, and Backend Technologies.",
  },
  {
    year: "2021 - 2023",
    degree: "Higher Secondary Education (Science)",
    school: "Viswass Higher Secondary School",
    location: "Bhubaneswar, Odisha",
    result: "80.33%",
    description:
      "Completed Higher Secondary Education in the Science stream with Physics, Chemistry and Mathematics.",
  },
  {
    year: "2020",
    degree: "Secondary Education",
    school: "Sri Aurobindo Institute of Integral Education",
    location: "Bhubaneswar, Odisha",
    result: "88%",
    description:
      "Completed Secondary Education with excellent academic performance and developed a strong foundation in Mathematics and Science.",
  },
];

// ─── Work / Internships ────────────────────────────────────

export const workData = [
  {
    title: "Java Intern",
    company: "OCAC, Bhubaneswar",
    duration: "Internship",
    description:
      "Worked with Java, OOP concepts, Collections, File Handling and core APIs while developing practical applications and improving problem-solving skills.",
    technologies: ["Java", "OOP", "Collections", "File Handling"],
  },
  {
    title: "Backend Development Intern",
    company: "Web_Bocket Pvt. Ltd.",
    duration: "Internship",
    description:
      "Developed REST APIs using Node.js, Express.js and MongoDB. Implemented authentication, CRUD operations and optimized backend functionality.",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

// ─── Experience Areas ──────────────────────────────────────

export const experienceAreas = [
  {
    title: "Frontend Development",
    description:
      "I have hands-on experience in building interactive and responsive frontend applications using HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap. I have developed my personal portfolio to showcase my projects.",
  },
  {
    title: "Backend Development",
    description:
      "I have experience creating backend services using Node.js, Express, and MongoDB. I have implemented APIs and worked on data management for my projects, preparing for full-stack development.",
  },
  {
    title: "Java Development",
    description:
      "I have built projects using Java including Flight Management System and Bank Management System. These projects helped me understand OOP concepts, file handling, and basic database integration.",
  },
];

// ─── Hackathon ─────────────────────────────────────────────

export const hackathonData = {
  title: "Hackathon Participant",
  competition: "Participated in 4+ hackathons and coding competitions",
  year: "Ongoing",
  technologies: "Full-stack solutions",
  achievement:
    "Strengthened problem-solving, rapid prototyping, teamwork, and software development skills in a fast-paced environment.",
  description:
    "Collaborated with a team to design and develop full-stack solutions for real-world challenges.",
};

// ─── Footer Quick Links ────────────────────────────────────

export const quickLinks = [
  { name: "Home", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
