"use client";

import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase/client";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <h1>Overview</h1>
        <button className="btn-primary" onClick={handleLogout} style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}>
          Sign Out
        </button>
      </div>
      
      <div className="main-content" style={{ margin: "0", maxWidth: "100%", textAlign: "left" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Welcome back, {user?.email}</h2>
        <p>Your premium WealthTech dashboard is ready.</p>
      </div>
    </div>
  );
}
