import React from "react";
import { motion as Motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Laptop, Medal, Trophy } from "lucide-react";
import { workData, experienceAreas, hackathonData } from "../../data";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, sectionViewport } from "../../utils/animations";

const workIcons = [<BriefcaseBusiness />, <Laptop />];

const Work = () => {
  return (
    <SectionWrapper
      id="work"
      kicker="Experience & achievements"
      title="Internships"
      titleAccent="& Hackathons"
      subtitle="Practical experience gained through internships, hackathons and real-world development projects."
    >
      {/* Internship Cards */}
      <div className="relative grid gap-6 lg:grid-cols-2">
        {workData.map((item, index) => (
          <Motion.article
            key={index}
            initial="hidden"
            whileInView="show"
            viewport={sectionViewport}
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: index * 0.08 } },
            }}
            whileHover={{ y: -8 }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                {workIcons[index]}
              </div>
              <span className="mono rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-400">
                {item.duration}
              </span>
            </div>

            <h3 className="text-2xl font-bold theme-heading">{item.title}</h3>
            <p className="text-cyan-400 mt-2 font-semibold">{item.company}</p>
            <p className="theme-muted mt-5 leading-7">{item.description}</p>

            {/* Technology tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </Motion.article>
        ))}
      </div>

      {/* Hackathon + Experience Areas */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[.92fr_1.08fr]">
        {/* Hackathon Card */}
        <Motion.article
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
          variants={fadeUp}
          whileHover={{ y: -8 }}
          className="glass-card p-6 sm:p-8"
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="section-kicker">Hackathons</p>
              <h3 className="mt-2 text-2xl font-bold theme-heading">{hackathonData.title}</h3>
            </div>
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-400/10 text-amber-300">
              <Trophy size={28} />
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <p className="theme-muted text-sm">Competition</p>
              <p className="font-semibold theme-heading">{hackathonData.competition}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <span className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 px-4 py-3">
                <span className="theme-muted block text-xs">Year</span>
                <span className="font-semibold text-cyan-400">{hackathonData.year}</span>
              </span>
              <span className="rounded-2xl border border-emerald-400/15 bg-emerald-400/10 px-4 py-3">
                <span className="theme-muted block text-xs">Technologies</span>
                <span className="font-semibold text-emerald-300">{hackathonData.technologies}</span>
              </span>
            </div>
            <p className="theme-muted leading-7">{hackathonData.description}</p>
            <p className="theme-text rounded-2xl border border-amber-400/15 bg-amber-400/10 px-4 py-3 leading-7">
              {hackathonData.achievement}
            </p>
          </div>
        </Motion.article>

        {/* Experience Areas */}
        <Motion.div
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
          variants={{
            hidden: { opacity: 0, y: 28 },
            show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.08 } },
          }}
          className="glass-card p-6 sm:p-8"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-400">
              <Code2 size={25} />
            </span>
            <div>
              <p className="section-kicker">Development focus</p>
              <h3 className="text-2xl font-bold theme-heading">Hands-on Experience</h3>
            </div>
          </div>

          <div className="space-y-4">
            {experienceAreas.map((item, index) => (
              <Motion.div
                key={item.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="relative rounded-2xl border border-cyan-400/10 bg-cyan-400/[.04] p-4"
              >
                <div className="mb-2 flex items-center gap-3">
                  <Medal size={18} className="text-cyan-400" />
                  <h4 className="font-bold theme-heading">{item.title}</h4>
                </div>
                <p className="theme-muted leading-7">{item.description}</p>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Work;
