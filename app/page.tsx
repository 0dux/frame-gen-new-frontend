import { CallToAction } from "@/components/CallToAction";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Hero />
      <Features />
      <CallToAction />
    </div>
  );
}
