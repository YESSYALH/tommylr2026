"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login?redirect=" + pathname);
    }
  }, [user, loading, router, pathname]);

  if (loading) {
    return (
      <div className="auth-container">
        <div className="auth-form" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#c9d1d9" }}>Loading...</h2>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
