import { DashboardSkeleton } from "@/components/DashboardSkeleton";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 relative overflow-hidden">
      {/* Background glow placeholder for CTA */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-primary/20 blur-[120px] rounded-full point-events-none" />

      <div className="max-w-3xl flex flex-col items-center relative z-10 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground text-balance">
          Step into the future of design
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl text-balance">
          Join thousands of designers and teams using Framer to turn ideas into
          high-performing websites, fast.
        </p>

        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base"
        >
          Start Building Now
        </Button>
      </div>

      {/* Reusing the Dashboard UI Frame */}
      <DashboardSkeleton />
    </section>
  );
}
