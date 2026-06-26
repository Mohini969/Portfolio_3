import { useState, useEffect } from "react";

/**
 * Tracks mouse position (clientX, clientY) with optional ref-based relative positioning.
 * @returns {{ x: number, y: number }}
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", update, { passive: true });
    return () => window.removeEventListener("mousemove", update);
  }, []);

  return position;
}
