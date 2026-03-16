"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import alpacaIcon from "../../../public/alpaca_icon_1772756953271.png";

/* Map tag names to devicon URLs */
const tagIcons: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  TensorFlow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "Alpaca API": alpacaIcon.src,
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
};

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  status?: string;
  href?: string;
  github?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  status,
  href,
  github,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="h-full"
    >
      <Card className="h-full transition-all duration-300 hover:border-border-hover hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-foreground">{title}</CardTitle>
            {/* Links */}
            <div className="flex items-center gap-2 shrink-0">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source on GitHub"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" strokeWidth={1.6} />
                </a>
              )}
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View live demo"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-4 w-4" strokeWidth={1.6} />
                </a>
              )}
            </div>
          </div>
          {status && (
            <Badge variant="status" className="w-fit mt-2">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {status}
            </Badge>
          )}
        </CardHeader>

        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>

        <CardFooter className="flex-wrap gap-3">
          {tags.map((tag) => {
            const iconUrl = tagIcons[tag];
            return (
              <span
                key={tag}
                className="flex items-center gap-1.5"
                title={tag}
              >
                {iconUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={iconUrl}
                    alt={tag}
                    className="h-5 w-5 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <Badge variant="tag">[{tag}]</Badge>
                )}
              </span>
            );
          })}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
