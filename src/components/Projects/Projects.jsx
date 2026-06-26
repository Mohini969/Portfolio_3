import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, Code2 } from "lucide-react";
import { projectsData } from "../../data";
import SectionWrapper from "../ui/SectionWrapper";
import { sectionViewport } from "../../utils/animations";

/** Color map for project categories */
const categoryColors = {
  java: "from-orange-400/20 to-red-400/10",
  mern: "from-cyan-400/20 to-emerald-400/10",
  ai: "from-purple-400/20 to-pink-400/10",
};

const Projects = () => {
  const allCategories = ["all", ...new Set(projectsData.map((p) => p.category))];
  const categoryLabels = { all: "All", java: "Java", mern: "MERN", ai: "AI" };
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? projectsData : projectsData.filter((p) => p.category === active);

  return (
    <SectionWrapper
      id="projects"
      kicker="Selected work"
      title="Featured"
      titleAccent="Projects"
      subtitle="A collection of projects that demonstrate my knowledge of software development, full-stack engineering and problem solving."
    >
      {/* Filter Tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`filter-tab ${active === cat ? "active" : ""}`}
          >
            {categoryLabels[cat] || cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid gap-7 md:grid-cols-2">
        <AnimatePresence mode="wait">
          {filtered.map((project, index) => (
            <Motion.article
              key={project.title}
              initial="hidden"
              whileInView="show"
              exit={{ opacity: 0, y: 20 }}
              viewport={sectionViewport}
              variants={{
                hidden: { opacity: 0, y: 34 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: index * 0.05 } },
              }}
              whileHover={{ y: -10 }}
              layout
              className={`group glass-card-glow overflow-hidden ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Thumbnail area */}
              <div className={`project-thumb relative ${project.featured ? "h-64" : "h-56"} overflow-hidden border-b border-cyan-400/10 p-5`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[project.category] || "from-cyan-400/10 to-transparent"} opacity-60`} />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:22px_22px] opacity-30" />
                <Motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.1 }}
                  className="relative flex h-full flex-col justify-between rounded-[1rem] border border-cyan-400/20 bg-black/10 p-5 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="mono rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-400">
                      Project 0{index + 1}
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-400 transition group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,211,238,.3)]">
                      <Code2 size={24} />
                    </span>
                  </div>
                  <div>
                    <Code2 className="mb-3 text-[var(--color-accent-2)]" size={24} />
                    <p className={`max-w-xs ${project.featured ? "text-2xl" : "text-xl"} font-bold theme-heading`}>
                      {project.title}
                    </p>
                  </div>
                </Motion.div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="mt-5 text-2xl font-bold theme-heading">{project.title}</h3>
                <p className="theme-muted mt-4 leading-7">{project.description}</p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-btn !rounded-xl !px-5 !py-2.5 text-sm"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-btn !rounded-xl !px-5 !py-2.5 text-sm"
                  >
                    <ArrowUpRight size={17} />
                    Live Demo
                  </a>
                </div>
              </div>
            </Motion.article>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
