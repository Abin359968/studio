"use client";

import { Building, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";


const experiences = [
  {
    role: "Unity Game Developer",
    company: "Malger Entertainments",
    period: "May 2025 - Present",
    description: "Currently working with AR/VR tools on innovative projects, including the AR Building Simulation and VR Industrial Safety applications, to create immersive and practical solutions.",
    isCurrent: true
  },
  {
    role: "Unity Game Developer",
    company: "Emergio Games",
    period: "Mar 2024 - May 2025",
    description: "Built and delivered interactive casino games, including the successful 'Triple Chance' title. Focused on creating engaging gameplay mechanics and polished user experiences for various casino projects.",
    isCurrent: false
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}


export default function Experience() {
  return (
    <motion.section 
      id="experience" 
      className="w-full py-20 md:py-32 bg-background overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            Work Experience
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My professional journey as a game developer.
          </p>
        </motion.div>
        <div className="relative max-w-3xl mx-auto">
          <motion.div 
            className="absolute left-6 h-full w-0.5 bg-border/40 top-2"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            style={{ originY: 0 }}
          />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex gap-8"
                variants={itemVariants}
              >
                 <div className="absolute left-0 top-1.5 z-10">
                    <motion.div 
                      className="bg-primary rounded-full p-2.5 border-4 border-background"
                      whileHover={{ scale: 1.1 }}
                    >
                        <Briefcase className="h-7 w-7 text-primary-foreground" />
                    </motion.div>
                </div>
                <div className="pl-16 w-full">
                     <Card className="text-left transition-shadow duration-300 hover:shadow-primary/20 hover:shadow-lg">
                       <CardHeader>
                         <div className="flex items-center justify-between">
                            <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                            {exp.isCurrent && <Badge>Current</Badge>}
                         </div>
                         <div className="flex items-center gap-2 text-muted-foreground text-sm">
                           <Building className="h-4 w-4" />
                           <span>{exp.company}</span>
                         </div>
                         <p className="text-sm font-medium text-primary pt-2">{exp.period}</p>
                       </CardHeader>
                       <CardContent>
                         <p className="text-muted-foreground">{exp.description}</p>
                       </CardContent>
                     </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
