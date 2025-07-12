import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-background -z-10">
        <div
          className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(to_bottom,white,transparent)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Abin C
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-primary font-headline">
            Unity Game Developer
          </p>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Crafting immersive and innovative 2D, 3D, AR & VR experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button asChild size="lg" variant="default">
              <Link href="#projects">View My Work</Link>
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
