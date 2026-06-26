import React from "react";
import { motion as Motion } from "framer-motion";
import { useScrollProgress } from "../../hooks/useScrollProgress";

/**
 * Fixed scroll progress bar at the top of the page.
 */
const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <Motion.div
      className="scroll-progress"
      style={{ scaleX: progress }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
