"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { getUserTransactions, addTransaction } from "@/services/db";
import { Transaction, TransactionType, TransactionCategory } from "@/types";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Plus, ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";
import TransactionModal from "@/components/TransactionModal";

export default function DashboardPage() {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    if (user) {
      loadData();
    }
  }, [user]);

  const loadData = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const txs = await getUserTransactions(user.uid);
      setTransactions(txs);
    } catch (error) {
      console.error("Error loading transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleModalSuccess = () => {
    setShowAddModal(false);
    loadData();
  };

  // Calculate stats
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
  const netWorth = transactions.filter(t => t.type === 'asset').reduce((acc, t) => acc + t.amount, 0) 
                 - transactions.filter(t => t.type === 'liability').reduce((acc, t) => acc + t.amount, 0) 
                 + (totalIncome - totalExpense);

  // Prepare chart data (Group by month or simple chronological)
  // For MVP: simply map the last 10 transactions chronically
  const chartData = [...transactions].reverse().slice(-15).map(t => {
    const d = new Date(t.date);
    return {
      name: `${d.getDate()}/${d.getMonth()+1}`,
      value: t.type === 'expense' || t.type === 'liability' ? -t.amount : t.amount,
      type: t.type
    };
  });

  // Calculate cumulative for smooth chart
  let runningTotal = 0;
  const cumulativeData = chartData.map(d => {
    runningTotal += d.value;
    return { name: d.name, balance: runningTotal };
  });

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Overview</h1>
          <p className="text-slate-500 mt-1">Welcome back, <span className="text-emerald-700 font-medium">{user?.displayName || user?.email?.split('@')[0]}</span>.</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-[0_4px_14px_rgba(5,150,105,0.3)]"
        >
          <Plus size={18} /> Add Record
        </button>
      </div>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm relative overflow-hidden">
          <div className="absolute -right-4 -top-4 text-emerald-100">
            <Activity size={100} />
          </div>
          <p className="text-sm text-slate-500 font-semibold mb-2 relative z-10 uppercase tracking-wider">Total Net Worth</p>
          <h3 className="text-4xl font-bold text-slate-900 relative z-10">${netWorth.toLocaleString('en-US', {minimumFractionDigits: 2})}</h3>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-slate-500 font-semibold mb-2 uppercase tracking-wider">Total Income</p>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
              <ArrowUpRight size={24} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900">${totalIncome.toLocaleString('en-US', {minimumFractionDigits: 2})}</h3>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-slate-500 font-semibold mb-2 uppercase tracking-wider">Total Expenses</p>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
              <ArrowDownRight size={24} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900">${totalExpense.toLocaleString('en-US', {minimumFractionDigits: 2})}</h3>
          </div>
        </div>
      </div>

      {/* Chart & Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Cashflow Trend</h3>
          <div className="h-[300px] w-full">
            {cumulativeData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cumulativeData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val}`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '8px', color: '#0f172a', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                    itemStyle={{ color: '#059669', fontWeight: 'bold' }}
                  />
                  <Line type="monotone" dataKey="balance" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981', strokeWidth: 0 }} activeDot={{ r: 6, stroke: '#047857', strokeWidth: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full w-full flex items-center justify-center text-slate-400">
                Not enough data yet. Add a transaction!
              </div>
            )}
          </div>
        </div>

        {/* Recent Txs */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {transactions.slice(0, 5).map(tx => (
              <div key={tx.id} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
                <div>
                  <p className="text-sm font-medium text-slate-800">{tx.description}</p>
                  <p className="text-xs text-slate-500 capitalize">{tx.category.replace('_', ' ')}</p>
                </div>
                <div className={`text-sm font-bold ${tx.type === 'income' || tx.type === 'asset' ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {tx.type === 'expense' || tx.type === 'liability' ? '-' : '+'}${tx.amount.toLocaleString()}
                </div>
              </div>
            ))}
            {transactions.length === 0 && (
              <p className="text-sm text-slate-400 text-center py-4">No recent activity.</p>
            )}
          </div>
        </div>
      </div>

      {/* Add Transaction Modal */}
      <TransactionModal 
        userId={user?.uid || ""}
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSuccess={handleModalSuccess}
      />

    </div>
  );
}
