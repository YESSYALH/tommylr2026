import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="dashboard-container" style={{ display: "flex", flex: 1 }}>
        <aside style={{ width: "250px", borderRight: "1px solid rgba(255,255,255,0.1)", padding: "2rem" }}>
           <h2 style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>Secure Wealth</h2>
           <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
             <span style={{ color: "var(--primary)" }}>Dashboard</span>
             <span style={{ color: "#8b949e" }}>Portfolio</span>
             <span style={{ color: "#8b949e" }}>Transactions</span>
           </nav>
        </aside>
        <main style={{ flex: 1, padding: "2rem" }}>
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}
