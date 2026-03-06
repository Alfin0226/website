"use client";

import { Github, Linkedin, Home, Sun, Moon, Code, Briefcase, Award, MessageCircle } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const sections = [
  { icon: Home, href: "#top", label: "Home" },
  { icon: Code, href: "#tech-stack", label: "Tech Stack" },
  { icon: Briefcase, href: "#projects", label: "Projects" },
  { icon: MessageCircle, href: "#contact", label: "Contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#top") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <div className="bottom-bar">
        {/* Section Links */}
        {sections.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            onClick={(e) => handleClick(e, href)}
            aria-label={label}
            className="bottom-bar-item"
            title={label}
          >
            <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
          </a>
        ))}

        {/* Divider */}
        <div className="bottom-bar-divider" />

        {/* Social Links */}
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="bottom-bar-item"
            title={label}
          >
            <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
          </a>
        ))}

        {/* Divider */}
        <div className="bottom-bar-divider" />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="bottom-bar-item"
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <Sun className="h-[18px] w-[18px]" strokeWidth={1.6} />
          ) : (
            <Moon className="h-[18px] w-[18px]" strokeWidth={1.6} />
          )}
        </button>
      </div>
    </nav>
  );
}
