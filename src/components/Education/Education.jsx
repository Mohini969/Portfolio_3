import React, { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade-in animation when component mounts
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const educationData = [
    {
      year: "10th (2020)",
      school: "Sri Aurobindo Institute of Integral Education",
      location: "Bhubaneswar, Odisha",
      details: "Scored 88% in the 10th Board Examination.",
    },
    {
      year: "12th (2021-2023)",
      school: "Viswass Higher Secondary School",
      location: " Bhubaneswar, Odisha",
      details: "Completed 12th in Science stream.",
    },
    {
      year: "B.Tech CSE (2023 - 2027)",
      school: "GIFT Autonomous College",
      location: "Bhubaneswar, Odisha",
      details:
        "Currently a third-year Computer Science and Engineering student at GIFT Autonomous College, maintaining an 8.9 CGPA.",
    },
  ];

  return (
    <section
      id="education"
      className={`py-20 px-6 lg:px-20 relative overflow-hidden bg-gradient-to-b from-[#000000] via-[#1b1233] to-[#2b1955] text-white transition-all duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Glows */}
      <span className="absolute top-[-80px] left-[-80px] w-96 h-96 rounded-full bg-purple-800 opacity-20 blur-3xl animate-pulse"></span>
      <span className="absolute bottom-[-100px] right-[-100px] w-[30rem] h-[30rem] rounded-full bg-blue-900 opacity-20 blur-3xl animate-pulse"></span>

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          My academic journey so far
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto z-10">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 h-full rounded-full"></div>

        <div className="space-y-16">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className={`relative flex items-center ${
                idx % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#8245ec] rounded-full flex items-center justify-center shadow-lg">
                <FaGraduationCap className="text-white" />
              </div>

              {/* Content */}
              <div
                className={`w-5/12 p-6 rounded-xl shadow-xl backdrop-blur-md bg-[#1a1a2e] hover:bg-[#14131f] transform transition duration-500 hover:-translate-y-2 ${
                  idx % 2 === 0
                    ? "text-right mr-auto"
                    : "text-left ml-auto"
                }`}
              >
                <h3 className="text-xl font-bold text-blue-400">{edu.year}</h3>
                <p className="text-lg font-semibold">{edu.school}</p>
                <p className="text-sm text-gray-400">{edu.location}</p>
                <p className="text-gray-300 mt-2">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
