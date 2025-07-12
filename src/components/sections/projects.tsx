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

const projects = [
  {
    title: "Project Alpha: The Lost Kingdom",
    description:
      "An immersive 3D open-world adventure where players explore ancient ruins and battle mythical creatures. Features a dynamic weather system and advanced enemy AI.",
    image: "https://placehold.co/600x400.png",
    imageHint: "fantasy game",
    tags: ["Unity", "3D", "C#", "Photon", "World-Building"],
    liveUrl: "#",
  },
  {
    title: "AR-Retail Experience",
    description:
      "An augmented reality application for a leading furniture brand that allows users to visualize products in their own space before buying, boosting sales conversion by 30%.",
    image: "https://placehold.co/600x400.png",
    imageHint: "sci-fi interface",
    tags: ["Unity", "ARCore", "Vuforia", "Mobile"],
    liveUrl: "#",
  },
  {
    title: "VR Industrial Safety Simulation",
    description:
      "A high-fidelity virtual reality simulation for training heavy machinery operators in hazardous environments, significantly reducing workplace accidents.",
    image: "https://placehold.co/600x400.png",
    imageHint: "virtual reality",
    tags: ["Unity", "VR", "Oculus SDK", "Training"],
    liveUrl: "#",
  },
  {
    title: "Pixel Raiders",
    description:
      "A fast-paced 2D platformer with procedurally generated levels, modern combat mechanics, and a charming retro pixel art style. Optimized for mobile and desktop.",
    image: "https://placehold.co/600x400.png",
    imageHint: "mobile game",
    tags: ["Unity", "2D", "Mobile", "C#", "Pixel Art"],
    liveUrl: "#",
  },
];

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
