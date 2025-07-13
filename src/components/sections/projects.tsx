"use client";

import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import useParallax from "@/hooks/use-parallax";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "VR Fire and Safety Simulation",
    description:
      "A high-fidelity virtual reality simulation for training employees in fire safety procedures and emergency response in industrial environments, significantly improving workplace safety.",
    tags: ["Unity", "VR", "Oculus SDK", "Training"],
    liveUrl: "#",
    imageHint: "virtual reality fire safety",
    staticImageUrl: "/Fire.png",
  },
  {
    title: "AR Building Simulation",
    description:
      "An AR application that scans a notice and then shows a preview building model on the notice. It's useful to know about the building without visiting the site.",
    tags: ["Unity", "ARCore", "ARKit"],
    liveUrl: "#",
    imageHint: "augmented reality architecture",
    staticImageUrl: "/Ar_Building.jpg",
  },
  {
    title: "Tripple Chance Casino Game",
    description:
      "A vibrant and engaging casino wheel game with unique 'Tripple Chance' mechanics, multiple bonus rounds, and captivating visual effects to maximize player retention.",
    tags: ["Unity", "2D", "Mobile", "C#", "UI/UX"],
    liveUrl: "#",
    imageHint: "casino game wheel",
    staticImageUrl: "/Third.jpg",
  },
  {
    title: "New VR Game (Coming Soon)",
    description:
      "An exciting new virtual reality game currently in development. Stay tuned for more details on this upcoming immersive experience.",
    tags: ["Unity", "VR", "Development"],
    liveUrl: "#",
    imageHint: "virtual reality gaming",
    staticImageUrl: "/VrGame.png",
  },
];

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

const ProjectCard = ({ project }: { project: (typeof projectsData)[0] }) => {
  const imageUrl = project.staticImageUrl;
  const isLoading = !imageUrl;
  const ref = React.useRef<HTMLDivElement>(null);
  const { y } = useParallax(ref, -20);

  return (
    <motion.div ref={ref} variants={cardVariants}>
      <Card
        className={cn(
          "flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-primary/40 hover:shadow-2xl h-full"
        )}
      >
        <motion.div style={{ y }} className="aspect-video overflow-hidden">
          {isLoading ? (
            <Skeleton className="w-full h-full" />
          ) : (
            <Image
              src={imageUrl || "https://placehold.co/600x400.png"}
              alt={project.title}
              width={600}
              height={400}
              data-ai-hint={project.imageHint}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          )}
        </motion.div>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col gap-4">
          <CardDescription className="flex-grow">{project.description}</CardDescription>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
        </CardFooter>
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


export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="w-full py-20 md:py-32 bg-secondary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          variants={{
            hidden: { y: -20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
          }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            My Projects
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of my work in game and interactive media development.
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.title} 
              project={project as any} 
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
