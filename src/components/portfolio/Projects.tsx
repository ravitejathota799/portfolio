import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./About";

const projects = [
  {
    title: "FinTest — Unified Test Framework",
    desc: "End-to-end UI + API automation framework with parallel execution, smart waits, and Allure reporting. Built for high-frequency releases in fintech.",
    tags: ["Java", "Selenium", "REST Assured", "TestNG", "Jenkins"],
    accent: "primary",
  },
  {
    title: "API Contract Validator",
    desc: "Pact-based contract testing setup catching breaking changes between microservices before they reach production.",
    tags: ["Pact", "Spring Boot", "Docker", "GitHub Actions"],
    accent: "accent",
  },
  {
    title: "PerfPulse — Load Testing Suite",
    desc: "JMeter + K6 hybrid load tests with real-time Grafana dashboards. Simulates 10k+ concurrent users.",
    tags: ["K6", "JMeter", "Grafana", "InfluxDB"],
    accent: "primary",
  },
  {
    title: "AI Test Generator (POC)",
    desc: "LLM-powered test case generator that reads user stories and produces executable Cucumber scenarios.",
    tags: ["Python", "OpenAI", "Cucumber", "FastAPI"],
    accent: "accent",
  },
];

const Projects = () => (
  <section id="projects" className="py-24 relative">
    <div className="container">
      <SectionHeading kicker="05 — Projects" title="Selected Work" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative bg-gradient-card border border-border rounded-2xl p-7 shadow-card hover:shadow-elegant hover:border-primary/40 transition-all overflow-hidden"
          >
            <div
              className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity ${
                p.accent === "primary" ? "bg-primary" : "bg-accent"
              }`}
            />
            <div className="relative">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <div className="flex gap-2 text-muted-foreground">
                  <a href="#" aria-label="GitHub" className="hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  <a href="#" aria-label="Live" className="hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-secondary border border-border text-foreground/70"
                  >
                    {t}
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

export default Projects;
