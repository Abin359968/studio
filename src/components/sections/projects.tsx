import Image from "next/image";
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
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Project Alpha",
    description: "An immersive 3D open-world adventure game built with Unity.",
    image: "https://placehold.co/600x400.png",
    imageHint: "fantasy game",
    tags: ["Unity", "3D", "C#"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AR Experience",
    description: "An augmented reality application for interactive product visualization.",
    image: "https://placehold.co/600x400.png",
    imageHint: "sci-fi interface",
    tags: ["Unity", "AR", "Mobile"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "VR Simulation",
    description: "A virtual reality training simulation for complex industrial tasks.",
    image: "https://placehold.co/600x400.png",
    imageHint: "virtual reality",
    tags: ["Unity", "VR", "Oculus"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "2D Platformer",
    description: "A classic 2D platformer with modern mechanics and pixel art style.",
    image: "https://placehold.co/600x400.png",
    imageHint: "mobile game",
    tags: ["Unity", "2D", "Mobile"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            My Projects
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of my work in game and interactive media development.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden group">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="aspect-video overflow-hidden rounded-lg border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex justify-end w-full gap-2">
                    <Button variant="outline" asChild>
                        <Link href={project.githubUrl} target="_blank">
                            <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" /> Demo
                        </Link>
                    </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
