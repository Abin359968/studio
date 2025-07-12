import { Building, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Unity Game Developer",
    company: "Malger Entertainments",
    period: "Present",
    description: "Currently contributing to the development of engaging games, focusing on gameplay mechanics, performance optimization, and creating immersive user experiences.",
    isCurrent: true
  },
  {
    role: "Unity Game Developer",
    company: "Emergio Games",
    period: "Previous Role",
    description: "Developed and maintained features for various mobile games. Collaborated with designers and artists to implement game features and enhance gameplay.",
    isCurrent: false
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20 md:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            Work Experience
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My professional journey as a game developer.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="flex items-center w-full">
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  {index % 2 !== 0 && (
                     <Card className="text-left animate-fade-in-right">
                       <CardHeader>
                         <div className="flex items-center justify-between">
                            <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                            {exp.isCurrent && <Badge>Current</Badge>}
                         </div>
                         <div className="flex items-center gap-2 text-muted-foreground text-sm">
                           <Building className="h-4 w-4" />
                           <span>{exp.company}</span>
                         </div>
                       </CardHeader>
                       <CardContent>
                         <p className="text-muted-foreground">{exp.description}</p>
                       </CardContent>
                     </Card>
                  )}
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-primary rounded-full p-2">
                        <Briefcase className="h-6 w-6 text-primary-foreground" />
                    </div>
                </div>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                  {index % 2 === 0 && (
                     <Card className="text-left animate-fade-in-left">
                       <CardHeader>
                         <div className="flex items-center justify-between">
                            <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                            {exp.isCurrent && <Badge>Current</Badge>}
                         </div>
                         <div className="flex items-center gap-2 text-muted-foreground text-sm">
                           <Building className="h-4 w-4" />
                           <span>{exp.company}</span>
                         </div>
                       </CardHeader>
                       <CardContent>
                         <p className="text-muted-foreground">{exp.description}</p>
                       </CardContent>
                     </Card>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
