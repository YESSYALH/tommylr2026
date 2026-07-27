"use client";

import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase/client";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { LogOut, Bell, Search, Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function DashboardHeader({ onMenuClick }: HeaderProps) {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.includes('mock')) {
      localStorage.removeItem('mock_user_email');
      window.location.href = "/";
      return;
    }
    await signOut(auth);
    router.push("/");
  };

  return (
    <header className="h-20 border-b border-slate-200 bg-white/60 backdrop-blur-md flex items-center justify-between px-4 md:px-8 z-20 shadow-sm">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center gap-4 bg-slate-100 rounded-xl px-4 py-2 border border-slate-200 w-64 md:w-96 transition-all focus-within:bg-white focus-within:border-emerald-300 focus-within:shadow-[0_0_0_4px_rgba(52,211,153,0.1)]">
        <Search size={18} className="text-slate-400" />
        <input 
          type="text" 
          placeholder="Search transactions, insights..." 
          className="bg-transparent border-none outline-none text-sm text-slate-700 w-full placeholder:text-slate-400"
        />
      </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-slate-400 hover:text-slate-700 transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center gap-4 border-l border-slate-200 pl-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-100 to-emerald-50 flex items-center justify-center overflow-hidden border border-emerald-200">
              <span className="text-sm font-bold text-emerald-700">
                {user?.email?.charAt(0).toUpperCase() || "U"}
              </span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-bold text-slate-800">{user?.displayName || user?.email?.split('@')[0] || "User"}</p>
              <p className="text-xs font-medium text-slate-500">Premium Plan</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="p-2 text-slate-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
            title="Sign Out"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
