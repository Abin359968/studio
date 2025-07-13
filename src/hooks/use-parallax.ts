"use client";

import { useLayoutEffect, useRef } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

export default function useParallax(ref: React.RefObject<HTMLElement>, offset = 50) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    damping: 50, 
    stiffness: 300,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], [-offset, offset]);

  return { y };
}
