"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projectsData = [
  {
    title: "VR Fire and Safety Simulation",
    description:
      "A high-fidelity virtual reality simulation for training employees in fire safety procedures and emergency response in industrial environments, significantly improving workplace safety.",
    tags: ["Unity", "VR", "Oculus SDK", "Training"],
    liveUrl: "#",
  },
  {
    title: "AR Building Simulation",
    description:
      "An augmented reality application for architects and construction professionals to visualize and interact with 3D building models on-site, improving planning and reducing errors.",
    tags: ["Unity", "ZapWorks", "ARCore", "ARKit", "Vuforia"],
    liveUrl: "#",
  },
  {
    title: "Tripple Chance Casino Game",
    description:
      "A vibrant and engaging casino wheel game with unique 'Tripple Chance' mechanics, multiple bonus rounds, and captivating visual effects to maximize player retention.",
    tags: ["Unity", "2D", "Mobile", "C#", "UI/UX"],
    liveUrl: "#",
  },
  {
    title: "Snow Escape",
    description:
      "An endless runner mobile game where players navigate a treacherous snowy mountain, avoiding obstacles and collecting power-ups. Features responsive controls and dynamic difficulty.",
    tags: ["Unity", "3D", "Mobile", "C#", "Endless Runner"],
    liveUrl: "#",
  },
];

const ProjectCard = ({ project, index }: { project: { title: string; description: string; tags: string[], liveUrl: string }, index: number }) => {
  return (
    <Card
      className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-primary/40 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
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
        <div className="flex justify-end w-full gap-2">
          <Button asChild>
            <Link href={project.liveUrl} target="_blank">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </Link>
          </Button>
        </div>
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
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
