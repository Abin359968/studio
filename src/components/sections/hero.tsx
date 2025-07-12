import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-background -z-20" />
      <div className="absolute inset-0 -z-10 bg-grid-zinc-700/20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_60%)]" />
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 animate-fade-in-up">
          <p className="text-lg md:text-xl font-medium text-primary font-headline">
            Hi, I&apos;m Abin C.
          </p>
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
            Game Developer
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Crafting immersive and innovative 2D, 3D, AR & VR experiences from concept to reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up animation-delay-200">
            <Button asChild size="lg" variant="default" className="shadow-lg shadow-primary/30">
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/resume.pdf" download="Abin_C_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}