  "use client";

import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Typewriter from "@/components/Typewriter";

const projects = [
  {
    title: "Algorithmic Trading Bot",
    description:
      "Engineered an automated quantitative trading system utilizing an LSTM neural network. Designed dynamic ATR-based circuit breakers and 200-SMA macro regime filters.",
    tags: ["Python", "TensorFlow", "Alpaca API"],
    status: "Live Paper Trading (Peak Daily Return: +1.2%)",
    href: "https://alfin0226.github.io/algo-trade-strategy-report/",
  },
  {
    title: "MarketTracker",
    description:
      'Architected a full-stack stock simulation platform. Normalized financial data for 5,000+ tickers and engineered an asynchronous "pre-warming" mechanism to reduce server cold-start latency to zero.',
    tags: ["React", "Flask", "PostgreSQL", "Pandas"],
    href: "https://marketracker.vercel.app/",
    github: "https://github.com/Alfin0226/MarkeTracker",
  },
];



/* ── Tech Stack Data ── */
const techStack = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", status: "know" as const },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", status: "know" as const },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", status: "learning" as const },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", status: "learning" as const },
      { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", status: "learning" as const },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", status: "know" as const },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", status: "know" as const },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", status: "know" as const },
    ],
  },
  {
    category: "Backend & Data",
    items: [
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", status: "know" as const },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", status: "know" as const },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", status: "learning" as const },
    ],
  },
  {
    category: "ML & AI",
    items: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", status: "learning" as const },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", status: "learning" as const },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", status: "know" as const },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", status: "know" as const },
    ],
  },
];

/* ── Contact Cards ── */
const contactLinks = [
  {
    icon: Linkedin,
    title: "LinkedIn",
    subtitle: "Connect with me",
    href: "https://www.linkedin.com/in/alvin-lam-2b50572b8/",
  },
  {
    icon: Github,
    title: "GitHub",
    subtitle: "View my code",
    href: "https://github.com/Alfin0226",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section id="top" className="pt-24 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        >
          Alvin Lam.
        </motion.h1>

        <div className="mt-4 text-lg text-muted">
          <Typewriter
            text="Quantitative Engineering & Full-Stack Development."
            speed={35}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 mx-auto max-w-[600px] text-sm leading-relaxed text-muted"
        >
          Software Engineer and Quantitative Developer based in the UK, specializing in data analytics and predictive algorithms. I build data-driven solutions for complex financial and technological challenges.
        </motion.p>
      </section>

      {/* ── Divider ── */}
      <hr className="border-border" />

      {/* ── Tech Stack ── */}
      <Section id="tech-stack" heading="Tech Stack">
        <div className="space-y-0">
          {techStack.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: gi * 0.08 }}
              className="tech-category"
            >
              <h3 className="tech-category-title">{group.category}</h3>
              <div className="tech-grid">
                {group.items.map((tech, ti) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: gi * 0.08 + ti * 0.04 }}
                    className={`tech-item ${tech.status === "learning" ? "tech-item-learning" : ""}`}
                  >
                    {tech.status === "learning" && (
                      <span className="tech-badge">Learning</span>
                    )}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tech.icon} alt={tech.name} loading="lazy" />
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Divider ── */}
      <hr className="border-border" />

      {/* ── Projects ── */}
      <Section id="projects" heading="Projects">
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </Section>



      {/* ── Divider ── */}
      <hr className="border-border" />

      {/* ── Get in Touch ── */}
      <Section id="contact" heading="Get in Touch">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-foreground">Get in Touch.</h3>
          <p className="mt-2 text-sm text-muted">
            Have a question or want to collaborate? I&apos;d love to hear from you.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 max-w-md mx-auto">
          {contactLinks.map(({ icon: Icon, title, subtitle, href }, i) => (
            <motion.a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="contact-card"
            >
              <div className="contact-card-icon">
                <Icon className="h-6 w-6" strokeWidth={1.4} />
              </div>
              <h4 className="text-sm font-semibold text-foreground">{title}</h4>
              <p className="text-xs text-muted">{subtitle}</p>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-10 text-center">
        <p className="text-xs font-mono text-muted tracking-wide">
          © {new Date().getFullYear()} Alvin Lam — Built with Next.js &
          Tailwind CSS
        </p>
      </footer>
    </>
  );
}
