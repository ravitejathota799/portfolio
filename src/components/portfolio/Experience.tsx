// import { Briefcase } from "lucide-react";
// import { SectionHeading } from "./About";

// const jobs = [
//   {
//     role: "Senior SDET",
//     company: "Finovate Systems",
//     period: "2024 — Present",
//     points: [
//       "Architected a unified UI + API automation framework using Playwright + REST Assured, reducing regression cycle from 3 days to 4 hours.",
//       "Integrated test suites with Jenkins + Docker for parallel cross-browser execution across 12 environments.",
//       "Mentored 5 QA engineers on test design patterns and CI/CD best practices.",
//     ],
//   },
//   {
//     role: "SDET",
//     company: "PayCore Technologies",
//     period: "2022 — 2024",
//     points: [
//       "Built BDD framework (Cucumber + Selenium) covering 1.2k+ scenarios for a customer-facing payments product.",
//       "Implemented contract testing using Pact — caught 30+ breaking changes before production.",
//       "Owned non-functional testing: load (JMeter), security (OWASP ZAP), accessibility (axe-core).",
//     ],
//   },
//   {
//     role: "QA Automation Engineer",
//     company: "Insight Labs",
//     period: "2021 — 2022",
//     points: [
//       "Migrated legacy manual regression suite to Selenium + TestNG, achieving 70% automation coverage.",
//       "Set up Allure reporting integrated with Slack notifications for nightly runs.",
//     ],
//   },
// ];

// const Experience = () => {
//   return (
//     <section id="experience" className="py-24 relative">
//       <div className="container">
//         <SectionHeading kicker="03 — Experience" title="Career Timeline" />

//         <div className="relative max-w-4xl mx-auto">
//           <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

//           <div className="space-y-12">
//             {jobs.map((job, i) => (
//               <div
//                 key={job.role + job.company}
//                 className={`relative flex flex-col md:flex-row gap-6 ${
//                   i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//                 }`}
//               >
//                 <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
//                   <Briefcase className="w-4 h-4 text-primary-foreground" />
//                 </div>

//                 <div className="md:w-1/2 ml-14 md:ml-0 md:px-8">
//                   <div className="bg-gradient-card border border-border rounded-2xl p-6 shadow-card hover:border-primary/40 transition-colors">
//                     <p className="font-mono text-xs text-primary mb-2">
//                       {job.period}
//                     </p>
//                     <h3 className="text-xl font-bold text-foreground">
//                       {job.role}
//                     </h3>
//                     <p className="text-accent font-medium mb-4">{job.company}</p>
//                     <ul className="space-y-2 text-sm text-muted-foreground">
//                       {job.points.map((p) => (
//                         <li key={p} className="flex gap-2">
//                           <span className="text-primary mt-1">▹</span>
//                           <span>{p}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
import { Briefcase } from "lucide-react";
import { SectionHeading } from "./About";

const jobs = [
  {
    role: "Test Automation Engineer",
    company: "Accenture",
    period: "March 2024 — Present",
    logoUrl: "https://cdn.brandfetch.io/idQMz2tvbD/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1773006617821",
    logoSvg: null,
    points: [
      "Created comprehensive test cases for National Pricing System Application, ensuring coverage of both core features and edge cases. Executed functional and automated testing to validate Business requirements and workflows.",
      "Independently built and supported robust end-to-end automation frameworks, executing test suites across Dev,UAT, and PROD environments using Selenium WebDriver,Cucumber BDD, and Java(JUNIT/TestNG).",
      "Managed UI and API regression cycles, consistently achieving ~85% pass rate in initial executions, with the remaining ~15% analyzed, debugged, and resolved locally prior to production and post production releases.",
      "Leveraged AI-driven tools such as Github Copilot to enhance test case creation, improve efficiency, and optimize overall testing processes.",
    ],
  },
  {
    role: "Programmer Analyst - Test Automation",
    company: "Cognizant",
    period: "September 2023 — March 2024",
    logoUrl: "https://cdn.brandfetch.io/idzF9a2Y93/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668075035358",
    logoSvg: null,
    points: [
      "Built BDD framework (Cucumber + Selenium) covering 1.2k+ scenarios for a customer-facing payments product.",
      "Implemented contract testing using Pact — caught 30+ breaking changes before production.",
      "Owned non-functional testing: load (JMeter), security (OWASP ZAP), accessibility (axe-core).",
    ],
  }
];

const CompanyLogo = ({
  logoUrl,
  logoSvg,
  company,
}: {
  logoUrl: string | null;
  logoSvg: string | null;
  company: string;
}) => {
  if (logoSvg) {
    return (
      <span
        dangerouslySetInnerHTML={{ __html: logoSvg }}
        style={{ display: "flex", alignItems: "center" }}
      />
    );
  }
  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt={`${company} logo`}
        style={{ maxHeight: 24, maxWidth: 100, objectFit: "contain" }}
      />
    );
  }
  return <span className="text-xs font-semibold text-muted-foreground">{company}</span>;
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container">
        <SectionHeading kicker="03 — Experience" title="Career Timeline" />
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />
          <div className="space-y-12">
            {jobs.map((job, i) => (
              <div
                key={job.role + job.company}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Briefcase className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="md:w-1/2 ml-14 md:ml-0 md:px-8">
                  <div className="bg-gradient-card border border-border rounded-2xl p-6 shadow-card hover:border-primary/40 transition-colors">

                    {/* Logo + period row */}
                    <div className="flex items-center justify-between mb-3">
                      <CompanyLogo
                        logoUrl={job.logoUrl}
                        logoSvg={job.logoSvg}
                        company={job.company}
                      />
                      <p className="font-mono text-xs text-primary">{job.period}</p>
                    </div>

                    <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                    <p className="text-accent font-medium mb-4">{job.company}</p>

                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {job.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;