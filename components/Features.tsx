import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Features() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl">
        <Badge
          variant="secondary"
          className="mb-6 py-1.5 px-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground border-border rounded-full text-sm font-medium gap-2"
        >
          <HugeiconsIcon icon={SparklesIcon} className="w-4 h-4 text-primary" />
          Features
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
          Powerful features to simplify your web building experience
        </h2>
        <p className="text-lg text-muted-foreground">
          Craftify unites marketers, designers, and developers to create,
          manage, and optimize impactful web experiences
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 w-full">
        {/* Top Row: 2 Cards */}
        {/* Card 1 */}
        <Card className="col-span-1 md:col-span-3 bg-card border-border overflow-hidden flex flex-col">
          <div className="h-64 bg-accent/30 w-full flex items-center justify-center border-b border-border">
            {/* Visual Placeholder */}
            <span className="text-muted-foreground/50 text-sm">
              Illustration Placeholder
            </span>
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-foreground">
              AI-Powered Design Assistance
            </CardTitle>
            <CardDescription className="text-muted-foreground text-base mt-2">
              Get personalized design recommendations with AI-powered tools that
              helping you create a polished, professional website effortlessly.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Card 2 */}
        <Card className="col-span-1 md:col-span-3 bg-card border-border overflow-hidden flex flex-col">
          <div className="h-64 bg-accent/30 w-full flex items-center justify-center border-b border-border">
            {/* Visual Placeholder */}
            <span className="text-muted-foreground/50 text-sm">
              Illustration Placeholder
            </span>
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-foreground">
              Customizable Templates
            </CardTitle>
            <CardDescription className="text-muted-foreground text-base mt-2">
              Choose from a wide range of professionally designed templates.
              Easily customize fonts, colors, and layouts to reflect your
              brand's.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Bottom Row: 3 Cards */}
        {/* Card 3 */}
        <Card className="col-span-1 md:col-span-2 bg-card border-border overflow-hidden flex flex-col">
          <div className="h-56 bg-accent/30 w-full flex items-center justify-center border-b border-border">
            {/* Visual Placeholder */}
            <span className="text-muted-foreground/50 text-sm">
              Illustration Placeholder
            </span>
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-foreground">
              SEO Tools Built-In
            </CardTitle>
            <CardDescription className="text-muted-foreground text-base mt-2">
              Boost your website's visibility with integrated SEO tools.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Card 4 */}
        <Card className="col-span-1 md:col-span-2 bg-card border-border overflow-hidden flex flex-col">
          <div className="h-56 bg-accent/30 w-full flex items-center justify-center border-b border-border">
            {/* Visual Placeholder */}
            <span className="text-muted-foreground/50 text-sm">
              Illustration Placeholder
            </span>
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-foreground">
              APIs and integrations
            </CardTitle>
            <CardDescription className="text-muted-foreground text-base mt-2">
              easily connect with your favorite apps and services for a website
              experience.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Card 5 */}
        <Card className="col-span-1 md:col-span-2 bg-card border-border overflow-hidden flex flex-col">
          <div className="h-56 bg-accent/30 w-full flex items-center justify-center border-b border-border">
            {/* Visual Placeholder */}
            <span className="text-muted-foreground/50 text-sm">
              Illustration Placeholder
            </span>
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-foreground">
              Responsive Design
            </CardTitle>
            <CardDescription className="text-muted-foreground text-base mt-2">
              Create websites that look stunning on any device.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
