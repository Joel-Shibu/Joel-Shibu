"use client";

import { motion, useInView, useAnimation } from "motion/react";
import { useRef, useEffect, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export function TypingAnimation({
  text,
  duration = 50,
  delay = 0,
  className,
  ...props
}: TypingAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      const chars = text.split("");
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i * duration) / 1000 + delay / 1000 },
      }));
    }
  }, [isInView, text, duration, delay, controls]);

  return (
    <span ref={ref} className={cn("inline-block", className)} {...props}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={controls}
          custom={i}
          className={cn("inline-block")}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}