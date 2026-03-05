"use client";

import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
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
  },
  {
    title: "MarketTracker",
    description:
      'Architected a full-stack stock simulation platform. Normalized financial data for 5,000+ tickers and engineered an asynchronous "pre-warming" mechanism to reduce server cold-start latency to zero.',
    tags: ["React", "Flask", "PostgreSQL", "Pandas"],
  },
];

const achievements = [
  "British Informatics Olympiad 2025: Scored 34 points (nearly 50% year-on-year growth).",
  "Economics Olympiad 2025: Scored 64% in the International Final Round.",
  "The Marketing Store (Internship): Quantitative Analyst Intern for MCD Happy Meal Engineering Team.",
];

const socials = [
  {
    icon: Github,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:hello@example.com",
    label: "Email",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section id="about" className="pt-24 pb-16">
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
          className="mt-6 max-w-[600px] text-sm leading-relaxed text-muted"
        >
          Aspiring software engineer based in the UK. Predicted 4 A*s in Maths,
          Further Maths, Physics, and Computer Science. I specialize in building
          high-availability systems, predictive algorithms, and solving
          real-world financial constraints.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex items-center gap-5"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
            >
              <Icon className="h-4 w-4" strokeWidth={1.5} />
              <span className="text-xs font-mono tracking-wide">{label}</span>
              <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-[-2px] transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
            </a>
          ))}
        </motion.div>
      </section>

      {/* ── Divider ── */}
      <hr className="border-border" />

      {/* ── Projects ── */}
      <Section id="projects" heading="Selected Projects">
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </Section>

      {/* ── Divider ── */}
      <hr className="border-border" />

      {/* ── Achievements ── */}
      <Section id="notes" heading="Achievements">
        <ul className="space-y-4 border-l-2 border-border pl-6">
          {achievements.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-sm leading-relaxed text-muted"
            >
              {item}
            </motion.li>
          ))}
        </ul>
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
