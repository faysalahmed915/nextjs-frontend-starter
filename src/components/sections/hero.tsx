"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Terminal, CheckCircle2, User } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/providers/language-provider";
import { useSession } from "@/lib/auth-client";
import { cn } from "cn";

export function HeroSection() {
  const { t } = useLanguage();
  const { data: session } = useSession();

  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 backdrop-blur-sm shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5 stroke-[2.5]" />
            <span>{t.hero.badge}</span>
            <span className="h-1 w-1 rounded-full bg-indigo-500" />
            <span className="font-mono font-semibold">v1.0.0</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            {t.hero.titleLine1}{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
              {t.hero.titleLine2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {t.hero.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {session?.user ? (
              <Link
                href="/profile"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 px-6 gap-2 text-base font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30"
                )}
              >
                <User className="h-4 w-4" />
                <span>Go to Profile</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <Link
                href="/register"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 px-6 gap-2 text-base font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30"
                )}
              >
                <span>{t.hero.getStarted}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            <Link
              href="/about"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 px-6 gap-2 text-base border-border/80 hover:bg-accent/60"
              )}
            >
              <Terminal className="h-4 w-4 text-muted-foreground" />
              <span>{t.hero.exploreDocs}</span>
            </Link>
          </div>

          {/* Feature Highlights Pills */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-6 text-xs sm:text-sm font-medium text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Next.js 16 App Router
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> shadcn/ui & Tailwind v4
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Better-Auth Ready
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Strict Zod Contracts
            </span>
          </div>

          {/* Interactive Architectural Terminal Preview */}
          <div className="w-full max-w-3xl mt-8 rounded-xl border border-border/60 bg-card/60 backdrop-blur-md shadow-2xl overflow-hidden text-left">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/40">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  security-architecture.ts
                </span>
              </div>
              <Badge variant="outline" className="text-[10px] font-mono text-emerald-500 border-emerald-500/30">
                DEFENSE-IN-DEPTH ACTIVE
              </Badge>
            </div>
            <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-foreground/90 bg-card/90">
              <div className="text-muted-foreground">{"// 1. Edge Middleware: Security Headers & Correlation ID"}</div>
              <div><span className="text-purple-400">headers</span>.set(<span className="text-emerald-400">&apos;Content-Security-Policy&apos;</span>, <span className="text-emerald-400">&apos;default-src &apos;self&apos;; frame-ancestors &apos;none&apos;&apos;</span>);</div>
              <div><span className="text-purple-400">headers</span>.set(<span className="text-emerald-400">&apos;Strict-Transport-Security&apos;</span>, <span className="text-emerald-400">&apos;max-age=63072000; preload&apos;</span>);</div>
              <div className="mt-2 text-muted-foreground">{"// 2. Better-Auth: Typed Session Verification"}</div>
              <div><span className="text-blue-400">const</span> session = <span className="text-purple-400">await</span> authClient.useSession();</div>
              <div className="mt-2 text-muted-foreground">{"// 3. NestJS Backend Sync via Strict DTO Contracts"}</div>
              <div><span className="text-blue-400">const</span> response = <span className="text-purple-400">await</span> fetch(<span className="text-emerald-400">&apos;http://localhost:3000/api/v1/auth/session&apos;</span>);</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
