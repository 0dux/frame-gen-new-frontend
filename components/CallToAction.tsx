"use client";

import { DashboardSkeleton } from "@/components/DashboardSkeleton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 relative overflow-hidden">
      {/* Background glow placeholder for CTA */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-primary/20 blur-[120px] rounded-full point-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl flex flex-col items-center relative z-10 mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground text-balance">
          Step into the future of design
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl text-balance">
          Join thousands of designers and teams using Framer to turn ideas into
          high-performing websites, fast.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base relative overflow-hidden group"
          >
            <span className="relative z-10">Start Building Now</span>
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
