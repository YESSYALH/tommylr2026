"use client";

import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase/client";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { LogOut, Bell, Search } from "lucide-react";

export default function DashboardHeader() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <header className="h-20 border-b border-gray-800/50 bg-[#0d1117]/50 backdrop-blur-md flex items-center justify-between px-8 z-20">
      <div className="flex items-center gap-4 bg-gray-900/50 rounded-xl px-4 py-2 border border-gray-800 w-96">
        <Search size={18} className="text-gray-500" />
        <input 
          type="text" 
          placeholder="Search transactions, insights..." 
          className="bg-transparent border-none outline-none text-sm text-gray-300 w-full placeholder:text-gray-600"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-gray-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#0d1117]"></span>
        </button>
        
        <div className="flex items-center gap-4 border-l border-gray-800 pl-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center overflow-hidden border border-gray-500/30">
              <span className="text-sm font-medium text-white">
                {user?.email?.charAt(0).toUpperCase() || "U"}
              </span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-200">{user?.email?.split('@')[0] || "User"}</p>
              <p className="text-xs text-gray-500">Premium Plan</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="p-2 text-gray-500 hover:text-red-400 transition-colors rounded-lg hover:bg-red-400/10"
            title="Sign Out"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
