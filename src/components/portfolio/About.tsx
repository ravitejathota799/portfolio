import { Code2, Cpu, GitBranch, Target } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frameworks Built", value: "8+" },
  { icon: Cpu, label: "Test Cases Automated", value: "2.5k+" },
  { icon: GitBranch, label: "CI/CD Pipelines", value: "15+" },
  { icon: Target, label: "Defect Detection Rate", value: "98%" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <SectionHeading kicker="01 — About" title="Engineered for Quality" />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              SDET with <span className="text-gradient">2+ years</span> of releasing
              bulletproof software.
            </h3>
            <p>
              I'm Thota Ravi Teja, a Software Development Engineer in Test obsessed with
              shipping reliable products. I design end-to-end automation frameworks
              that scale across UI, API, and database layers — and integrate them
              into CI/CD so every commit is validated before it reaches users.
            </p>
            <p>
              My focus is on <span className="text-primary">test strategy</span>,{" "}
              <span className="text-accent">framework architecture</span>, and
              shifting quality left. I've worked across DEV, UAT, PREPROD, and PROD
              environments — automating regression suites, building data-driven
              tests, and mentoring teams on testing best practices.
            </p>
            <p>
              When I'm not writing tests, you'll find me exploring AI-assisted
              testing, contributing to open source, or sharing learnings on QA
              architecture.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols- 2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="bg-gradient-card border border-border rounded-2xl p-5 shadow-card hover:border-primary/40 transition-colors group"
              >
                <h.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-gradient">{h.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const SectionHeading = ({
  kicker,
  title,
  center,
}: {
  kicker: string;
  title: string;
  center?: boolean;
}) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    <p className="font-mono text-primary text-sm mb-3">{kicker}</p>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
      <span className="text-gradient">{title}</span>
    </h2>
    <div
      className={`mt-4 h-1 w-20 bg-gradient-primary rounded-full ${
        center ? "mx-auto" : ""
      }`}
    />
  </div>
);

export default About;
