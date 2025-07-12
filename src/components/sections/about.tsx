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
              I am a dynamic and self-motivated Game Developer with a profound
              passion for leveraging cutting-edge technologies to bring creative
              visions to life. As a quick learner with strong critical-thinking
              abilities, I thrive on mastering new concepts and pushing the
              boundaries of digital interaction.
            </p>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My journey in game development is driven by a desire to create
              unforgettable experiences. I specialize in the Unity engine for
              both 2D and 3D games, and I have a deep expertise in creating
              immersive AR and VR applications. From conceptualization to
              deployment, I am dedicated to delivering polished, innovative, and
              deeply engaging solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
