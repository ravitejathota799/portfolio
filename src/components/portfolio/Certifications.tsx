// import { Award } from "lucide-react";
// import { SectionHeading } from "./About";

// const certs = [
//   { name: "ISTQB Advanced — Test Automation Engineer", issuer: "ISTQB", year: "2024" },
//   { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
//   { name: "Certified Selenium Professional", issuer: "Selenium Academy", year: "2023" },
//   { name: "Postman API Test Automation", issuer: "Postman", year: "2023" },
//   { name: "Docker Certified Associate", issuer: "Docker Inc.", year: "2023" },
//   { name: "Agile Tester Foundation", issuer: "ICAgile", year: "2022" },
//   { name: "Neo4J Certified Professional", issuer: "Neo4J", year: "2022" },
// ];

// const Certifications = () => (
//   <section id="certifications" className="py-24 relative bg-secondary/20">
//     <div className="container">
//       <SectionHeading kicker="04 — Certifications" title="Credentials" />

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//         {certs.map((c) => (
//           <div
//             key={c.name}
//             className="group relative bg-gradient-card border border-border rounded-2xl p-6 shadow-card hover:border-primary/40 transition-all overflow-hidden"
//           >
//             <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity" />
//             <Award className="w-9 h-9 text-primary mb-3" />
//             <h3 className="font-semibold text-foreground leading-snug mb-2">
//               {c.name}
//             </h3>
//             <div className="flex items-center justify-between text-xs">
//               <span className="text-muted-foreground">{c.issuer}</span>
//               <span className="font-mono text-accent">{c.year}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Certifications;
import { Award } from "lucide-react";
import { SectionHeading } from "./About";

const LogoBox = ({ children }: { children: React.ReactNode }) => (
  <div
    className="flex items-center justify-center rounded-lg border border-border/30"
    style={{ width: 88, height: 36, padding: "0 10px" }}
  >
    {children}
  </div>
);

const certs = [
  {
    name: "GitHub Copilot",
    issuer: "Microsoft",
    year: "2026",
    logoUrl: "https://cdn.brandfetch.io/idchmboHEZ/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1727706673120",
    logoSvg: null,
  },
  {
    name: "AWS Academy Graduate - AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services",
    year: "2024",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    logoSvg: null,
  },
  {
    name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    year: "2024",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    logoSvg: null,
  },
  {
    name: "Neo4J Certified Professional",
    issuer: "Neo4J",
    year: "2022",
    logoUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/neo4j.svg",
    logoSvg: null,
  },
];

const CertLogo = ({
  logoUrl,
  logoSvg,
  issuer,
}: {
  logoUrl: string | null;
  logoSvg: string | null;
  issuer: string;
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
        alt={`${issuer} logo`}
        style={{ maxHeight: 22, maxWidth: 68, objectFit: "contain" }}
      />
    );
  }
  return <span className="text-xs font-semibold text-muted-foreground">{issuer}</span>;
};

const Certifications = () => (
  <section id="certifications" className="py-24 relative bg-secondary/20">
    <div className="container">
      <SectionHeading kicker="04 — Certifications" title="Credentials" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c) => (
          <div
            key={c.name}
            className="group relative bg-gradient-card border border-border rounded-2xl p-6 shadow-card hover:border-primary/40 transition-all overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity" />

            <div className="flex items-center justify-between mb-4">
              <LogoBox>
                <CertLogo
                  logoUrl={c.logoUrl}
                  logoSvg={c.logoSvg}
                  issuer={c.issuer}
                />
              </LogoBox>
              <Award className="w-5 h-5 text-primary opacity-50" />
            </div>

            <h3 className="font-semibold text-foreground leading-snug mb-2">
              {c.name}
            </h3>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{c.issuer}</span>
              <span className="font-mono text-accent">{c.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;