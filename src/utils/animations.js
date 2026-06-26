/**
 * Centralized Framer Motion animation variants.
 * Import these across components instead of duplicating animation configs.
 */

// ─── Fade Up (most common) ────────────────────────────────

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─── Fade In ───────────────────────────────────────────────

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Slide In from Left ────────────────────────────────────

export const slideLeft = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─── Slide In from Right ───────────────────────────────────

export const slideRight = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─── Scale In ──────────────────────────────────────────────

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Stagger Container ────────────────────────────────────

export const staggerContainer = (staggerAmount = 0.1, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: staggerAmount,
      delayChildren,
    },
  },
});

// ─── Stagger Item ──────────────────────────────────────────

export const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

// ─── Nav Enter ─────────────────────────────────────────────

export const navEnter = {
  initial: { y: -22, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.55, ease: "easeOut" },
};

// ─── Mobile Menu ───────────────────────────────────────────

export const mobileMenu = {
  initial: { opacity: 0, y: -14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -14 },
  transition: { duration: 0.22 },
};

// ─── Card Hover ────────────────────────────────────────────

export const cardHover = {
  whileHover: { y: -8 },
  whileTap: { scale: 0.98 },
};

// ─── Active Nav Pill ───────────────────────────────────────

export const navPill = {
  type: "spring",
  stiffness: 420,
  damping: 34,
};

// ─── Section viewport config ──────────────────────────────

export const sectionViewport = { once: true, amount: 0.25 };

// ─── Hover Lift ────────────────────────────────────────────

export const hoverLift = {
  whileHover: { y: -6, scale: 1.02 },
  transition: { duration: 0.3 },
};
