"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Moon01Icon, Sun02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent layout shift/hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative w-9 h-9 rounded-full"
      >
        <span className="sr-only">Toggle theme placeholder</span>
      </Button>
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden rounded-full w-9 h-9 group"
    >
      <HugeiconsIcon
        icon={Sun02Icon}
        className="h-[1.2rem] w-[1.2rem] transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:text-primary dark:-translate-y-10 dark:opacity-0 dark:rotate-180"
      />
      <HugeiconsIcon
        icon={Moon01Icon}
        className="absolute h-[1.2rem] w-[1.2rem] rotate-180 translate-y-10 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:text-primary dark:translate-y-0 dark:opacity-100 dark:rotate-0"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
