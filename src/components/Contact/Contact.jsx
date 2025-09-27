import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const contactLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      link: "https://github.com/Mohini969",
      color: "#6e5494",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/mohini-sahoo-64924933b",
      color: "#0077b5",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      link: "https://mail.google.com/mail/?view=cm&to=mohinisahoo395@gmail.com",
      color: "#e74c3c",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden"
    >
      {/* Central Contact Cards */}
      <div className="relative z-10 flex flex-col items-center space-y-10">
        <h2 className="text-5xl font-bold text-white text-center mb-4">
          Let’s Connect
        </h2>
        <p className="text-gray-300 text-center max-w-lg mb-8">
          I’m always open to opportunities, collaborations, or a simple chat. Reach out via any of the platforms below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {contactLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center w-56 h-56 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl transform transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500"
            >
              <div className="text-5xl mb-4 text-white group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <span className="text-lg font-semibold text-white group-hover:text-white">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
