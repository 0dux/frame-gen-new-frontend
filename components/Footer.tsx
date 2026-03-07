import { Linkedin01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24">
      {/* Outer rounded card area */}
      <div className="bg-card border border-border rounded-3xl p-8 md:p-16 flex flex-col gap-16 md:gap-24 relative overflow-hidden">
        {/* Decorative blurry background elements could go here if requested later */}

        <div className="flex flex-col md:flex-row justify-between gap-16 z-10 relative">
          {/* Left Column (Headers & Newsletter) */}
          <div className="flex flex-col gap-12 md:max-w-md">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-6">
                Ready to start syncing your data?
              </h2>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 h-12">
                Contact us
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium text-foreground">
                Newsletter
              </h3>
              <p className="text-muted-foreground text-sm">
                We'd love to share our love for product with you in our monthly
                newsletter.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-accent/50 border-transparent focus-visible:ring-primary h-11"
                />
                <Button
                  variant="secondary"
                  className="bg-muted hover:bg-muted/80 text-foreground font-medium h-11 px-6"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column (Links & Socials) */}
          <div className="flex flex-col justify-between gap-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-medium text-foreground mb-4">
                  Home
                </h4>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Benefits
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-medium text-foreground mb-4">
                  Platform
                </h4>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Solution
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Overview
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Portfolio
                </Link>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-medium text-foreground mb-4">
                  About us
                </h4>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Connectors
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Security
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Social Icons right-aligned loosely matching design */}
            <div className="flex items-center gap-4 self-end sm:mr-16">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-accent hover:bg-accent/80 flex items-center justify-center transition-colors text-muted-foreground hover:text-foreground"
              >
                <HugeiconsIcon icon={Mail01Icon} className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-accent hover:bg-accent/80 flex items-center justify-center transition-colors text-muted-foreground hover:text-foreground"
              >
                <HugeiconsIcon icon={Linkedin01Icon} className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="z-10 relative flex items-center justify-center text-sm text-muted-foreground pt-8 border-t border-border/50">
          © 2025 Syncly.
        </div>
      </div>
    </footer>
  );
}
