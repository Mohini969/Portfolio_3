import React from "react";
import { motion as Motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { educationData } from "../../data";
import SectionWrapper from "../ui/SectionWrapper";
import { sectionViewport } from "../../utils/animations";

const Education = () => {
  return (
    <SectionWrapper
      id="education"
      kicker="Academic path"
      title="My"
      titleAccent="Education"
      subtitle="My academic journey that built the foundation of my technical career."
    >
      <div className="relative mx-auto max-w-5xl">
        {/* Timeline line */}
        <div className="timeline-line absolute left-5 top-0 hidden h-full w-px md:left-1/2 md:block" />

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <Motion.article
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={sectionViewport}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: index * 0.06 } },
              }}
              className={`relative grid gap-5 md:grid-cols-2 ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              {/* Timeline dot with pulse */}
              <span className="absolute left-1/2 top-7 hidden -translate-x-1/2 md:block">
                <span className="block h-4 w-4 rounded-full border-4 border-cyan-400 bg-[var(--color-bg)]" />
                <span className="absolute inset-0 animate-pulse-dot rounded-full border-2 border-cyan-400/40" />
              </span>

              {/* Spacer for alternating layout */}
              <div className={`hidden md:block ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`} />

              {/* Card */}
              <Motion.div
                whileHover={{ y: -6 }}
                className={`glass-card relative p-6 sm:p-7 ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className={index % 2 === 0 ? "md:order-2" : ""}>
                    <div className={`mb-4 flex items-center gap-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                        <GraduationCap size={25} />
                      </span>
                      <span className="mono rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-bold text-cyan-400">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold theme-heading sm:text-2xl">{item.degree}</h3>
                    <p className="mt-2 font-semibold text-cyan-400">{item.school}</p>
                    <p className={`theme-muted mt-2 flex items-center gap-2 text-sm ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}>
                      <MapPin size={15} />
                      {item.location}
                    </p>
                  </div>
                </div>

                <span className="mt-5 inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                  {item.result}
                </span>

                <p className="theme-text mt-5 leading-7">{item.description}</p>
              </Motion.div>
            </Motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
