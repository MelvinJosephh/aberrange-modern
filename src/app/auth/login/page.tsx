"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    if (error) {
      console.error("Authentication failed:", error);
    }
  }, [error]);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/google/start");
      const { authUrl } = await response.json();
      window.location.href = authUrl; // Redirect to Google
    } catch (error) {
      console.error("Error starting OAuth:", error);
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
      {error && <p className="text-red-500 mt-2">Authentication failed. Please try again.</p>}
    </div>
  );
}