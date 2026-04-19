import { SectionHeading } from "./About";

const skillGroups = [
  {
    category: "Automation Frameworks",
    skills: ["Selenium WebDriver", "Cypress", "Playwright", "TestNG", "JUnit 5", "Cucumber (BDD)"],
  },
  {
    category: "API & Performance",
    skills: ["REST Assured", "Postman"],
  },
  {
    category: "Languages & Tools",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  {
    category: "DevOps & CI/CD",
    skills: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes", "AWS", "Maven"],
  },
  {
    category: "Test Management",
    skills: ["JIRA", "qTest", "Allure", "ExtentReports"],
  },
  {
    category: "Methodologies",
    skills: ["Agile / Scrum", "TDD", "BDD", "Shift-Left", "Risk-Based Testing", "Exploratory"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container">
        <SectionHeading kicker="02 — Skills" title="My Tech Arsenal" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-gradient-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elegant hover:border-primary/40 transition-all group"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-primary group-hover:scale-150 transition-transform" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs font-mono rounded-lg bg-secondary text-foreground/80 border border-border hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
