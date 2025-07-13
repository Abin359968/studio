import { GraduationCap, BarChart, Trophy } from "lucide-react";
import Observer from "@/components/lib/observer";

const stats = [
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    value: "1+",
    label: "Years Experience",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    value: "10+",
    label: "Projects Completed",
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    label: "High Impact Solutions",
    description: "Delivering polished, innovative, and engaging products.",
  },
];


export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Observer animation="fade-in-right" className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
              About Me
            </h2>
            <p className="text-muted-foreground md:text-lg">
              I am a dynamic and self-motivated Game Developer with a profound
              passion for leveraging cutting-edge technologies to bring creative
              visions to life. As a quick learner with strong critical-thinking
              abilities, I thrive on mastering new concepts and pushing the
              boundaries of digital interaction. My journey is not just about writing code; it&apos;s about architecting entire worlds and interactive stories.
            </p>
            <p className="text-muted-foreground md:text-lg">
              My journey in game development is driven by a desire to create
              unforgettable experiences. I specialize in the Unity engine for
              both 2D and 3D games, and I have a deep expertise in creating
              immersive AR and VR applications. From conceptualization and prototyping to optimization and
              deployment, I am dedicated to delivering polished, innovative, and
              deeply engaging solutions that resonate with players.
            </p>
          </Observer>
          <div className="flex flex-col gap-8">
            {stats.map((stat, index) => (
              <Observer
                key={index}
                animation="fade-in-left"
                className="flex items-start gap-6"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-primary/10 p-4 rounded-full">
                  {stat.icon}
                </div>
                <div>
                  {stat.value && (
                    <p className="text-4xl font-bold font-headline">{stat.value}</p>
                  )}
                  <p className="text-lg font-semibold">{stat.label}</p>
                   {stat.description && (
                     <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
                   )}
                </div>
              </Observer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
