"use client";

import { Linkedin, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-secondary border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center md:items-start gap-4">
             <Link href="/" className="flex items-center gap-2">
              <Gamepad2 className="h-7 w-7 text-primary" />
              <span className="font-bold font-headline text-xl">Abin C</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Unity Game Developer creating immersive digital worlds.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
             <h3 className="font-semibold text-lg font-headline">Quick Links</h3>
             <nav className="flex flex-col items-center md:items-start gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <h3 className="font-semibold text-lg font-headline">Connect</h3>
             <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://www.linkedin.com/in/abin-c-96b636269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </Button>
              </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-6 text-center text-sm text-muted-foreground">
           <p>© {currentYear || new Date().getFullYear()} Abin C. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
