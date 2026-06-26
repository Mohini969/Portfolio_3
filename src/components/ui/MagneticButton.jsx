import React, { useRef, useState } from "react";
import { motion as Motion } from "framer-motion";

/**
 * Magnetic button that subtly follows the cursor on hover.
 * Desktop only — falls back to standard button on touch devices.
 */
const MagneticButton = ({
  children,
  className = "",
  strength = 0.3,
  as = "button",
  ...props
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPosition({ x, y });
  };

  const handleLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Tag = as === "a" ? Motion.a : Motion.button;

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 20, mass: 0.5 }}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default MagneticButton;
