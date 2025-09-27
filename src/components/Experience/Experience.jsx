import React, { useEffect, useState } from "react";

const Experience = () => {
  const experiences = [
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

  const projects = [
    {
      name: "Flight Management System",
      tech: "Java",
      description:
        "A console-based application to manage flight schedules, bookings, and user information using Java OOP principles.",
    },
    {
      name: "Bank Management System",
      tech: "MERN Stack",
      description:
        "A full-stack project managing bank accounts, transactions, and user data using MongoDB, Express, React, and Node.js.",
    },
    {
      name: "Personal Portfolio",
      tech: "Frontend",
      description:
        "My personal portfolio website showcasing skills, projects, and experience using React, Tailwind CSS.",
    },
  ];

  // For simple fade-in animation
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300); // fade in after 0.3s
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="experience"
      className={`py-20 bg-gradient-to-b from-[#1a0d3f] to-[#000000] text-white transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-500 animate-pulse">
          My Experience
        </h2>

        {/* Hands-on Experience */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a2e] rounded-xl p-6 shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-[#2a1a4f]"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                {exp.title}
              </h3>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <h3 className="text-2xl font-bold mb-8 text-center text-blue-500">
          Projects
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a2e] rounded-xl p-6 shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-[#2a1a4f]"
            >
              <h4 className="text-lg font-semibold mb-2 text-blue-400">
                {proj.name}
              </h4>
              <p className="text-gray-400 mb-2">
                <span className="font-semibold">Tech:</span> {proj.tech}
              </p>
              <p className="text-gray-300">{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
