"use client";

import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.includes('mock')) {
        const allowedEmails = ['krakendigitalabs@gmail.com', 'tommylruff@gmail.com'];
        if (allowedEmails.includes(email.toLowerCase()) && password === '123456') {
          localStorage.setItem('mock_user_email', email.toLowerCase());
          window.location.href = "/dashboard"; // hard redirect para montar el AuthContext con localStorage
          return;
        } else {
          setError("Credenciales incorrectas (Demo). Acceso denegado.");
          setLoading(false);
          return;
        }
      }
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err: unknown) {
      setError("Failed to sign in. Please check your credentials.");
      console.error(err);
    } finally {
      if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.includes('mock')) {
        setLoading(false);
      }
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin} className="auth-form">
        <div>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to access your portfolio</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
          />
        </div>

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <div className="auth-link">
          Don&apos;t have an account? <Link href="/register">Register here</Link>
        </div>
      </form>
    </div>
  );
}
