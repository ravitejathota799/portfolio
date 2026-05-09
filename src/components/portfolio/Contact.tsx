import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { SectionHeading } from "./About";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container max-w-5xl">
        <SectionHeading kicker="07 — Contact" title="Let's Build Something" center />

        <div className="max-w-2xl mx-auto space-y-6 text-center">
          <p className="text-muted-foreground leading-relaxed">
            Have a product that needs bulletproof testing? I'm open to
            full-time roles, contracts, and consulting engagements. Let's chat.
          </p>

          <div className="space-y-4 flex flex-col items-center">
            <ContactItem icon={Mail} label="ravitejathota799@gmail.com" />
            <ContactItem icon={MapPin} label="Hyderabad, India · Remote OK" />
          </div>

          <div className="flex justify-center gap-3 pt-2">
            {[
              { icon: Github, href: "https://github.com/ravitejathota799" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/thota-ravi-teja-05997b212/",
              },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="container mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Thota Ravi Teja Built with{" "}
          <span className="text-primary">React</span> &amp;{" "}
          <span className="text-accent">Tailwind</span>
        </p>
      </footer>
    </section>
  );
};

const ContactItem = ({
  icon: Icon,
  label,
}: {
  icon: typeof Mail;
  label: string;
}) => (
  <div className="flex items-center gap-3 text-sm">
    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-primary">
      <Icon size={16} />
    </div>
    <span className="text-foreground/90">{label}</span>
  </div>
);

export default Contact;