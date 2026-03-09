"use client";

import { cn } from "@/lib/utils";
import type React from "react";
import type { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
  /** Animation duration in seconds. Default is 60s for subtle movement. Use lower values (10-20s) for more visible animation. */
  animationSpeed?: number;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  animationSpeed = 100,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "transition-bg relative flex flex-col items-center justify-center bg-background text-foreground",
        className,
      )}
      {...(props as any)}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={
          {
            "--aurora":
              "repeating-linear-gradient(100deg,#0b815a_10%,#24936b_15%,#4da180_20%,#1f9485_25%,#0e8074_30%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
            "--white-gradient":
              "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_100%,#fff_16%)",

            "--color-1": "#0b815a",
            "--color-2": "#24936b",
            "--color-3": "#4da180",
            "--color-4": "#1f9485",
            "--color-5": "#0e8074",
            "--black": "#000",
            "--white": "#fff",
            "--transparent": "transparent",
            "--animation-speed": `${animationSpeed}s`,
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            `pointer-events-none absolute -inset-2.5 [background-image:var(--white-gradient),var(--aurora)] bg-size-[300%,200%] bg-position-[50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--color-1)_10%,var(--color-2)_15%,var(--color-3)_20%,var(--color-4)_25%,var(--color-5)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:bg-size-[200%,100%] after:bg-fixed after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
            "after:animate-[aurora_var(--animation-speed)_linear_infinite]",
            showRadialGradient &&
              "mask-[radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]",
          )}
        />
      </div>
      {children}
    </div>
  );
};

export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground showRadialGradient={true} animationSpeed={15}>
      <div className="pointer-events-none" />
    </AuroraBackground>
  );
}
