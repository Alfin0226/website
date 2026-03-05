"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  status?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  status,
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

        <CardFooter className="flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="tag">
              [{tag}]
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
