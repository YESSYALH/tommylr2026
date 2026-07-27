"use client";

import { Settings, Shield, CreditCard, BellRing } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6 fade-in max-w-4xl">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
          <Settings className="text-gray-400" size={28} />
          Settings
        </h1>
        <p className="text-gray-400">Manage your account preferences and premium subscription.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
        <div className="col-span-1 flex flex-col gap-2">
          <button className="text-left px-4 py-2 rounded-lg bg-gray-800/50 text-white font-medium text-sm">Profile</button>
          <button className="text-left px-4 py-2 rounded-lg hover:bg-gray-800/30 text-gray-400 font-medium text-sm transition-colors">Security</button>
          <button className="text-left px-4 py-2 rounded-lg hover:bg-gray-800/30 text-gray-400 font-medium text-sm transition-colors">Billing</button>
          <button className="text-left px-4 py-2 rounded-lg hover:bg-gray-800/30 text-gray-400 font-medium text-sm transition-colors">Notifications</button>
        </div>

        <div className="col-span-3 space-y-6">
          <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-lg font-medium text-white mb-4">Profile Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                <input 
                  type="email" 
                  disabled
                  value={user?.email || ""} 
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Display Name</label>
                <input 
                  type="text" 
                  defaultValue={user?.email?.split('@')[0] || ""} 
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Save Changes
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium text-white flex items-center gap-2">
                Premium Plan <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Active</span>
              </h3>
              <p className="text-sm text-gray-400 mt-1">You are currently on the premium wealth management tier.</p>
            </div>
            <button className="border border-gray-600 hover:border-gray-500 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Manage Billing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
