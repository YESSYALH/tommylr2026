"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { getUserTransactions, deleteTransaction } from "@/services/db";
import { Transaction } from "@/types";
import { ArrowRightLeft, ArrowUpRight, ArrowDownRight, Plus, Trash2 } from "lucide-react";
import TransactionModal from "@/components/TransactionModal";

export default function TransactionsPage() {
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

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this record?")) {
      try {
        await deleteTransaction(id);
        loadData();
      } catch (error) {
        console.error("Error deleting transaction", error);
      }
    }
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
            <ArrowRightLeft className="text-emerald-600" size={28} />
            Lending Ledger
          </h1>
          <p className="text-slate-500">Review your recent activity, policy loans, and cash flow.</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-[0_4px_14px_rgba(5,150,105,0.3)]"
        >
          <Plus size={18} /> New Record
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Transaction</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider text-right">Amount</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">Loading transactions...</td>
                </tr>
              ) : transactions.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">No records found. Click "New Record" to add one.</td>
                </tr>
              ) : (
                transactions.map((t) => {
                  const isExpense = t.type === 'expense' || t.type === 'liability';
                  const dateObj = new Date(t.date);
                  const formattedDate = `${dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
                  
                  return (
                    <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl ${isExpense ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}`}>
                            {isExpense ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">{t.description}</p>
                            <p className="text-xs font-medium text-slate-500 capitalize">{t.type}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-600">{formattedDate}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs rounded-full font-bold bg-slate-100 text-slate-600 capitalize">
                          {t.category.replace('_', ' ')}
                        </span>
                      </td>
                      <td className={`px-6 py-4 text-sm font-bold text-right ${isExpense ? 'text-slate-900' : 'text-emerald-600'}`}>
                        {isExpense ? '-' : '+'}${t.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button 
                          onClick={() => handleDelete(t.id)}
                          className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Delete Record"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      <TransactionModal 
        userId={user?.uid || ""}
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSuccess={handleModalSuccess}
      />
    </div>
  );
}
