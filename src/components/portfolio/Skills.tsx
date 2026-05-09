import { SectionHeading } from "./About";

type Skill = { name: string; src: string };

const skillGroups: { category: string; skills: Skill[] }[] = [
  {
    category: "Automation Frameworks",
    skills: [
      { name: "Selenium", src: "https://cdn.simpleicons.org/selenium" },
      { name: "Cypress", src: "https://cdn.simpleicons.org/cypress/E5E5E5" },
      { name: "Playwright", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },
      { name: "TestNG", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JUnit 5", src: "https://cdn.simpleicons.org/junit5" },
      { name: "Cucumber", src: "https://cdn.simpleicons.org/cucumber" },
    ],
  },
  {
    category: "API & Performance",
    skills: [
      { name: "REST Assured", src: "https://cdn.simpleicons.org/postman" },
      { name: "Postman", src: "https://cdn.simpleicons.org/postman" },
    ],
  },
  {
    category: "Languages & Tools",
    skills: [
      { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript" },
      { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript" },
      { name: "SQL", src: "https://cdn.simpleicons.org/mysql" },
    ],
  },
  {
    category: "DevOps & CI/CD",
    skills: [
      { name: "Jenkins", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "GitHub Actions", src: "https://cdn.simpleicons.org/githubactions" },
      { name: "Docker", src: "https://cdn.simpleicons.org/docker" },
      { name: "Kubernetes", src: "https://cdn.simpleicons.org/kubernetes" },
      { name: "AWS", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Maven", src: "https://cdn.simpleicons.org/apachemaven" },
    ],
  },
  {
    category: "Test Management",
    skills: [
      { name: "JIRA", src: "https://cdn.simpleicons.org/jira" },
      { name: "qTest", src: "https://cdn.simpleicons.org/tricentis" },
      { name: "Allure", src: "https://cdn.simpleicons.org/qase/A100FF" },
      { name: "ExtentReports", src: "https://cdn.simpleicons.org/testinglibrary/E33332" },
    ],
  },
  {
    category: "Methodologies",
    skills: [
      { name: "Agile", src: "https://cdn.simpleicons.org/scrumalliance" },
      { name: "Scrum", src: "https://cdn.simpleicons.org/scrumalliance" },
      { name: "TDD", src: "https://cdn.simpleicons.org/testcafe" },
      { name: "BDD", src: "https://cdn.simpleicons.org/cucumber" },
      { name: "Exploratory", src: "https://cdn.simpleicons.org/octopusdeploy" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container">
        <SectionHeading kicker="02 — Skills" title="My Tech Arsenal" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="bg-gradient-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elegant hover:border-primary/40 transition-all group"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-primary group-hover:scale-150 transition-transform" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s, i) => (
                  <span
                    key={s.name}
                    className="inline-flex items-center gap-2 pl-2 pr-3 py-1.5 text-xs font-mono rounded-full bg-secondary/80 text-foreground/85 border border-border hover:border-primary/60 hover:text-primary hover:-translate-y-0.5 transition-all duration-300 animate-float"
                    style={{
                      animationDelay: `${(gi * 0.15 + i * 0.25).toFixed(2)}s`,
                      animationDuration: `${5 + ((gi + i) % 4)}s`,
                    }}
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-background/70">
                      <img
                        src={s.src}
                        alt={`${s.name} logo`}
                        className="w-3.5 h-3.5"
                        loading="lazy"
                      />
                    </span>
                    {s.name}
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
