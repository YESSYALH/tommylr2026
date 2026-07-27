"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase/client";

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Modo Demo si no hay claves reales configuradas
    if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.includes('mock')) {
      const mockEmail = typeof window !== 'undefined' ? localStorage.getItem('mock_user_email') : null;
      if (mockEmail) {
        setUser({ 
          uid: 'demo-' + mockEmail, 
          email: mockEmail, 
          displayName: mockEmail.split('@')[0] 
        } as User);
      } else {
        setUser(null);
      }
      setLoading(false);
      return () => {};
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
