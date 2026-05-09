import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type ParallaxKey =
  | "hero"
  | "about"
  | "skills"
  | "experience"
  | "certifications"
  | "projects"
  | "stats"
  | "contact";

export const PARALLAX_SECTIONS: { key: ParallaxKey; label: string }[] = [
  { key: "hero", label: "Hero" },
  { key: "about", label: "About" },
  { key: "skills", label: "Skills" },
  { key: "experience", label: "Experience" },
  { key: "certifications", label: "Certifications" },
  { key: "projects", label: "Projects" },
  { key: "stats", label: "Test Stats" },
  { key: "contact", label: "Contact" },
];

const DEFAULTS: Record<ParallaxKey, number> = {
  hero: 0.15,
  about: 0.15,
  skills: 0.12,
  experience: 0.1,
  certifications: 0.13,
  projects: 0.14,
  stats: 0.12,
  contact: 0.13,
};

const STORAGE_KEY = "parallax-speeds-v1";

type Ctx = {
  speeds: Record<ParallaxKey, number>;
  setSpeed: (k: ParallaxKey, v: number) => void;
  reset: () => void;
  defaults: Record<ParallaxKey, number>;
};

const ParallaxContext = createContext<Ctx | null>(null);

export const ParallaxProvider = ({ children }: { children: ReactNode }) => {
  const [speeds, setSpeeds] = useState<Record<ParallaxKey, number>>(() => {
    if (typeof window === "undefined") return DEFAULTS;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return DEFAULTS;
      return { ...DEFAULTS, ...JSON.parse(raw) };
    } catch {
      return DEFAULTS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(speeds));
    } catch {
      // ignore
    }
  }, [speeds]);

  const setSpeed = (k: ParallaxKey, v: number) =>
    setSpeeds((s) => ({ ...s, [k]: v }));
  const reset = () => setSpeeds(DEFAULTS);

  return (
    <ParallaxContext.Provider value={{ speeds, setSpeed, reset, defaults: DEFAULTS }}>
      {children}
    </ParallaxContext.Provider>
  );
};

export const useParallaxSpeed = (key: ParallaxKey): number => {
  const ctx = useContext(ParallaxContext);
  return ctx ? ctx.speeds[key] : DEFAULTS[key];
};

export const useParallaxControls = () => {
  const ctx = useContext(ParallaxContext);
  if (!ctx) throw new Error("useParallaxControls must be used within ParallaxProvider");
  return ctx;
};
