import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 grid-cols-1">
          <div className="space-y-6 animate-fade-in-up text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
              About Me
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am a dynamic and self-motivated Game Developer with a profound
              passion for leveraging cutting-edge technologies to bring creative
              visions to life. As a quick learner with strong critical-thinking
              abilities, I thrive on mastering new concepts and pushing the
              boundaries of digital interaction. My journey is not just about writing code; it's about architecting entire worlds and interactive stories.
            </p>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My journey in game development is driven by a desire to create
              unforgettable experiences. I specialize in the Unity engine for
              both 2D and 3D games, and I have a deep expertise in creating
              immersive AR and VR applications. From conceptualization and prototyping to optimization and
              deployment, I am dedicated to delivering polished, innovative, and
              deeply engaging solutions that resonate with players.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
