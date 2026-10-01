"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  ShieldCheck,
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  UserPlus,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { registerSchema, RegisterInput } from "@/lib/schemas/auth.schema";
import { useLanguage } from "@/components/providers/language-provider";
import { signUp, useSession } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const { data: session, isPending: isSessionPending } = useSession();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (session?.user) {
      router.replace("/profile");
    }
  }, [session, router]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: true,
    },
  });

  const passwordValue = useWatch({ control, name: "password" }) || "";

  // Password Strength Calculation
  const calculateStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score;
  };

  const strengthScore = calculateStrength(passwordValue);

  const getStrengthLabel = (score: number) => {
    if (score <= 1) return { label: "Too Weak", color: "bg-red-500", text: "text-red-500" };
    if (score <= 3) return { label: "Moderate", color: "bg-amber-500", text: "text-amber-500" };
    if (score === 4) return { label: "Strong", color: "bg-emerald-500", text: "text-emerald-500" };
    return { label: "Enterprise Hardened", color: "bg-indigo-500", text: "text-indigo-500" };
  };

  const strengthInfo = getStrengthLabel(strengthScore);

  const onSubmit = async (data: RegisterInput) => {
    setIsLoading(true);
    try {
      const result = await signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
      });

      if (result?.error) {
        toast.error("Registration failed", {
          description: result.error.message || "Failed to create account. Email may already be in use.",
        });
        return;
      }

      toast.success("Account created successfully!", {
        description: `Welcome to NextEnterprise, ${result.data?.user?.name || data.name}!`,
      });
      router.push("/");
      router.refresh();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to connect to backend authentication service.";
      toast.error("Network or Service Error", {
        description: message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSessionPending) {
    return (
      <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
      </div>
    );
  }

  if (session?.user) {
    return (
      <div className="container mx-auto flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-3 text-center">
        <Loader2 className="h-6 w-6 animate-spin text-indigo-500" />
        <p className="text-sm font-medium text-muted-foreground">Already signed in. Redirecting to your profile...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12 sm:px-8">
      <div className="w-full max-w-lg space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/25">
              <ShieldCheck className="h-5 w-5 stroke-[2.5]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Next<span className="text-indigo-600 dark:text-indigo-400">Enterprise</span>
            </span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            {t.auth.createAccount}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {t.auth.registerSubtitle}
          </p>
        </div>

        {/* Registration Card */}
        <Card className="border border-border/60 bg-card/80 backdrop-blur-md shadow-xl">
          <CardHeader className="space-y-1 pb-4">
            <h2 className="text-base font-semibold text-foreground">Create New Enterprise Account</h2>
            <p className="text-xs text-muted-foreground">
              Directly provisions an account with session tokens via the NestJS Better-Auth service.
            </p>
          </CardHeader>

          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs font-medium">
                  {t.auth.nameLabel} *
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    placeholder="e.g. Alex Vance"
                    className={`pl-9 ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    {...register("name")}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-medium">
                  {t.auth.emailLabel} *
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className={`pl-9 ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <Label htmlFor="password" className="text-xs font-medium">
                  {t.auth.passwordLabel} *
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="At least 8 chars with uppercase, number & symbol"
                    className={`pl-9 pr-9 ${errors.password ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    {...register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>

                {/* Password Strength Meter */}
                {passwordValue.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-muted-foreground">Strength:</span>
                      <span className={`font-mono font-semibold ${strengthInfo.text}`}>
                        {strengthInfo.label}
                      </span>
                    </div>
                    <div className="grid grid-cols-5 gap-1.5 h-1.5 w-full bg-muted/60 rounded-full overflow-hidden">
                      {[1, 2, 3, 4, 5].map((lvl) => (
                        <div
                          key={lvl}
                          className={`h-full rounded-full transition-all ${
                            strengthScore >= lvl ? strengthInfo.color : "bg-transparent"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {errors.password && (
                  <p className="text-xs text-destructive">{errors.password.message}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <Label htmlFor="confirmPassword" className="text-xs font-medium">
                  {t.auth.confirmPasswordLabel} *
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Repeat your password"
                    className={`pl-9 ${errors.confirmPassword ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    {...register("confirmPassword")}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-xs text-destructive">{errors.confirmPassword.message}</p>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  {...register("acceptTerms")}
                  className="mt-0.5 h-4 w-4 rounded border-border text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="acceptTerms" className="text-xs text-muted-foreground leading-snug cursor-pointer">
                  {t.auth.termsAgree}
                </label>
              </div>
              {errors.acceptTerms && (
                <p className="text-xs text-destructive">{errors.acceptTerms.message}</p>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md shadow-indigo-600/25 transition-all cursor-pointer"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Creating Account...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <UserPlus className="h-4 w-4" />
                    <span>{t.auth.signUpBtn}</span>
                  </span>
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="justify-center border-t border-border/40 py-4 text-xs text-muted-foreground">
            <span>{t.auth.alreadyHaveAccount}</span>
            <Link href="/login" className="ml-1 font-semibold text-indigo-500 hover:underline">
              {t.nav.login}
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
