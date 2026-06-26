import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { skillsData } from "../../data";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, sectionViewport } from "../../utils/animations";

const Skills = () => {
  const categories = ["all", ...skillsData.map((c) => c.category)];
  const categoryLabels = { all: "All", frontend: "Frontend", backend: "Backend", languages: "Languages", tools: "Tools" };
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? skillsData : skillsData.filter((c) => c.category === active);
  const maxSkillCount = Math.max(...skillsData.map((c) => c.skills.length));

  return (
    <SectionWrapper
      id="skills"
      kicker="Technical toolkit"
      title="Skills that power"
      titleAccent="full-stack delivery"
      subtitle="Technologies and tools I use to build modern web applications."
    >
      {/* Filter Tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`filter-tab ${active === cat ? "active" : ""}`}
          >
            {categoryLabels[cat] || cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="wait">
          {filtered.map((category) => (
            <Motion.article
              key={category.title}
              initial="hidden"
              whileInView="show"
              exit={{ opacity: 0, y: 20 }}
              viewport={sectionViewport}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              layout
              className="glass-card group p-6 sm:p-8"
            >
              <div className="mb-7 flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-2xl font-bold theme-heading">{category.title}</h3>
                  <p className="theme-muted mt-2 text-sm">
                    {category.skills.length} technologies in active use
                  </p>
                </div>
                <span className="mono rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-bold text-cyan-400">
                  {category.skills.length} tools
                </span>
              </div>

              {/* Progress bar */}
              <div className="mb-7 h-2 overflow-hidden rounded-full bg-cyan-400/10">
                <Motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(category.skills.length / maxSkillCount) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-300"
                />
              </div>

              {/* Skill tiles */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.skills.map((skill) => (
                  <Motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.04, y: -3 }}
                    className="theme-tile group/skill flex min-h-[92px] flex-col items-center justify-center rounded-2xl border p-3 text-center transition hover:border-cyan-400"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm transition group-hover/skill:shadow-[0_0_18px_rgba(34,211,238,.25)]">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        loading="lazy"
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                    <p className="theme-text mt-3 text-sm font-semibold">{skill.name}</p>
                  </Motion.div>
                ))}
              </div>
            </Motion.article>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
