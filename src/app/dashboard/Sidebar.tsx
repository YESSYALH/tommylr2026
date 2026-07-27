import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Wallet, 
  ArrowRightLeft, 
  PieChart, 
  Settings,
  ShieldAlert,
  X
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Policy Tracker", href: "/dashboard/portfolio", icon: Wallet },
    { name: "Lending Ledger", href: "/dashboard/transactions", icon: ArrowRightLeft },
    { name: "AI Insights & Liquidity", href: "/dashboard/insights", icon: PieChart },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50 w-72 md:w-64 bg-white/90 backdrop-blur-xl border-r border-slate-200 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.05)]
        flex flex-col justify-between transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        <div>
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <ShieldAlert size={20} className="text-white" />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">Secure Wealth</h2>
            </div>
            {/* Close button for mobile */}
            <button onClick={onClose} className="md:hidden p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors">
              <X size={20} />
            </button>
          </div>
          
          <nav className="mt-2 px-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                    isActive 
                    ? "bg-slate-50 text-emerald-700 border border-slate-100 shadow-sm font-semibold" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4">
          <Link 
            href="/dashboard/settings" 
            onClick={onClose}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
              pathname === "/dashboard/settings"
              ? "bg-slate-50 text-emerald-700 border border-slate-100 shadow-sm font-semibold" 
              : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
            }`}
          >
            <Settings size={18} />
            <span className="text-sm">Settings</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
