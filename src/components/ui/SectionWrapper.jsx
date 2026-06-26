import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeUp, sectionViewport } from "../../utils/animations";

/**
 * Reusable section wrapper with kicker, title, subtitle, and scroll animation.
 */
const SectionWrapper = ({
  id,
  kicker,
  title,
  titleAccent,
  subtitle,
  children,
  className = "",
}) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="relative z-10 mx-auto max-w-7xl">
        <Motion.div
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
          variants={fadeUp}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {kicker && <p className="section-kicker">{kicker}</p>}
          <h2 className="mt-3 text-4xl font-extrabold theme-heading sm:text-5xl">
            {title}{" "}
            {titleAccent && <span className="gradient-text">{titleAccent}</span>}
          </h2>
          {subtitle && (
            <p className="theme-muted mt-5 text-lg max-w-2xl mx-auto">{subtitle}</p>
          )}
        </Motion.div>

        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
