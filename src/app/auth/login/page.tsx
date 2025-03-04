"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styles from "@/styles/auth/login.module.scss";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const oauthError = searchParams.get("error");

  useEffect(() => {
    if (oauthError) {
      setError("Google authentication failed. Please try again.");
      console.error("OAuth error:", oauthError);
    }
  }, [oauthError]);

  const handleCustomLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Invalid credentials");

      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } catch (err: unknown) {
      // Type 'err' as unknown and safely handle it
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
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Log in to access your Aberrange account</p>

        <form onSubmit={handleCustomLogin} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              disabled={loading}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              disabled={loading}
              className={styles.input}
            />
          </div>
          <button type="submit" disabled={loading} className={styles.primaryButton}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <div className={styles.divider}>
          <hr className={styles.hr} />
          <span className={styles.dividerText}>or</span>
          <hr className={styles.hr} />
        </div>

        <button onClick={handleGoogleSignIn} disabled={loading} className={styles.googleButton}>
          <svg className={styles.googleIcon} viewBox="0 0 24 24">
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
        </button>

        {error && <p className={styles.error}>{error}</p>}

        <p className={styles.linkText}>
          Don’t have an account?{" "}
          <a href="/auth/register" className={styles.link}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}