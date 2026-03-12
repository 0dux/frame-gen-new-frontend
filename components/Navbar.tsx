"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "./toggle-theme";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center w-full transition-all duration-300",
        isScrolled
          ? "bg-background/75 backdrop-blur-md border-b border-border shadow-sm py-4"
          : "bg-transparent border-transparent py-6",
      )}
    >
      <div className="w-full max-w-7xl px-6 flex items-center justify-between">
        <div className="flex-1 flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <div className="w-4 h-4 bg-primary-foreground rounded-full opacity-50" />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground whitespace-nowrap">
            Frame Gen
          </span>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link
            href="/generate"
            className="hover:text-foreground transition-colors"
          >
            Generate
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Community
          </Link>
        </nav>

        <div className="flex-1 flex items-center justify-end gap-2 md:gap-4">
          <ModeToggle />
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground hidden sm:flex"
          >
            Login
          </Button>
          <Button className="px-6 whitespace-nowrap">Get started</Button>
        </div>
      </div>
    </header>
  );
}
