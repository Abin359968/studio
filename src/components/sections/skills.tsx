import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Box, CodeXml, Camera, Gamepad2, MonitorSmartphone, Bot } from "lucide-react";

const skills = [
  {
    name: "Unity Development",
    level: 95,
    icon: <Box className="h-8 w-8 text-accent" />,
  },
  {
    name: "C# Programming",
    level: 90,
    icon: <CodeXml className="h-8 w-8 text-accent" />,
  },
  {
    name: "AR Technology",
    level: 85,
    icon: <Camera className="h-8 w-8 text-accent" />,
  },
  {
    name: "VR Technology",
    level: 80,
    icon: <Gamepad2 className="h-8 w-8 text-accent" />,
  },
  {
    name: "2D & 3D Game Dev",
    level: 90,
    icon: <MonitorSmartphone className="h-8 w-8 text-accent" />,
  },
  {
    name: "Cutting-Edge Tech",
    level: 88,
    icon: <Bot className="h-8 w-8 text-accent" />,
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
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill.name}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {skill.name}
                </CardTitle>
                {skill.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{skill.level}%</div>
                <Progress value={skill.level} className="w-full mt-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
