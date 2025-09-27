import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans
                 bg-gradient-to-b from-[#1a0d3f] via-[#2e1a55] to-[#000000]
                 clip-path-cursor relative overflow-hidden"
    >
      {/* Background animation circles */}
      <span className="absolute top-[-50px] left-[-50px] w-72 h-72 rounded-full bg-purple-800 opacity-20 animate-pulse"></span>
      <span className="absolute bottom-[-60px] right-[-60px] w-96 h-96 rounded-full bg-blue-900 opacity-20 animate-pulse"></span>

      {/* Section title */}
      <div className="text-center mb-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise
        </p>
      </div>

      {/* Skills categories */}
      <div className="flex flex-wrap gap-6 justify-center relative z-10">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white
                       shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                       transform transition duration-500
                       hover:-translate-y-2 hover:shadow-2xl hover:bg-[#11101a]"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center w-24"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-16 h-16 mb-2 object-contain"
                  />
                  <p className="text-white font-medium text-center">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
