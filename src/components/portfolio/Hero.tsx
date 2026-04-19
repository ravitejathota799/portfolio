import { useEffect, useState } from "react";
import { Download, Mail, Linkedin } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";
import heroBg from "@/assets/hero-bg.jpg";

const roles = ["SDET Engineer", "QA Automation Lead", "Test Architect", "CI/CD Specialist"];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 50 : 110;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1600);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-bg opacity-60" />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass">
            <span className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
            <span className="text-xs font-mono text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-primary text-sm md:text-base">
              &gt; console.log("Hello World!")
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Hi, I'm <span className="text-gradient">Thota Ravi Teja</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground/90 min-h-[1.5em]">
              {text}
              <span className="text-primary animate-blink">|</span>
            </h2>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Test Automation Engineer specializing in product release QA. 2+ years
            building scalable UI &amp; API automation frameworks for Insurance and Health Care
            products — from DEV to PROD, with CI/CD baked in.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              <Mail size={18} /> Hire Me
            </a>
            <a
              href="https://drive.google.com/file/d/1A1rhvK1Mcqe_bdJaz4q0F8_nHqzwih0_/view?usp=sharing" target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-semibold hover:border-primary/50 transition-colors"
            >
              <Download size={18} /> Resume
            </a>
            <a
              href="https://www.linkedin.com/in/thota-ravi-teja-05997b212/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition-colors"
            >
              <Linkedin size={18} /> Connect
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-fade-in">
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 animate-glow-pulse" />
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-30 blur-2xl" />
            <img
              src={profileImg}
              alt="Thota Ravi Teja - SDET Engineer"
              width={420}
              height={420}
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover glow-ring"
            />

            {/* Orbit system — chips revolve around the profile */}
            <div className="pointer-events-none absolute inset-0">
              <Orbit radiusVar="clamp(150px, 26vw, 220px)">
                <OrbitChip name="Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" angle={0} duration={28} />
                <OrbitChip name="Selenium" src="https://cdn.simpleicons.org/selenium" angle={120} duration={28} />
                <OrbitChip name="Postman" src="https://cdn.simpleicons.org/postman" angle={240} duration={28} />
              </Orbit>
              <Orbit radiusVar="clamp(200px, 32vw, 280px)">
                <OrbitChip name="Cypress" src="https://cdn.simpleicons.org/cypress/E5E5E5" angle={60} duration={36} reverse />
                <OrbitChip name="Playwright" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" angle={180} duration={36} reverse />
                <OrbitChip name="Jenkins" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" angle={300} duration={36} reverse />
              </Orbit>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Orbit = ({
  radiusVar,
  children,
}: {
  radiusVar: string;
  children: React.ReactNode;
}) => (
  <div
    className="absolute left-1/2 top-1/2"
    style={{ width: 0, height: 0, ['--orbit-radius' as never]: radiusVar }}
    aria-hidden
  >
    {children}
  </div>
);

const OrbitChip = ({
  name,
  src,
  angle,
  duration,
  reverse = false,
}: {
  name: string;
  src: string;
  angle: number;
  duration: number;
  reverse?: boolean;
}) => {
  const delay = `${-(angle / 360) * duration}s`;
  return (
    <div
      className="absolute left-0 top-0"
      style={{
        animation: `${reverse ? "orbit-reverse" : "orbit"} ${duration}s linear infinite`,
        animationDelay: delay,
      }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <div className="group relative flex items-center gap-2 pl-2 pr-3 py-2 rounded-full glass border border-primary/20 shadow-elegant backdrop-blur-xl hover:border-primary/60 hover:scale-110 transition-all duration-300 pointer-events-auto">
          <span className="absolute -inset-px rounded-full bg-gradient-primary opacity-0 group-hover:opacity-30 blur-md transition-opacity" />
          <span className="relative flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-background/60">
            <img src={src} alt={`${name} logo`} className="w-5 h-5 md:w-6 md:h-6" loading="lazy" />
          </span>
          <span className="relative font-mono text-[11px] md:text-xs font-semibold text-foreground/90 whitespace-nowrap">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
