"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Notes", href: "#notes" },
  { label: "Resume", href: "/resume" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-content items-center justify-between px-6">
        <Link
          href="/"
          className="font-semibold text-sm tracking-tight text-foreground hover:text-muted transition-colors"
        >
          AL
        </Link>

        <ul className="flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "text-xs font-mono tracking-wide transition-colors hover:text-foreground",
                  pathname === href ? "text-foreground" : "text-muted"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
