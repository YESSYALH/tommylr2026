"use client";

import { ArrowRightLeft, ArrowUpRight, ArrowDownRight, Plus } from "lucide-react";

export default function TransactionsPage() {
  const transactions = [
    { id: 1, title: "Apple Inc. (AAPL)", type: "Buy", amount: "-$1,250.00", date: "Jul 24, 2026", status: "Completed", isExpense: true },
    { id: 2, title: "Monthly Dividend", type: "Income", amount: "+$450.00", date: "Jul 22, 2026", status: "Completed", isExpense: false },
    { id: 3, title: "Real Estate Trust", type: "Buy", amount: "-$5,000.00", date: "Jul 20, 2026", status: "Pending", isExpense: true },
  ];

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
        <button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-[0_4px_14px_rgba(5,150,105,0.3)]">
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
                <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transactions.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${t.isExpense ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}`}>
                        {t.isExpense ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{t.title}</p>
                        <p className="text-xs font-medium text-slate-500">{t.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600">{t.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs rounded-full font-bold ${
                      t.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {t.status}
                    </span>
                  </td>
                  <td className={`px-6 py-4 text-sm font-bold text-right ${t.isExpense ? 'text-slate-900' : 'text-emerald-600'}`}>
                    {t.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
