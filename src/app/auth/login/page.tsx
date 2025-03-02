"use client";

import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    console.log("URL Code:", code);
    if (code) {
      handleCodeExchange(code);
    }
  }, [code]);

  const handleSignIn = async () => {
    setLoading(true);
    const result = await signIn("google", { redirect: false, callbackUrl: "/dashboard" });
    console.log("Sign-in Result:", result);
    if (result?.error) {
      console.error("Sign-in Error:", result.error);
      setLoading(false);
    }
  };

  const handleCodeExchange = async (code: string) => {
    console.log("Exchanging code:", code);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const { token } = await response.json();
      console.log("JWT Received:", token);
      localStorage.setItem("token", token);
      router.push("/dashboard");
    } catch (error) {
      console.error("Exchange error:", error);
      router.push("/login?error=auth_failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Login</h1>
      <button
        onClick={handleSignIn}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Loading..." : "Sign in with Google"}
      </button>
    </div>
  );
}