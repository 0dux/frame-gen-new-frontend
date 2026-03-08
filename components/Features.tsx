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
          Powerful features to simplify your web building experience
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-lg text-muted-foreground"
        >
          Craftify unites marketers, designers, and developers to create,
          manage, and optimize impactful web experiences
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
          <Card className="h-full bg-card border-border overflow-hidden flex flex-col group">
            <div className="h-64 bg-accent/30 w-full flex items-center justify-center border-b border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <HugeiconsIcon
                  icon={SparklesIcon}
                  className="w-10 h-10 text-primary opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                AI-Powered Design Assistance
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base mt-2">
                Get personalized design recommendations with AI-powered tools
                that helping you create a polished, professional website
                effortlessly.
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
          <Card className="h-full bg-card border-border overflow-hidden flex flex-col group">
            <div className="h-64 bg-accent/30 w-full flex items-center justify-center border-b border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-tl from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-12 bg-border rounded-sm group-hover:bg-primary/40 group-hover:h-16 transition-all duration-300"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                Customizable Templates
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base mt-2">
                Choose from a wide range of professionally designed templates.
                Easily customize fonts, colors, and layouts to reflect your
                brand&apos;s.
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
          <Card className="h-full bg-card border-border overflow-hidden flex flex-col group">
            <div className="h-56 bg-accent/30 w-full flex items-center justify-center border-b border-border relative overflow-hidden">
              <div className="absolute w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors duration-500" />
              <div className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary group-hover:rotate-180 transition-transform duration-700" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                SEO Tools Built-In
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base mt-2">
                Boost your website's visibility with integrated SEO tools.
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
          <Card className="h-full bg-card border-border overflow-hidden flex flex-col group">
            <div className="h-56 bg-accent/30 w-full flex items-center justify-center border-b border-border relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-primary/20 group-hover:-translate-y-2 transition-transform duration-300" />
                <div className="w-12 h-2 bg-border rounded-full group-hover:bg-primary/50 transition-colors duration-300" />
                <div className="w-10 h-10 rounded bg-primary/20 group-hover:translate-y-2 transition-transform duration-300" />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                APIs and integrations
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base mt-2">
                easily connect with your favorite apps and services for a
                website experience.
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
          <Card className="h-full bg-card border-border overflow-hidden flex flex-col group">
            <div className="h-56 bg-accent/30 w-full flex items-center justify-center border-b border-border relative overflow-hidden">
              <div className="w-20 h-12 border-2 border-primary/30 rounded-lg flex items-center justify-center group-hover:w-24 group-hover:h-16 transition-all duration-300">
                <div className="w-8 h-1 bg-primary/30 rounded-full group-hover:w-10 transition-all duration-300" />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                Responsive Design
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base mt-2">
                Create websites that look stunning on any device.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
