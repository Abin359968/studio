import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Get in Touch
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;m currently open to new opportunities. Feel free to reach
              out.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg">
              <a href="mailto:abinnandhu333@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                abinnandhu333@gmail.com
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+919656108332">
                <Phone className="mr-2 h-5 w-5" />
                +91 9656108332
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
