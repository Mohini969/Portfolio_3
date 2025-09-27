import React from "react";
import { FaBriefcase, FaLaptopCode, FaMedal } from "react-icons/fa";

const Work = () => {
  const workData = [
    {
      title: "Hackathon Participant",
      company: "Sustainability Compliance Hackathon",
      icon: <FaMedal />,
      description:
        "Developed a web solution for tracking and reporting sustainability metrics during a hackathon focused on sustainability compliance.",
    },
    {
      title: "Java Intern",
      company: "OCAC Bhubaneswar",
      icon: <FaBriefcase />,
      description:"Gained hands-on experience in Java programming, including object-oriented concepts, core APIs, and practical application development.",
    },
    {
      title: "Backend Development Intern",
      company: "Web_Bocket",
      icon: <FaLaptopCode />,
      description: "Enhance my knowledge in backend development using Node.js and MongoDB by building and optimizing API endpoints and implementing authentication features, which helped me strengthen my skills in server-side programming."
        },
    
  ];

  return (
    <section
      id="work"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 py-20 text-white"
      style={{
  background: "linear-gradient(135deg, #2b1955, #4b2e7e, #6a3fa0)",
}}

    >
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">
          My Experience
        </h2>
        <p className="text-white text-lg max-w-xl mx-auto">
          Internships and hackathon participation demonstrating my hands-on experience in full-stack and backend development.
        </p>
      </div>

      {/* Work Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full max-w-6xl">
        {workData.map((item, idx) => (
          <div
            key={idx}
            className="group relative p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl transform transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500"
          >
            <div className="text-5xl mb-4 text-white group-hover:text-white flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-1">{item.title}</h3>
            <p className="text-sm text-gray-100 text-center mb-3">{item.company}</p>
            <p className="text-gray-100 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
