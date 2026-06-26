import React, { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

/**
 * Full-screen loading animation shown on initial page load.
 */
const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete?.(), 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <Motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="loading-logo">
              <span className="text-[var(--color-heading)]">M</span>
              <span>S</span>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="loading-bar"
          >
            <div className="loading-bar-fill" />
          </Motion.div>

          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-6 text-sm theme-muted tracking-widest uppercase"
          >
            Loading portfolio
          </Motion.p>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
