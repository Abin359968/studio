"use client";

import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";

export default function Hero() {
  const name = "Abin C.";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent<HTMLDivElement>) => {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.section 
      id="home"
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full bg-background -z-20" />
      <div className="vr-box">
        <div className="vr-box-content">
          <div className="vr-plane floor"></div>
          <div className="vr-plane ceiling"></div>
        </div>
      </div>
       <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ 
          background: useMotionTemplate`
            radial-gradient(
              circle at ${mouseX}px ${mouseY}px,
              hsl(var(--primary) / 0.15),
              transparent 40%
            )
          `
        }}
      />
      
      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl font-medium text-primary font-headline"
          >
            Hi, I'm{" "}
            <span className="inline-block">
              {name.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6, type: "spring", stiffness: 100 }}
            className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60"
          >
            Game Developer
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="max-w-[700px] text-muted-foreground md:text-xl"
          >
            Crafting immersive and innovative 2D, 3D, AR & VR experiences from
            concept to reality.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 pt-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                variant="default"
                className="shadow-lg shadow-primary/30"
              >
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" variant="outline">
                <a href="/resume.pdf" download="Abin_C_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
