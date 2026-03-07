import { DashboardSkeleton } from "@/components/DashboardSkeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight01Icon,
  PlayCircleIcon,
  SparklesIcon,
  Tick01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Hero() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 relative overflow-hidden">
      {/* Glow Effects Skeleton Placeholder */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-primary/20 blur-[100px] rounded-full point-events-none" />

      <Badge
        variant="secondary"
        className="mb-8 py-3 px-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground border-border rounded-full text-sm font-medium gap-2"
      >
        <HugeiconsIcon icon={SparklesIcon} className="w-4 h-4 text-primary" />
        <span className="m">
          First thumbnail generation is free for new users
        </span>
        <HugeiconsIcon
          icon={ArrowRight01Icon}
          className="w-4 h-4 text-primary"
        />
      </Badge>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight pb-1 mb-6 max-w-4xl bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
        Your site should do more than look good
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
        Craftify unites marketers, designers, and developers to create, manage,
        and optimize impactful web experiences
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 z-10">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base w-full sm:w-auto gap-2"
        >
          Start Building Now
          <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-border text-foreground hover:bg-accent hover:text-accent-foreground h-12 px-8 text-base w-full sm:w-auto bg-transparent gap-2"
        >
          Watch video
          <HugeiconsIcon icon={PlayCircleIcon} className="w-4 h-4" />
        </Button>
      </div>

      {/* Feature Checkmarks below buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-24 z-10 w-full flex-wrap">
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
          <HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 text-primary" />
          Super simple to use
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
          <HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 text-primary" />
          No design skills needed
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
          <HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 text-primary" />
          Super fast generation
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
          <HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 text-primary" />
          High CTR templates
        </div>
      </div>

      {/* Dashboard UI Frame imported as a generic component */}
      <DashboardSkeleton />
    </main>
  );
}
