import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./About";
import { useParallax } from "@/hooks/use-parallax";
import { useParallaxSpeed } from "@/contexts/ParallaxContext";
import abhibus from "@/assets/travel-bus-hero.jpg";

const projects = [
  {
    title: "Insurance Management Suite",
    desc: "End-to-end UI + API automation framework with parallel execution, smart waits, and Allure reporting. Built for high-frequency releases in insurance management system.",
    tags: ["Java", "Selenium", "REST Assured", "TestNG", "GHA"],
    accent: "primary",
    image: abhibus,
    projectlink: ""
  },
  {
    title: "ABHI Bus Booking Automation",
    desc: "Developed a comprehensive test automation suite for a abhi bus application, covering UI end-to-end testing with Selenium and cucumber BDD frameworks. Included test cases, bug reports, and code for automated scripts. Incorporated AI tools for test optimization.",
    tags: ["Java", "Selenium", "REST Assured", "TestNG", "Jenkins","Cucumber", "AI"],
    accent: "accent",
    image: abhibus,
    projectlink: "https://github.com/ravitejathota799/ABHI-BUS-AUTOMATION"
  }
];

const Projects = () => {
  const { ref, offset } = useParallax(useParallaxSpeed("projects"));
  return (
    <section id="projects" ref={ref as React.RefObject<HTMLElement>} className="py-24 relative overflow-hidden">
      <div
        className="absolute top-1/2 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translate3d(0, ${-offset}px, 0)` }}
        aria-hidden
      />
      <div className="container relative">
        <SectionHeading kicker="05 - Projects" title="Selected Work/Projects" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative bg-gradient-card border border-border rounded-2xl shadow-card hover:shadow-elegant hover:border-primary/40 transition-all overflow-hidden"
              style={{ transform: `translate3d(0, ${offset * (0.15 + (i % 2) * 0.18)}px, 0)` }}
            >
              {/* Image cover with hover motion */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  width={800}
                  height={512}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                {/* Scan line sweep on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                {/* Animated glow ring */}
                <div
                  className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-70 group-hover:scale-125 transition-all duration-700 ${
                    p.accent === "primary" ? "bg-primary" : "bg-accent"
                  }`}
                />
                {/* Test status badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-md bg-background/70 backdrop-blur-sm border border-primary/30 font-mono text-[10px] text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  PASSED
                </div>
              </div>

              <div className="relative p-7">
                <p className="font-mono text-[11px] text-primary mb-2">{`@TestCase("TC_${String(i + 1).padStart(3, "0")}")`}</p>
                <div className="flex items-start justify-between mb-3 gap-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex gap-2 text-muted-foreground shrink-0">
                    <a href={p.projectlink} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary hover:-translate-y-0.5 transition-all">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 font-mono">
                  <span className="text-accent">/**</span> {p.desc} <span className="text-accent">*/</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-secondary border border-border text-foreground/70 group-hover:border-primary/30 transition-colors"
                    >
                      {t.replace(/\s/g, "")}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
