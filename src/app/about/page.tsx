import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Server,
  Code2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export const metadata: Metadata = {
  title: "About Us - NextEnterprise Architecture & Mission",
  description:
    "Discover the engineering philosophy, zero-trust security model, and technological foundation powering the NextEnterprise starter.",
  openGraph: {
    title: "About Us - NextEnterprise Architecture",
    description: "Learn about the zero-trust security architecture and tech stack.",
  },
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Vance",
      role: "Lead Systems Architect",
      initials: "AV",
      focus: "Zero-Trust & Distributed Systems",
      bio: "12+ years designing mission-critical enterprise web architecture and high-throughput security perimeters.",
    },
    {
      name: "Elena Rostova",
      role: "Principal Security Engineer",
      initials: "ER",
      focus: "AppSec, CSP & OWASP Hardening",
      bio: "Former cybersecurity auditor specializing in defense-in-depth, cryptographic hygiene, and penetration testing.",
    },
    {
      name: "Marcus Chen",
      role: "Frontend Staff Engineer",
      initials: "MC",
      focus: "Next.js Turbopack & shadcn Design Systems",
      bio: "Design-systems purist passionate about zero-layout-shift micro-interactions and accessible UI primitives.",
    },
    {
      name: "Sarah Jenkins",
      role: "Backend Lead (NestJS)",
      initials: "SJ",
      focus: "Prisma ORM & Better-Auth Pipelines",
      bio: "Architected scalable microservices and relational schema synchronization for Fortune 500 platforms.",
    },
  ];

  const architecturalPillars = [
    {
      title: "Zero-Trust Perimeter",
      desc: "Every request is authenticated, validated, and rate-limited. Neither client input nor backend responses are taken on blind faith.",
      icon: ShieldCheck,
      badge: "Security",
    },
    {
      title: "Sub-Second Developer Velocity",
      desc: "Instant HMR via Next.js Turbopack, type-safe route handlers, and unified Zod schemas keep engineering teams focused on value.",
      icon: Zap,
      badge: "Performance",
    },
    {
      title: "Symmetric Contracts",
      desc: "Shared validation logic between Next.js client forms and NestJS backend controllers guarantees zero drift in payload formats.",
      icon: Server,
      badge: "Integration",
    },
    {
      title: "Radical Accessibility",
      desc: "Built directly upon Radix UI primitives and styled with modern Tailwind CSS variables for 100% WCAG 2.1 compliance.",
      icon: Code2,
      badge: "Accessibility",
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-8 space-y-20">
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="outline" className="px-3 py-1 text-xs font-mono uppercase tracking-wider text-indigo-500 border-indigo-500/30">
          Engineering Standard
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Built on Principles of Zero-Trust and Precision
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We believe modern web software should never compromise between top-tier aesthetics, developer velocity, and rigorous defensive security.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <Badge className="bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            Our Mission
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Eliminating Security Pitfalls from the Inception of Every Project
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Most application security incidents stem from minor oversights: missing Content Security Policy headers, unescaped form inputs, or loosely validated JSON payloads.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            NextEnterprise provides developers and autonomous AI agents with an immutable foundation where security best practices are enabled by default, not tacked on as an afterthought.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className={cn(buttonVariants(), "gap-2 bg-indigo-600 hover:bg-indigo-700 text-white")}
            >
              <span>Talk with an Architect</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Highlight Architecture Box */}
        <div className="rounded-2xl border border-border/60 bg-muted/20 p-6 sm:p-8 space-y-6 shadow-sm">
          <h3 className="text-lg font-bold font-mono uppercase tracking-wide text-foreground">
            Fullstack Topology At A Glance
          </h3>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Next.js App Router (Frontend)</strong>
                <p className="text-xs text-muted-foreground">React 19 Server Components, Turbopack, Dynamic SEO & Meta generation</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">shadcn/ui & Tailwind CSS v4</strong>
                <p className="text-xs text-muted-foreground">Accessible Radix primitives, dark mode tokens, and fluid layout scaling</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Better-Auth Session Management</strong>
                <p className="text-xs text-muted-foreground">Framework-agnostic auth with secure cookies, OAuth and 2FA capability</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">NestJS Companion (Backend)</strong>
                <p className="text-xs text-muted-foreground">Enterprise modular monolith, Helmet, Prisma 6 ORM, and PostgreSQL 16</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Architectural Pillars Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            The Four Pillars of High-Assurance Engineering
          </h2>
          <p className="text-sm text-muted-foreground">
            Designed to scale from single-developer MVPs to multi-team enterprise platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architecturalPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Card key={i} className="border border-border/60 bg-card/60">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="secondary" className="text-[10px] font-mono">
                      {pillar.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-base font-bold text-foreground">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Team Showcase */}
      <div className="space-y-8 border-t border-border/40 pt-16">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="outline" className="px-3 py-1 text-xs font-mono uppercase tracking-wider text-purple-500 border-purple-500/30">
            Core Contributors
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Engineered by Specialists
          </h2>
          <p className="text-sm text-muted-foreground">
            Meet the architects maintaining defense-in-depth security standards across this starter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <Card key={idx} className="border border-border/60 bg-card/60 hover:shadow-md transition-shadow text-center p-6 space-y-4">
              <Avatar className="h-16 w-16 mx-auto border-2 border-indigo-500/40">
                <AvatarFallback className="bg-indigo-600/10 text-indigo-600 font-bold font-mono text-lg">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-bold text-base text-foreground">{member.name}</h4>
                <p className="text-xs text-indigo-500 font-medium">{member.role}</p>
                <span className="inline-block mt-1 text-[11px] font-mono text-muted-foreground bg-muted/60 px-2 py-0.5 rounded">
                  {member.focus}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
