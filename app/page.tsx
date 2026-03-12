import { CallToAction } from "@/components/landing-page-sections/CallToAction";
import { Features } from "@/components/landing-page-sections/Features";
import { Hero } from "@/components/landing-page-sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Hero />
      <Features />
      <CallToAction />
    </div>
  );
}
