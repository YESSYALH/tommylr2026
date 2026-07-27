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
      <div className="flex h-screen bg-[#0d1117] text-gray-100 font-sans overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-800 bg-[#0d1117]/80 backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="p-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <ShieldAlert size={20} className="text-white" />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-white">Secure Wealth</h2>
            </div>
            
            <nav className="mt-6 px-4 space-y-2">
              <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-800/50 text-emerald-400 border border-gray-700/50 transition-all">
                <LayoutDashboard size={18} />
                <span className="font-medium text-sm">Overview</span>
              </Link>
              <Link href="/dashboard/portfolio" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-gray-800/30 hover:text-gray-200 transition-all">
                <Wallet size={18} />
                <span className="font-medium text-sm">Portfolio</span>
              </Link>
              <Link href="/dashboard/transactions" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-gray-800/30 hover:text-gray-200 transition-all">
                <ArrowRightLeft size={18} />
                <span className="font-medium text-sm">Transactions</span>
              </Link>
              <Link href="/dashboard/insights" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-gray-800/30 hover:text-gray-200 transition-all">
                <PieChart size={18} />
                <span className="font-medium text-sm">AI Insights</span>
              </Link>
            </nav>
          </div>

          <div className="p-4">
            <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-gray-800/30 hover:text-gray-200 transition-all">
              <Settings size={18} />
              <span className="font-medium text-sm">Settings</span>
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
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
        </main>
      </div>
    </ProtectedRoute>
  );
}
