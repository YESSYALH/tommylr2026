"use client";

import { ArrowRightLeft, ArrowUpRight, ArrowDownRight, Plus } from "lucide-react";

export default function TransactionsPage() {
  const transactions = [
    { id: 1, title: "Apple Inc. (AAPL)", type: "Buy", amount: "-$1,250.00", date: "Jul 24, 2026", status: "Completed", isExpense: true },
    { id: 2, title: "Monthly Dividend", type: "Income", amount: "+$450.00", date: "Jul 22, 2026", status: "Completed", isExpense: false },
    { id: 3, title: "Real Estate Trust", type: "Buy", amount: "-$5,000.00", date: "Jul 20, 2026", status: "Pending", isExpense: true },
  ];

  return (
    <div className="space-y-6 fade-in">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <ArrowRightLeft className="text-emerald-500" size={28} />
            Transactions
          </h1>
          <p className="text-gray-400">Review your recent activity and cash flow.</p>
        </div>
        <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-lg shadow-emerald-600/20">
          <Plus size={16} /> New Transaction
        </button>
      </div>

      <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm overflow-hidden mt-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700/50 bg-gray-900/30">
              <th className="px-6 py-4 text-sm font-medium text-gray-400">Transaction</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-400">Date</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-400">Status</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-400 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/50">
            {transactions.map((t) => (
              <tr key={t.id} className="hover:bg-gray-800/60 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${t.isExpense ? 'bg-red-500/10 text-red-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                      {t.isExpense ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{t.title}</p>
                      <p className="text-xs text-gray-500">{t.type}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-400">{t.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 text-xs rounded-full font-medium ${
                    t.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                  }`}>
                    {t.status}
                  </span>
                </td>
                <td className={`px-6 py-4 text-sm font-medium text-right ${t.isExpense ? 'text-white' : 'text-emerald-400'}`}>
                  {t.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
