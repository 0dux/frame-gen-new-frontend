"use client";

import { DashboardSkeleton } from "@/app/landing/components/DashboardSkeleton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl flex flex-col items-center relative z-10 mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground text-balance">
          Ready to make your click-through rates skyrocket?
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl text-balance">
          Join the creators who&apos;ve stopped struggling with complex
          templates and started generating thumb-stopping art with Frame Gen.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base relative overflow-hidden group"
          >
            <span className="relative z-10">Generate Your First Thumbnail</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Reusing the Dashboard UI Frame */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full relative z-10"
      >
        <DashboardSkeleton />
      </motion.div>
    </section>
  );
}
