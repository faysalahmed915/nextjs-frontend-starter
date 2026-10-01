"use client";

import Link from "next/link";
import { ShieldCheck, Lock, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { useSession } from "@/lib/auth-client";

export function Footer() {
  const { t } = useLanguage();
  const { data: session } = useSession();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/50 bg-background/95 text-foreground/80">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-sm">
                <ShieldCheck className="h-4 w-4 stroke-[2.5]" />
              </div>
              <span className="text-base font-bold tracking-tight">
                Next<span className="text-indigo-600 dark:text-indigo-400">Enterprise</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground pt-1">
              <Lock className="h-3.5 w-3.5 text-emerald-500" />
              <span>OWASP Top 10 Hardened</span>
            </div>
          </div>

          {/* Navigation / Product */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4 font-mono">
              {t.footer.product}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              {session?.user ? (
                <li>
                  <Link href="/profile" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.nav.profile}
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link href="/login" className="text-muted-foreground hover:text-foreground transition-colors">
                      {t.nav.login}
                    </Link>
                  </li>
                  <li>
                    <Link href="/register" className="text-muted-foreground hover:text-foreground transition-colors">
                      {t.nav.register}
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Fullstack Architecture */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4 font-mono">
              {t.footer.resources}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>Next.js 16 App Router</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>shadcn/ui & Tailwind v4</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://better-auth.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>Better-Auth Framework</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  <span>NestJS Backend Ready</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Security & Compliance */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4 font-mono">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                  {t.footer.security}
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                  {t.footer.privacy}
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                  {t.footer.terms}
                </span>
              </li>
              <li className="pt-2">
                <div className="rounded-md border border-border/60 bg-muted/40 p-2.5 text-xs text-muted-foreground font-mono">
                  Defense-in-depth security: HSTS, CSP, X-Frame-Options DENY, strict Zod contracts.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {currentYear} NextEnterprise Starter. {t.footer.rights}
          </p>
          <div className="flex items-center gap-2">
            <span>Built with precision for mission-critical deployments</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
