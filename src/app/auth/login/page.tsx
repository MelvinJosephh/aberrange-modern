// src/app/auth/login/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/useAuth";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { fetchAuth, userId, loading: authLoading } = useAuth();
  const oauthError = searchParams.get("error");

  useEffect(() => {
    if (oauthError) {
      setError("Google authentication failed. Please try again.");
      console.error("OAuth error:", oauthError);
    }
  }, [oauthError]);

  useEffect(() => {
    if (!authLoading && userId) {
      router.push("/dashboard");
    }
  }, [authLoading, userId, router]);

  const handleCustomLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Invalid credentials");

      await fetchAuth();
    } catch (err: unknown) {
      // Type narrowing to handle the error safely
      if (err instanceof Error) {
        setError(err.message || "Login failed. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/google/login/start`);
      const { authUrl } = await response.json();
      window.location.href = authUrl; // Redirect to Google OAuth
    } catch (err: unknown) {
      // Type narrowing to handle the error safely
      if (err instanceof Error) {
        setError(err.message || "Error starting Google OAuth. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      console.error("OAuth error:", err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-18 pb-10">
      <Card className="w-full max-w-md border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Log in to access your Aberrange account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleCustomLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={loading}
                className="border-gray-300 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                disabled={loading}
                className="border-gray-300 focus:border-blue-500"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              {loading ? "Logging in..." : "Log In"}
            </Button>
          </form>

          <div className="flex items-center gap-2">
            <Separator className="flex-1 bg-gray-200" />
            <span className="text-gray-500 text-sm">or</span>
            <Separator className="flex-1 bg-gray-200" />
          </div>

          <Button
            variant="outline"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-100"
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
            {loading ? "Loading..." : "Sign in with Google"}
          </Button>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}