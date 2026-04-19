import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./About";

const stats = [
  { value: 2500, suffix: "+", label: "Test Cases Automated" },
  { value: 98, suffix: "%", label: "Defect Detection Rate" },
  { value: 15, suffix: "+", label: "CI/CD Pipelines" },
  { value: 80, suffix: "%", label: "Regression Time Reduced" },
];

const useCount = (target: number, start: boolean, duration = 1500) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
};

const StatCard = ({ visible, s }: { visible: boolean; s: typeof stats[number] }) => {
  const v = useCount(s.value, visible);
  return (
    <div className="bg-gradient-card border border-border rounded-2xl p-7 text-center shadow-card hover:border-primary/40 transition-colors">
      <div className="text-4xl md:text-5xl font-bold text-gradient">
        {v}
        {s.suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
    </div>
  );
};

const TestStats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="container">
        <SectionHeading
          kicker="06 — Test Stats"
          title="Quality, by the Numbers"
          center
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {stats.map((s) => (
            <StatCard key={s.label} visible={visible} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestStats;
