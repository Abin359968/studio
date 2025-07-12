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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { generateImage } from "@/ai/flows/generate-image-flow";

const projects = [
  {
    title: "VR Industrial Safety Simulation",
    description:
      "A high-fidelity virtual reality simulation for training heavy machinery operators in hazardous environments, significantly reducing workplace accidents.",
    imagePrompt: "A futuristic VR training simulation showing a factory worker learning to handle a fire emergency. The scene should be realistic with visible UI elements of the VR interface, displaying safety alerts and instructions. The environment should be a clean, modern industrial setting.",
    tags: ["Unity", "VR", "Oculus SDK", "Training"],
    liveUrl: "#",
  },
  {
    title: "AR Building Simulation",
    description:
      "An augmented reality application for architects and construction professionals to visualize and interact with 3D building models on-site, improving planning and reducing errors.",
    imagePrompt: "An augmented reality view on a tablet showing a 3D architectural model of a modern skyscraper overlaid onto a real-world construction site. The UI should be clean, showing measurements and material information.",
    tags: ["Unity", "ZapWorks", "ARCore", "ARKit", "Vuforia"],
    liveUrl: "#",
  },
  {
    title: "Tripple Chance Casino Game",
    description:
      "A vibrant and engaging casino wheel game with unique 'Tripple Chance' mechanics, multiple bonus rounds, and captivating visual effects to maximize player retention.",
    imagePrompt: "A colorful and flashy casino prize wheel game interface on a screen. The theme is 'Triple Chance' with vibrant gems and gold coins. The wheel is spinning, and bonus icons are visible.",
    tags: ["Unity", "2D", "Mobile", "C#", "UI/UX"],
    liveUrl: "#",
  },
  {
    title: "Snow Escape",
    description:
      "An endless runner mobile game where players navigate a treacherous snowy mountain, avoiding obstacles and collecting power-ups. Features responsive controls and dynamic difficulty.",
    imagePrompt: "A dynamic endless runner game screen on a mobile phone. The character is skiing down a snowy mountain, dodging pine trees and rocks. The art style is stylized and vibrant, with a clear user interface showing the score and power-ups.",
    tags: ["Unity", "3D", "Mobile", "C#", "Endless Runner"],
    liveUrl: "#",
  },
];


function ProjectImage({ project }: { project: (typeof projects)[0] }) {
  const [imageUrl, setImageUrl] = React.useState(project.image);
  const [loading, setLoading] = React.useState(!project.image);

  React.useEffect(() => {
    if (project.imagePrompt && !project.image) {
      generateImage({ prompt: project.imagePrompt })
        .then((response) => {
          if (response.imageUrl) {
            setImageUrl(response.imageUrl);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [project.imagePrompt, project.image]);

  return (
    <div className="aspect-video overflow-hidden rounded-lg border">
      {loading ? (
        <div className="w-full h-full bg-muted animate-pulse" />
      ) : (
        <Image
          src={imageUrl || "https://placehold.co/600x400.png"}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={project.imageHint || project.imagePrompt}
        />
      )}
    </div>
  );
}

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
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-primary/40 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <CardTitle className="font-headline text-2xl">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col gap-4">
                <ProjectImage project={project} />
                <CardDescription className="flex-grow">
                  {project.description}
                </CardDescription>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
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
          ))}
        </div>
      </div>
    </section>
  );
}
