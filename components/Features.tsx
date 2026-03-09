"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Features() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.1 },
          },
        }}
        className="flex flex-col items-center text-center mb-16 max-w-3xl"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Badge
            variant="secondary"
            className="mb-6 py-1.5 px-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground border-border rounded-full text-sm font-medium gap-2"
          >
            <HugeiconsIcon
              icon={SparklesIcon}
              className="w-4 h-4 text-primary"
            />
            Features
          </Badge>
        </motion.div>

        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground"
        >
          Everything you need. Zero design degree required.
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-lg text-muted-foreground"
        >
          Powerful features designed to turn casual scrollers into loyal
          viewers. Let the AI do the heavy lifting while you take all the
          creative credit.
        </motion.p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 w-full">
        {/* Top Row: 2 Cards */}
        {/* Card 1 */}
        <motion.div
          className="col-span-1 md:col-span-3 h-full"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Card className="h-full bg-card border-border overflow-hidden flex flex-col group pt-0 gap-0">
            <div className="h-64 bg-background w-full flex items-center justify-center border-b border-border relative overflow-hidden group-hover:bg-accent/10 transition-colors duration-700">
              {/* Background Grid */}
              <div
                className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Text flowing left to right (Generation point: left end) */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`text-${i}`}
                  className="absolute p-2 bg-card border border-border shadow-sm rounded-md flex flex-col gap-1.5 w-16 z-0"
                  style={{ top: `${25 + i * 20}%` }}
                  initial={{ left: "-20%", opacity: 0, scale: 0.8 }}
                  animate={{
                    left: "50%",
                    opacity: [0, 1, 1, 0],
                    scale: [0.8, 1, 1, 0.5],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "easeInOut",
                  }}
                >
                  <div className="h-1.5 w-full bg-muted-foreground/40 rounded-full" />
                  <div className="h-1.5 w-3/4 bg-muted-foreground/40 rounded-full" />
                  <div className="h-1.5 w-1/2 bg-muted-foreground/40 rounded-full" />
                </motion.div>
              ))}

              {/* Images flowing left to right (Generation point: right side of box) */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`img-${i}`}
                  className="absolute p-1 bg-background border border-border shadow-xl rounded-lg flex items-center justify-center z-0"
                  style={{ top: `${25 + i * 20}%`, y: "-50%" }}
                  initial={{ left: "55%", opacity: 0, scale: 0.5 }}
                  animate={{
                    left: "110%",
                    opacity: [0, 1, 1, 0],
                    scale: [0.5, 1, 1, 0.8],
                  }}
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    delay: i * 1.2 + 0.8, // offset from text
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-14 h-14 rounded-md bg-linear-to-tr from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-primary/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  </div>
                </motion.div>
              ))}

              {/* Central AI Processing Box */}
              <div className="relative z-10 w-24 h-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-out overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Glowing Orbs behind the icon */}
                <motion.div
                  className="absolute w-16 h-16 bg-primary/30 rounded-full blur-[20px]"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <HugeiconsIcon
                  icon={SparklesIcon}
                  className="w-10 h-10 text-primary relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                />

                {/* Animated scanning line */}
                <motion.div
                  className="absolute left-0 right-0 h-0.5 bg-primary/60 blur-[1px]"
                  animate={{ top: ["-10%", "110%", "-10%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                AI-Powered Generation
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base mt-2">
                Powered by Nano Banana Pro. Just type what you want, and watch
                our AI turn your ideas into eye-popping thumbnails faster than
                you can say &quot;click here.&quot;
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="col-span-1 md:col-span-3 h-full"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Card className="h-full bg-card border-border overflow-hidden flex flex-col group pt-0 gap-0">
            <div className="h-64 bg-zinc-50 dark:bg-zinc-950 w-full flex items-center justify-center border-b border-border relative overflow-hidden group-hover:bg-zinc-100 dark:group-hover:bg-zinc-900 transition-colors duration-700">
              <div className="absolute inset-0 bg-linear-to-tl from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              {/* High-End Typography Layering */}
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.span className="absolute text-[120px] font-serif font-bold text-foreground/5 dark:text-white/5 leading-none select-none -translate-x-8 translate-y-4 group-hover:-translate-x-12 transition-transform duration-700 ease-out">
                  A
                </motion.span>
                <motion.span className="absolute text-[100px] font-sans font-black text-foreground/10 dark:text-white/10 leading-none select-none translate-x-12 -translate-y-6 group-hover:translate-x-16 transition-transform duration-700 ease-out">
                  g
                </motion.span>
                <div className="relative z-10 px-6 py-3 border border-border/50 dark:border-white/20 bg-background/80 dark:bg-black/60 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden group-hover:border-primary/50 transition-colors duration-700">
                  <motion.div className="absolute inset-0 bg-linear-to-r from-transparent via-foreground/10 dark:via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                  <span className="text-xl font-bold tracking-tight text-foreground dark:text-white flex items-center">
                    B
                    <span className="text-primary tracking-tighter mix-blend-multiply dark:mix-blend-screen">
                      o
                    </span>
                    ld
                    <span className="ml-1 w-1.5 h-6 bg-primary animate-pulse inline-block" />
                  </span>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                Bold, Custom Text Titles
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base mt-2">
                Drop the mic, and the text. Add striking, customizable titles
                right onto your generated thumbnails so your audience knows
                exactly what to expect.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Bottom Row: 3 Cards */}
        {/* Card 3 */}
        <motion.div
          className="col-span-1 md:col-span-2 h-full"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Card className="h-full bg-card border-border overflow-hidden flex flex-col group pt-0 gap-0">
            <div className="h-56 bg-zinc-50 dark:bg-zinc-900 w-full flex items-center justify-center border-b border-border relative overflow-hidden group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 transition-colors duration-700 perspective-[1000px]">
              {/* Dynamic Theme Environment */}
              <motion.div
                className="absolute inset-0 opacity-20 dark:opacity-40"
                animate={{
                  background: [
                    "linear-gradient(45deg, #f43f5e, #f59e0b)",
                    "linear-gradient(45deg, #3b82f6, #10b981)",
                    "linear-gradient(45deg, #8b5cf6, #ec4899)",
                    "linear-gradient(45deg, #f43f5e, #f59e0b)",
                  ],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative w-full h-full flex items-center justify-center transform-style-3d gap-4 z-10">
                {/* Floating Color Plates that shift colors */}
                {[
                  {
                    delay: 0,
                    yOffset: -5,
                    colors: ["#f43f5e", "#3b82f6", "#8b5cf6", "#f43f5e"],
                  },
                  {
                    delay: -3.33,
                    yOffset: 10,
                    colors: ["#f59e0b", "#10b981", "#ec4899", "#f59e0b"],
                  },
                  {
                    delay: -6.66,
                    yOffset: -5,
                    colors: ["#ef4444", "#06b6d4", "#d946ef", "#ef4444"],
                  },
                ].map((plate, i) => (
                  <motion.div
                    key={`plate-${i}`}
                    className="w-16 h-28 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 relative overflow-hidden"
                    initial={{ y: plate.yOffset }}
                    whileHover={{ scale: 1.1, y: -15 }}
                    animate={{
                      y: [plate.yOffset, plate.yOffset - 10, plate.yOffset],
                    }}
                    transition={{
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.abs(plate.delay),
                      },
                    }}
                  >
                    {/* The color block that transitions */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{ backgroundColor: plate.colors }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    {/* Glass Overlay for sheen */}
                    <div className="absolute inset-0 bg-linear-to-b from-white/60 to-transparent opacity-50 dark:from-white/40" />
                    {/* Base structure at bottom */}
                    <div className="absolute bottom-2 left-2 right-2 h-6 bg-white/40 dark:bg-white/20 backdrop-blur-md rounded-lg" />
                    <div className="absolute bottom-10 left-2 right-2 h-2 bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-full" />
                  </motion.div>
                ))}
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                Preset Color Palettes
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base mt-2">
                Color outside the lines. Match your brand&apos;s exact vibe
                effortlessly with our curated, high-converting preset color
                themes.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="col-span-1 md:col-span-2 h-full"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Card className="h-full bg-card border-border overflow-hidden flex flex-col group pt-0 gap-0">
            <div className="h-56 bg-zinc-50 dark:bg-zinc-950 w-full flex items-center justify-center border-b border-border relative overflow-hidden group-hover:bg-zinc-100 dark:group-hover:bg-zinc-900 transition-colors duration-700 perspective-[1000px]">
              {/* Dynamic Background that changes with the active style */}
              <motion.div
                className="absolute inset-0 opacity-20 dark:opacity-30 blur-2xl"
                animate={{
                  backgroundColor: [
                    "#8b5cf6",
                    "#ec4899",
                    "#3b82f6",
                    "#10b981",
                    "#8b5cf6",
                  ],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              {/* Central Element being stylized */}
              <div className="relative z-10 w-28 h-28 transform-style-3d group-hover:scale-105 transition-transform duration-500">
                <motion.div
                  className="absolute inset-0 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md border border-white/20 dark:border-white/10"
                  animate={{
                    rotateY: [0, 180, 360],
                    backgroundColor: [
                      "rgba(139, 92, 246, 0.4)", // Violet
                      "rgba(236, 72, 153, 0.4)", // Pink
                      "rgba(59, 130, 246, 0.4)", // Blue
                      "rgba(16, 185, 129, 0.4)", // Emerald
                      "rgba(139, 92, 246, 0.4)",
                    ],
                    borderRadius: ["16px", "32px", "16px"],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "center center" }}
                >
                  <HugeiconsIcon
                    icon={SparklesIcon}
                    className="w-10 h-10 text-white drop-shadow-md"
                  />
                </motion.div>
              </div>

              {/* Floating "Style" Buttons clicking themselves */}
              {[
                {
                  top: "15%",
                  left: "15%",
                  delay: 0,
                  color: "bg-violet-500",
                  clickTime: 0,
                },
                {
                  top: "25%",
                  right: "15%",
                  delay: 0.5,
                  color: "bg-pink-500",
                  clickTime: 3,
                },
                {
                  bottom: "20%",
                  left: "20%",
                  delay: 1,
                  color: "bg-blue-500",
                  clickTime: 6,
                },
                {
                  bottom: "15%",
                  right: "20%",
                  delay: 1.5,
                  color: "bg-emerald-500",
                  clickTime: 9,
                },
              ].map((btn, i) => (
                <motion.div
                  key={`style-btn-${i}`}
                  className="absolute z-20"
                  style={{
                    top: btn.top,
                    left: btn.left,
                    right: btn.right,
                    bottom: btn.bottom,
                  }}
                  initial={{ y: 0 }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: btn.delay,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className={`w-10 h-10 rounded-full ${btn.color} shadow-lg border-2 border-white dark:border-zinc-800 flex items-center justify-center cursor-pointer`}
                    // Simulate a "click" press
                    animate={{
                      scale: [1, 0.8, 1],
                      boxShadow: [
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                        "0 0px 0px 0px rgba(0, 0, 0, 0)",
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      ],
                    }}
                    transition={{
                      scale: {
                        duration: 0.4,
                        repeat: Infinity,
                        repeatDelay: 11.6,
                        delay: btn.clickTime,
                      },
                      boxShadow: {
                        duration: 0.4,
                        repeat: Infinity,
                        repeatDelay: 11.6,
                        delay: btn.clickTime,
                      },
                    }}
                  >
                    <div className="w-3 h-3 rounded-full bg-white/50" />
                  </motion.div>

                  {/* Ping effect when clicked */}
                  <motion.div
                    className={`absolute inset-0 rounded-full ${btn.color} -z-10`}
                    animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatDelay: 11.2,
                      delay: btn.clickTime,
                    }}
                  />
                </motion.div>
              ))}

              {/* Connecting lines to center (simulating application) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                {[
                  // btn 1: top: 15%, left: 15% (center: 15% + 20px, 15% + 20px)
                  {
                    x1: "calc(15% + 20px)",
                    y1: "calc(15% + 20px)",
                    clickTime: 0,
                    color: "stroke-violet-500",
                  },
                  // btn 2: top: 25%, right: 15% -> left: 85% (center: 85% - 20px, 25% + 20px)
                  {
                    x1: "calc(85% - 20px)",
                    y1: "calc(25% + 20px)",
                    clickTime: 3,
                    color: "stroke-pink-500",
                  },
                  // btn 3: bottom: 20%, left: 20% -> top: 80% (center: 20% + 20px, 80% - 20px)
                  {
                    x1: "calc(20% + 20px)",
                    y1: "calc(80% - 20px)",
                    clickTime: 6,
                    color: "stroke-blue-500",
                  },
                  // btn 4: bottom: 15%, right: 20% -> top: 85%, left: 80% (center: 80% - 20px, 85% - 20px)
                  {
                    x1: "calc(80% - 20px)",
                    y1: "calc(85% - 20px)",
                    clickTime: 9,
                    color: "stroke-emerald-500",
                  },
                ].map((line, i) => (
                  <motion.line
                    key={`line-${i}`}
                    x1={line.x1}
                    y1={line.y1}
                    x2="50%"
                    y2="50%"
                    className={`${line.color} dark:opacity-80`}
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 10.5,
                      delay: line.clickTime,
                    }}
                  />
                ))}
              </svg>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                Custom Visual Styles
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base mt-2">
                From photorealistic masterpieces to pure neon flair. Choose a
                generation style that perfectly matches your channel&apos;s
                personality.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          className="col-span-1 md:col-span-2 h-full"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Card className="h-full bg-card border-border overflow-hidden flex flex-col group pt-0 gap-0">
            <div className="h-56 bg-zinc-50 dark:bg-zinc-950 w-full flex items-center justify-center border-b border-border relative overflow-hidden group-hover:bg-zinc-100 dark:group-hover:bg-zinc-900 transition-colors duration-700">
              {/* Fade Overlays for scrolling effect */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-20 group-hover:from-zinc-100 dark:group-hover:from-zinc-900 transition-colors duration-700" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-20 group-hover:from-zinc-100 dark:group-hover:from-zinc-900 transition-colors duration-700" />

              {/* Scrolling Gallery Container */}
              <div className="relative w-[200%] h-full flex flex-col justify-center gap-4 group-hover:rotate-[-5deg] transition-transform duration-700">
                {/* Row 1: Scrolling Left to Right */}
                <motion.div
                  className="flex gap-4 px-4"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div
                      key={`row1-${item}`}
                      className="relative shrink-0 w-32 h-20 rounded-md border border-border/50 bg-background/50 overflow-hidden shadow-sm flex flex-col justify-between p-1.5"
                    >
                      <div
                        className={`absolute inset-0 opacity-20 dark:opacity-40 bg-linear-to-br ${["from-rose-500 to-orange-400", "from-blue-500 to-cyan-400", "from-violet-500 to-fuchsia-500", "from-emerald-500 to-teal-400"][item % 4]}`}
                      />

                      {/* Mock Image Area */}
                      <div className="w-full h-10 rounded-sm bg-black/5 dark:bg-white/10" />

                      {/* Mock Text/Profile Area */}
                      <div className="flex items-center justify-between w-full z-10">
                        <div className="flex items-center gap-1.5 mt-1">
                          <div className="w-3 h-3 rounded-full bg-black/10 dark:bg-white/20" />
                          <div className="flex flex-col gap-0.5">
                            <div className="w-10 h-1 bg-black/10 dark:bg-white/20 rounded-full" />
                            <div className="w-6 h-1 bg-black/10 dark:bg-white/20 rounded-full" />
                          </div>
                        </div>
                        <div className="w-4 h-3 bg-primary/20 rounded-sm" />
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Row 2: Scrolling Right to Left */}
                <motion.div
                  className="flex gap-4 px-4"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div
                      key={`row2-${item}`}
                      className="relative shrink-0 w-28 h-20 rounded-md border border-border/50 bg-background/50 overflow-hidden shadow-sm flex flex-col justify-between p-1.5"
                    >
                      <div
                        className={`absolute inset-0 opacity-20 dark:opacity-40 bg-linear-to-tr ${["from-indigo-500 to-purple-500", "from-green-500 to-lime-400", "from-red-500 to-rose-400", "from-amber-500 to-yellow-400"][item % 4]}`}
                      />

                      {/* Mock Image Area */}
                      <div className="w-full h-10 rounded-sm bg-black/5 dark:bg-white/10" />

                      {/* Mock Text/Profile Area */}
                      <div className="flex items-center justify-between w-full z-10">
                        <div className="flex items-center gap-1.5 mt-1">
                          <div className="w-3 h-3 rounded-full bg-black/10 dark:bg-white/20" />
                          <div className="flex flex-col gap-0.5">
                            <div className="w-8 h-1 bg-black/10 dark:bg-white/20 rounded-full" />
                            <div className="w-5 h-1 bg-black/10 dark:bg-white/20 rounded-full" />
                          </div>
                        </div>
                        <div className="w-4 h-3 bg-primary/20 rounded-sm" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                Community Inspiration
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base mt-2">
                Writer&apos;s block? Browse our community gallery to see
                what&apos;s actually working and borrow top-tier prompts from
                the best creators.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
