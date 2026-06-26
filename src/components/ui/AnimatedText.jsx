import React from "react";
import { motion as Motion } from "framer-motion";

/**
 * Word-by-word animated text reveal.
 */
const AnimatedText = ({
  text,
  className = "",
  delay = 0,
  stagger = 0.04,
  once = true,
}) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.5 }}
      className={`inline-flex flex-wrap gap-x-[0.3em] ${className}`}
      aria-label={text}
    >
      {words.map((word, i) => (
        <Motion.span key={i} variants={child} className="inline-block">
          {word}
        </Motion.span>
      ))}
    </Motion.span>
  );
};

export default AnimatedText;
