import { DashboardSkeleton } from "@/components/DashboardSkeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Hero() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 relative overflow-hidden">
      {/* Glow Effects Skeleton Placeholder */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-primary/20 blur-[100px] rounded-full point-events-none" />

      <Badge
        variant="secondary"
        className="mb-8 py-1.5 px-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground border-border rounded-full text-sm font-medium gap-2"
      >
        <HugeiconsIcon icon={SparklesIcon} className="w-4 h-4 text-primary" />
        More than a website builder
      </Badge>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
        Your site should do more than look good
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
        Craftify unites marketers, designers, and developers to create, manage,
        and optimize impactful web experiences
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-24 z-10">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base w-full sm:w-auto"
        >
          Start Building Now
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-border text-foreground hover:bg-accent hover:text-accent-foreground h-12 px-8 text-base w-full sm:w-auto bg-transparent"
        >
          Watch video
        </Button>
      </div>

      {/* Dashboard UI Frame imported as a generic component */}
      <DashboardSkeleton />
    </main>
  );
}
