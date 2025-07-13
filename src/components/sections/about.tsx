"use client";

import { GraduationCap, BarChart, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    value: "1+",
    label: "Years Experience",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    value: "10+",
    label: "Projects Completed",
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    label: "High Impact Solutions",
    description: "Delivering polished, innovative, and engaging products.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <motion.section 
      id="about" 
      className="w-full py-20 md:py-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary"
            >
              About Me
            </motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground md:text-lg">
              I am a dynamic and self-motivated Game Developer with a profound
              passion for leveraging cutting-edge technologies to bring creative
              visions to life. As a quick learner with strong critical-thinking
              abilities, I thrive on mastering new concepts and pushing the
              boundaries of digital interaction. My journey is not just about writing code; it&apos;s about architecting entire worlds and interactive stories.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground md:text-lg">
              My journey in game development is driven by a desire to create
              unforgettable experiences. I specialize in the Unity engine for
              both 2D and 3D games, and I have a deep expertise in creating
              immersive AR and VR applications. From conceptualization and prototyping to optimization and
              deployment, I am dedicated to delivering polished, innovative, and
              deeply engaging solutions that resonate with players.
            </motion.p>
          </div>
          <motion.div 
            className="flex flex-col gap-8"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6"
                variants={itemVariants}
              >
                <div className="bg-primary/10 p-4 rounded-full">
                  {stat.icon}
                </div>
                <div>
                  {stat.value && (
                    <p className="text-4xl font-bold font-headline">{stat.value}</p>
                  )}
                  <p className="text-lg font-semibold">{stat.label}</p>
                   {stat.description && (
                     <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
                   )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
