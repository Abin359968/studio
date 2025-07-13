"use client";

import { useRef, useLayoutEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

export default function useParallax(ref: React.RefObject<HTMLElement>, offset = 20) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 50, stiffness: 400 });

  const y = useTransform(smoothProgress, [0, 1], [-offset, offset]);

  return { y };
}
