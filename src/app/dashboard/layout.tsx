import ProtectedRoute from "@/components/ProtectedRoute";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Wallet, 
  ArrowRightLeft, 
  PieChart, 
  Settings,
  ShieldAlert,
  LogOut
} from "lucide-react";
import DashboardHeader from "./Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-[#f8fafc] text-slate-800 font-sans overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-200 bg-white/90 backdrop-blur-xl flex flex-col justify-between shadow-[4px_0_24px_-12px_rgba(0,0,0,0.05)]">
          <div>
            <div className="p-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <ShieldAlert size={20} className="text-white" />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">Secure Wealth</h2>
            </div>
            
            <nav className="mt-6 px-4 space-y-2">
              <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 text-emerald-700 border border-slate-100 shadow-sm transition-all font-semibold">
                <LayoutDashboard size={18} />
                <span className="text-sm">Overview</span>
              </Link>
              <Link href="/dashboard/portfolio" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all font-medium">
                <Wallet size={18} />
                <span className="text-sm">Policy Tracker</span>
              </Link>
              <Link href="/dashboard/transactions" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all font-medium">
                <ArrowRightLeft size={18} />
                <span className="text-sm">Lending Ledger</span>
              </Link>
              <Link href="/dashboard/insights" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all font-medium">
                <PieChart size={18} />
                <span className="text-sm">AI Insights & Liquidity</span>
              </Link>
            </nav>
          </div>

          <div className="p-4">
            <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all font-medium">
              <Settings size={18} />
              <span className="text-sm">Settings</span>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden relative">
          <DashboardHeader />
          <div className="flex-1 overflow-y-auto p-8 relative z-10">
            {children}
          </div>
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] pointer-events-none z-0" />
        </main>
      </div>
    </ProtectedRoute>
  );
}
