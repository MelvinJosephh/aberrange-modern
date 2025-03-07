"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState<string | null>(null);

  const handleCustomRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Registration failed");

      console.log("Registration successful:", data);
      window.location.href = "/auth/login";
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Registration failed. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/google/start`);
      const { authUrl } = await response.json();
      window.location.href = authUrl;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Error starting Google OAuth. Please try again.");
        console.error("OAuth error:", err);
      } else {
        setError("An unexpected error occurred with Google OAuth.");
        console.error("OAuth error:", err);
      }
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background-color)] pt-18 pb-10">
      <Card className="w-full max-w-md border-[var(--border-color-light)]">
        <CardHeader>
          <CardTitle className="text-[var(--text-primary)] text-2xl font-bold">
            Join Aberrange
          </CardTitle>
          <CardDescription className="text-[var(--text-secondary)]">
            Create an account to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleCustomRegister} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[var(--text-primary)]">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={loading}
                className="border-[var(--border-color-light)] focus:border-[var(--interactive-color)]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[var(--text-primary)]">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                disabled={loading}
                className="border-[var(--border-color-light)] focus:border-[var(--interactive-color)]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-[var(--text-primary)]">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
                disabled={loading}
                className="border-[var(--border-color-light)] focus:border-[var(--interactive-color)]"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--interactive-color)] hover:bg-[var(--interactive-hover)] active:bg-[var(--interactive-active)] text-[var(--text-light)]"
            >
              {loading ? "Registering..." : "Sign Up"}
            </Button>
          </form>

          <div className="flex items-center gap-2">
            <Separator className="flex-1 bg-[var(--border-color-light)]" />
            <span className="text-[var(--text-secondary)] text-sm">or</span>
            <Separator className="flex-1 bg-[var(--border-color-light)]" />
          </div>

          <Button
            variant="outline"
            onClick={handleGoogleSignUp}
            disabled={loading}
            className="w-full flex items-center gap-2 border-[var(--border-color-light)] text-[var(--text-primary)] hover:bg-[var(--secondary-color)]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.04.69-2.36 1.1-3.71 1.1-2.85 0-5.27-1.92-6.13-4.5H2.25v2.82C4.06 20.36 7.74 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.87 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.25C1.2 8.71.68 10.53.68 12.25c0 1.72.52 3.54 1.57 5.18l3.62-3.34z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.57 0 2.98.54 4.09 1.59l3.06-3.06C17.46 1.66 14.97.68 12 .68 7.74.68 4.06 3.32 2.25 6.68l3.62 2.82c.86-2.58 3.28-4.5 6.13-4.5z"
              />
            </svg>
            {loading ? "Loading..." : "Sign up with Google"}
          </Button>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <p className="text-center text-[var(--text-secondary)] text-sm">
            Already have an account?{" "}
            <a
              href="/auth/login"
              className="text-[var(--interactive-color)] hover:text-[var(--interactive-hover)]"
            >
              Log in
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}