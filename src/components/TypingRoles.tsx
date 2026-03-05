'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const roles = ["Full Stack Dev", "Software Engineer", "AI Speaker"];

export default function TypingRoles() {
  const [index, setIndex] = useState(0); // Which word are we on?
  const [displayText, setDisplayText] = useState(""); // What is currently typed?
  const [isDeleting, setIsDeleting] = useState(false); // Are we deleting or typing?

  useEffect(() => {
    const currentFullText = roles[index] || "";

    const speed = isDeleting ? 75 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentFullText) {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
          if (displayText === currentFullText) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <div className="h-12 flex items-center gap-1">
      <span className="text-2xl md:text-3xl font-bold text-slate-300">
        {displayText}
      </span>

      {/* The Blinking Cursor */}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block w-[3px] h-8 bg-blue-500 align-middle"
      />
    </div>
  );
}