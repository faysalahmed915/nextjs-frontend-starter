import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { FeaturesSection } from "@/components/sections/features";
import { SecurityShowcase } from "@/components/sections/security-showcase";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "NextEnterprise Starter - Secure, Performant, SEO-Optimized Next.js Frontend",
  description:
    "Production-grade Next.js App Router starter engineered with defense-in-depth, shadcn/ui, Better-Auth, and Zod. Ready to pair with NestJS backend.",
  openGraph: {
    title: "NextEnterprise Starter - High Assurance Frontend",
    description:
      "Enterprise Next.js starter with strict security headers, Better-Auth, and shadcn/ui components.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <SecurityShowcase />
      <CtaBanner />
    </div>
  );
}
