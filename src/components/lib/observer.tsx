"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface ObserverProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  threshold?: number;
  triggerOnce?: boolean;
  animation?: "fade-in-up" | "fade-in-right" | "fade-in-left";
}

const Observer = ({
  children,
  className,
  threshold = 0.1,
  triggerOnce = true,
  animation = "fade-in-up",
  ...props
}: ObserverProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && ref.current) {
              observer.unobserve(ref.current);
            }
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce]);

  const animationClasses = {
    "fade-in-up": "animate-fade-in-up",
    "fade-in-right": "animate-fade-in-right",
    "fade-in-left": "animate-fade-in-left",
  };
  
  const appliedAnimation = isVisible ? animationClasses[animation] : 'opacity-0';

  return (
    <div ref={ref} className={cn(appliedAnimation, className)} {...props}>
      {children}
    </div>
  );
};

export default Observer;
