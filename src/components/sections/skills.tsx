import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, CodeXml, Camera, Gamepad2, MonitorSmartphone, Bot } from "lucide-react";

const skills = [
  {
    name: "Unity Development",
    description: "Expertise in core engine mechanics, physics, shaders, and the end-to-end asset pipeline for 2D & 3D projects.",
    icon: <Box className="h-10 w-10 text-accent" />,
  },
  {
    name: "C# Programming",
    description: "Advanced C# scripting for gameplay systems, complex UI, editor extensions, and performance optimization.",
    icon: <CodeXml className="h-10 w-10 text-accent" />,
  },
  {
    name: "AR Technology",
    description: "Developing immersive augmented reality applications using ARCore, ARKit, and Vuforia for mobile platforms.",
    icon: <Camera className="h-10 w-10 text-accent" />,
  },
  {
    name: "VR Technology",
    description: "Building high-fidelity virtual reality experiences with the Oculus SDK and SteamVR, focusing on intuitive interaction design.",
    icon: <Gamepad2 className="h-10 w-10 text-accent" />,
  },
  {
    name: "2D & 3D Game Dev",
    description: "Full-cycle development capabilities, from crafting pixel-perfect 2D platformers to building expansive 3D worlds.",
    icon: <MonitorSmartphone className="h-10 w-10 text-accent" />,
  },
  {
    name: "Emerging Tech",
    description: "Integrating next-gen features like generative AI for dynamic content, procedural generation, and intelligent NPCs.",
    icon: <Bot className="h-10 w-10 text-accent" />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            My Expertise
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A versatile skill set for creating modern, immersive digital experiences. I combine technical proficiency with a creative vision to build the next generation of interactive entertainment.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:bg-secondary/50 hover:-translate-y-1">
              <CardHeader className="p-0 mb-4">
                {skill.icon}
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <CardTitle className="text-xl font-headline mb-2">{skill.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
