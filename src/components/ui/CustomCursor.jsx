import React, { useEffect, useRef, useState, useCallback } from "react";

/**
 * Custom cursor that follows mouse movement (desktop only).
 * Expands on hovering interactive elements.
 */
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const move = useCallback((e) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
    if (!visible) setVisible(true);
  }, [visible]);

  useEffect(() => {
    // Only show on devices with a fine pointer (desktop)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    window.addEventListener("mousemove", move, { passive: true });

    const interactiveSelector = "a, button, input, textarea, [role='button'], .magnetic-btn";

    const handleOver = (e) => {
      if (e.target.closest(interactiveSelector)) setHovering(true);
    };
    const handleOut = (e) => {
      if (e.target.closest(interactiveSelector)) setHovering(false);
    };

    document.addEventListener("mouseover", handleOver, { passive: true });
    document.addEventListener("mouseout", handleOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [move]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${hovering ? "hovering" : ""}`}
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    />
  );
};

export default CustomCursor;
