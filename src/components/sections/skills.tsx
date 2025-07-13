"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, View, Code, BrainCircuit } from "lucide-react";
import useParallax from "@/hooks/use-parallax";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Game Development",
    icon: <Gamepad2 className="h-8 w-8 text-primary" />,
    skills: ["Unity Engine (2D/3D)", "C# Scripting", "Gameplay Systems", "Physics & Shaders", "UI/UX Design", "Optimization"]
  },
  {
    title: "AR/VR Technologies",
    icon: <View className="h-8 w-8 text-primary" />,
    skills: ["ARCore & ARKit", "Vuforia", "Oculus SDK (Meta Quest)", "SteamVR", "Interaction Design", "Immersive Experiences"]
  },
  {
    title: "Core Technologies",
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ["Version Control (Git)", "Agile Methodologies", "Photon Networking", "REST APIs", "Mobile Deployment"]
  },
  {
    title: "Emerging Tech",
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    skills: ["Generative AI", "Procedural Generation", "Intelligent NPCs", "Machine Learning Concepts"]
  }
]

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const SkillCard = ({ category }: { category: (typeof skillCategories)[0] }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { y } = useParallax(ref, -15);

  return (
    <motion.div ref={ref} variants={cardVariants}>
      <Card style={{y}} className="p-6 transition-all duration-300 hover:bg-card/80 hover:shadow-primary/20 hover:shadow-lg h-full">
        <CardHeader className="flex flex-row items-center gap-4 p-0 pb-4">
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }} 
            className="bg-primary/10 p-3 rounded-lg"
          >
              {category.icon}
          </motion.div>
          <CardTitle className="text-2xl font-headline">{category.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-muted-foreground">
            {category.skills.map(skill => (
              <li key={skill} className="flex items-center gap-2">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                    className="h-1.5 w-1.5 rounded-full bg-primary" 
                  />
                  <span>{skill}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};


export default function Skills() {
  return (
    <motion.section 
      id="skills" 
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          variants={{
            hidden: { y: -20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
          }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            My Expertise
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A versatile skill set for creating modern, immersive digital experiences. I combine technical proficiency with a creative vision to build the next generation of interactive entertainment.
          </p>
        </motion.div>
        <motion.div 
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2"
          variants={containerVariants}
        >
          {skillCategories.map((category) => (
             <SkillCard key={category.title} category={category} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
