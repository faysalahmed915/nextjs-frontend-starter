"use client";

import { ShieldCheck, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function SecurityShowcase() {
  const securityControls = [
    {
      category: "Transport & Headers",
      items: [
        { name: "Content-Security-Policy (CSP)", frontend: "Strict directives, no unsafe script execution", backend: "Helmet CSP configured" },
        { name: "Strict-Transport-Security (HSTS)", frontend: "max-age=63072000; includeSubDomains", backend: "HSTS header preloaded" },
        { name: "Frameguard & MIME Defense", frontend: "X-Frame-Options: DENY, nosniff", backend: "Frameguard DENY via Helmet" },
      ],
    },
    {
      category: "Identity & Sessions",
      items: [
        { name: "Authentication Standard", frontend: "Better-Auth React Client & Session Hooks", backend: "Better-Auth Prisma Adapter" },
        { name: "Session Storage", frontend: "HTTP-Only, Secure, SameSite=Lax Cookies", backend: "PostgreSQL Session Verification" },
        { name: "Password Security", frontend: "Client-side strength validation meter", backend: "Scrypt / Argon2 Hashing" },
      ],
    },
    {
      category: "Data Integrity & Observability",
      items: [
        { name: "Payload Validation", frontend: "Zod Schema SafeParse on all forms", backend: "AppValidationPipe whitelist: true" },
        { name: "Correlation Tracing", frontend: "x-correlation-id injected in middleware", backend: "CorrelationIdMiddleware logged" },
        { name: "Error Sanitization", frontend: "User-friendly masked error messages", backend: "HttpExceptionFilter stack masked" },
      ],
    },
  ];

  return (
    <section className="py-20 border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <Badge variant="outline" className="px-3 py-1 text-xs font-mono uppercase tracking-wider text-emerald-500 border-emerald-500/30">
            Defense-in-Depth Specification
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground max-w-3xl">
            Symmetric Frontend & Backend Security
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            Every layer in this Next.js starter is designed to complement and mirror the security guardrails of the companion NestJS backend.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {securityControls.map((group, groupIdx) => (
            <div key={groupIdx} className="rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden shadow-sm">
              <div className="bg-muted/40 px-6 py-3 border-b border-border/50 flex items-center justify-between">
                <h3 className="text-sm font-semibold tracking-wide font-mono uppercase text-foreground">
                  {group.category}
                </h3>
                <span className="text-xs font-mono text-emerald-500 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Hardened
                </span>
              </div>
              <div className="divide-y divide-border/40">
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="p-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 items-center hover:bg-muted/20 transition-colors">
                    <div className="font-medium text-sm text-foreground flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>{item.name}</span>
                    </div>
                    <div className="text-xs text-muted-foreground font-mono bg-background/50 p-2 rounded border border-border/40">
                      <span className="text-[10px] uppercase font-bold text-indigo-500 block mb-0.5">Next.js Frontend:</span>
                      {item.frontend}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono bg-background/50 p-2 rounded border border-border/40">
                      <span className="text-[10px] uppercase font-bold text-rose-500 block mb-0.5">NestJS Backend:</span>
                      {item.backend}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
