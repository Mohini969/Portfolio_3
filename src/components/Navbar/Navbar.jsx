import React, { useState, useEffect } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { navItems, personalInfo } from "../../data";
import { navEnter, mobileMenu, navPill } from "../../utils/animations";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Motion.nav
      initial={navEnter.initial}
      animate={navEnter.animate}
      transition={navEnter.transition}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "theme-nav-scrolled shadow-[0_12px_35px_rgba(0,0,0,.08)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => goTo("about")}
          className="group flex items-center gap-2 text-left theme-heading"
          aria-label="Go to about section"
        >
          <span className="mono grid h-10 w-10 place-items-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 transition group-hover:scale-105">
            MS
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-bold leading-none">{personalInfo.fullName}</span>
            <span className="mono text-[11px] text-cyan-400">{personalInfo.roles[0]}</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-2 rounded-full border border-cyan-400/10 bg-white/[.03] p-1 theme-text backdrop-blur-xl">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => goTo(item.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeSection === item.id
                    ? "text-slate-950"
                    : "hover:text-cyan-400"
                }`}
              >
                {activeSection === item.id && (
                  <Motion.span
                    layoutId="active-nav"
                    className="absolute inset-0 rounded-full bg-cyan-400"
                    transition={navPill}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <a
            href={personalInfo.resumePath}
            download
            className="primary-btn !px-5 !py-2.5 text-sm"
          >
            <Download size={17} />
            CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden grid h-11 w-11 place-items-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 transition hover:scale-105"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={mobileMenu.initial}
            animate={mobileMenu.animate}
            exit={mobileMenu.exit}
            transition={mobileMenu.transition}
            className="lg:hidden theme-mobile-nav"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5">
              {navItems.map((item, i) => (
                <Motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={() => goTo(item.id)}
                  className={`rounded-2xl px-4 py-3 text-left font-semibold transition ${
                    activeSection === item.id
                      ? "bg-cyan-400 text-slate-950"
                      : "theme-text hover:bg-cyan-400/10 hover:text-cyan-400"
                  }`}
                >
                  {item.label}
                </Motion.button>
              ))}

              <div className="mt-3 flex items-center justify-between gap-4 border-t border-cyan-400/10 pt-4">
                <ThemeToggle />
                <a href={personalInfo.resumePath} download className="primary-btn !px-5 !py-2.5 text-sm">
                  <Download size={17} />
                  Download CV
                </a>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
};

export default Navbar;
