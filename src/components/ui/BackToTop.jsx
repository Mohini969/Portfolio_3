import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * Floating back-to-top button that appears after scrolling past the hero.
 */
const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <Motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 grid h-12 w-12 place-items-center rounded-2xl border border-cyan-400/30 bg-[var(--color-surface)] text-cyan-400 shadow-lg backdrop-blur-xl transition-colors hover:border-cyan-400 hover:bg-cyan-400/10"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </Motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
