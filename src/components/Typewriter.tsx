"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function Typewriter({
  text,
  speed = 40,
  className = "",
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayedText}
      <AnimatePresence>
        {!isComplete && (
          <motion.span
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="inline-block w-[2px] h-[1em] bg-foreground ml-0.5 align-middle animate-cursor"
          />
        )}
      </AnimatePresence>
    </span>
  );
}
