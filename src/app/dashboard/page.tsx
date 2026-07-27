"use client";

import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-white">Overview</h1>
        <p className="text-gray-400">Welcome back, <span className="text-emerald-400">{user?.email?.split('@')[0]}</span>. Here's your premium wealth summary.</p>
      </div>
      
      {/* Overview Cards (Placeholders for now) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
          <p className="text-sm text-gray-400 font-medium mb-1">Total Net Worth</p>
          <h3 className="text-3xl font-bold text-white">$124,500.00</h3>
          <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
             <span className="bg-emerald-400/20 px-1.5 py-0.5 rounded text-emerald-400">+2.4%</span> this month
          </p>
        </div>
        
        <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
          <p className="text-sm text-gray-400 font-medium mb-1">Monthly Income</p>
          <h3 className="text-3xl font-bold text-white">$8,250.00</h3>
        </div>
        
        <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
          <p className="text-sm text-gray-400 font-medium mb-1">Monthly Expenses</p>
          <h3 className="text-3xl font-bold text-white">$3,120.00</h3>
        </div>
      </div>
    </div>
  );
}
