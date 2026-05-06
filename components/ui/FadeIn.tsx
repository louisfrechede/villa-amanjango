"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type FadeInProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "header" | "footer";
};

const offsetFor = (direction: Direction) => {
  switch (direction) {
    case "up":
      return { x: 0, y: 32 };
    case "down":
      return { x: 0, y: -32 };
    case "left":
      return { x: 32, y: 0 };
    case "right":
      return { x: -32, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
};

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className,
  as = "div",
}: FadeInProps) {
  const reduce = useReducedMotion();
  const offset = reduce ? { x: 0, y: 0 } : offsetFor(direction);

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduce ? 0 : duration,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const Comp = motion[as];

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </Comp>
  );
}
