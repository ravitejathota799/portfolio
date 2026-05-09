import { useEffect, useRef, useState } from "react";

/**
 * Returns a translateY offset (px) based on the element's position in viewport.
 * speed: positive = moves slower (background feel), try 0.1–0.5
 */
export const useParallax = (speed = 0.2) => {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const fromCenter = center - window.innerHeight / 2;
      setOffset(-fromCenter * speed);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return { ref, offset };
};
