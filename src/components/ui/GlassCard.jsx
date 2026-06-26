import React from "react";
import { motion as Motion } from "framer-motion";

/**
 * Premium glassmorphism card with hover glow effect.
 */
const GlassCard = ({
  children,
  className = "",
  hoverY = -8,
  glow = false,
  as = "div",
  ...props
}) => {
  const Component = Motion[as] || Motion.div;

  return (
    <Component
      whileHover={{ y: hoverY }}
      className={`${glow ? "glass-card-glow" : "glass-card"} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GlassCard;
