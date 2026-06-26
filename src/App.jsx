import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Work from "./components/Work/Work";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/ui/LoadingScreen";
import ScrollProgress from "./components/ui/ScrollProgress";
import CustomCursor from "./components/ui/CustomCursor";
import BackToTop from "./components/ui/BackToTop";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    let lenis;
    const initLenis = async () => {
      try {
        const Lenis = (await import("lenis")).default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch {
        // Lenis is optional; fall back to native scroll
      }
    };

    if (!loading) {
      initLenis();
    }

    return () => {
      lenis?.destroy();
    };
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <CustomCursor />
      <ScrollProgress />

      <div className={`app-shell ${loading ? "overflow-hidden h-screen" : ""}`}>
        <div className="ambient-field" />
        <div className="absolute inset-0 app-grid" />
        <div className="noise-layer" />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Skills />
          <Projects />
          <Education />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>

      <BackToTop />
    </>
  );
}

export default App;
