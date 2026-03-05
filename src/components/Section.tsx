"use client";

import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  heading?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function Section({
  id,
  heading,
  children,
  className = "",
  delay = 0,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`py-16 ${className}`}
    >
      {heading && <h2 className="section-heading">{heading}</h2>}
      {children}
    </motion.section>
  );
}
