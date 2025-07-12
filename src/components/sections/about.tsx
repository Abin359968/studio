import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center items-center animate-fade-in-right">
            <Card className="overflow-hidden shadow-lg shadow-primary/20">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/500x500.png"
                  alt="Abin C"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint="portrait developer"
                />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6 animate-fade-in-left animation-delay-200">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
              About Me
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Dynamic and self-motivated Game Developer with a passion for
              utilizing cutting-edge technologies to solve digital challenges. A
              quick learner with strong critical thinking abilities, adept at
              mastering new concepts independently.
            </p>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Specializing in Unity development for 2D and 3D games, with
              expertise in AR and VR technologies. Dedicated to delivering
              innovative solutions and immersive experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
