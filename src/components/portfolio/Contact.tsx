import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./About";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container max-w-5xl">
        <SectionHeading kicker="07 — Contact" title="Let's Build Something" center />

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Have a product that needs bulletproof testing? I'm open to
              full-time roles, contracts, and consulting engagements. Let's chat.
            </p>

            <div className="space-y-4">
              <ContactItem icon={Mail} label="ravitejathota799@gmail.com" />
              <ContactItem icon={MapPin} label="Hyderabad, India · Remote OK" />
            </div>

            <div className="flex gap-3 pt-2">
              {[
                { icon: Github, href: "https://github.com/ravitejathota799" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/thota-ravi-teja-05997b212/" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-gradient-card border border-border rounded-2xl p-7 shadow-card space-y-4"
          >
            <Field
              label="Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="Jane Doe"
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              placeholder="jane@company.com"
            />
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] active:scale-100 transition-transform disabled:opacity-60"
            >
              <Send size={18} /> {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
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

const Field = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) => (
  <div>
    <label className="block text-xs font-mono text-muted-foreground mb-2">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-colors"
    />
  </div>
);

export default Contact;
