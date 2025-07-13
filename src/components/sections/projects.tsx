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
import { Bot } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

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

const ProjectCard = ({ project, className, index }: { project: (typeof projectsData)[0], className?: string, index: number }) => {
  const imageUrl = project.staticImageUrl;
  const isLoading = !imageUrl;

  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-primary/40 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="aspect-video overflow-hidden">
        {isLoading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <Image
            src={imageUrl || "https://placehold.co/600x400.png"}
            alt={project.title}
            width={600}
            height={400}
            data-ai-hint={project.imageHint}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
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
  );
};


export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            My Projects
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of my work in game and interactive media development.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project as any} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
