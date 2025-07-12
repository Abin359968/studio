import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, CodeXml, Camera, Gamepad2, MonitorSmartphone, Bot } from "lucide-react";

const skills = [
  {
    name: "Unity Development",
    description: "Core engine mechanics, physics, and asset pipeline.",
    icon: <Box className="h-10 w-10 text-accent" />,
  },
  {
    name: "C# Programming",
    description: "Scripting gameplay, UI, and editor tools.",
    icon: <CodeXml className="h-10 w-10 text-accent" />,
  },
  {
    name: "AR Technology",
    description: "ARCore, ARKit, and Vuforia for immersive experiences.",
    icon: <Camera className="h-10 w-10 text-accent" />,
  },
  {
    name: "VR Technology",
    description: "Oculus SDK, SteamVR, and interaction design.",
    icon: <Gamepad2 className="h-10 w-10 text-accent" />,
  },
  {
    name: "2D & 3D Game Dev",
    description: "From pixel art platformers to vast 3D worlds.",
    icon: <MonitorSmartphone className="h-10 w-10 text-accent" />,
  },
  {
    name: "Emerging Tech",
    description: "AI integration, procedural generation, and more.",
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
            A versatile skill set for creating modern, immersive digital experiences.
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
