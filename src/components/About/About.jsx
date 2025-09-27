import React, { useEffect, useState } from "react";
import ReactTypingEffect from "react-typing-effect";
import profileImg from "../../assets/image.png";

const About = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="pt-28 px-[7vw] lg:px-[15vw] font-sans min-h-screen flex flex-col md:flex-row items-center justify-between relative overflow-hidden bg-[#050414]"
    >
      {/* Dynamic Interactive Background */}
      <span
        className="absolute w-96 h-96 rounded-full bg-purple-700 opacity-40 blur-3xl pointer-events-none animate-[pulse_4s_ease-in-out_infinite]"
        style={{
          transform: `translate(${mousePos.x / 10}px, ${
            mousePos.y / 10
          }px) scale(${1 + Math.sin(Date.now() / 500) * 0.05})`,
        }}
      ></span>
      <span
        className="absolute w-80 h-80 rounded-full bg-blue-600 opacity-30 blur-3xl pointer-events-none animate-[pulse_5s_ease-in-out_infinite]"
        style={{
          transform: `translate(${mousePos.x / 15}px, ${
            mousePos.y / 15
          }px) scale(${1 + Math.cos(Date.now() / 600) * 0.07})`,
        }}
      ></span>

      {/* Left side text */}
      <div className="md:w-1/2 text-center md:text-left relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
          Hi, I am 👋🏻
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Mohini Sahoo
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl mb-6">
          I am a full-stack developer with experience in both front-end and
          back-end technologies. Enthusiastic about AI/ML, I love coding and
          creating interactive, scalable, and efficient web applications.
        </p>
        <a
          href="/Mohini-Sahoo-CV.pdf"
          download="Mohini-Sahoo-CV.pdf"
          className="px-6 py-3 bg-[#8245ec] hover:bg-[#6c34c4] transition text-white font-semibold rounded-full shadow-lg"
        >
          DOWNLOAD CV
        </a>
      </div>

      {/* Right side image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative z-10">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#8245ec] shadow-[0_0_50px_#8245ec]">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236)]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
