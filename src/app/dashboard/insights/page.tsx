"use client";

import { PieChart, Sparkles, AlertTriangle } from "lucide-react";

export default function InsightsPage() {
  return (
    <div className="space-y-6 pb-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
          <PieChart className="text-emerald-600" size={28} />
          AI Insights & Liquidity
        </h1>
        <p className="text-slate-500">Personalized intelligence to maximize your wealth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-[0_4px_20px_-10px_rgba(52,211,153,0.3)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
            <Sparkles className="text-emerald-500" size={24} />
          </div>
          <h3 className="text-lg font-bold text-emerald-700 mb-2">Tax Optimization Opportunity</h3>
          <p className="text-slate-600 text-sm leading-relaxed font-medium">
            Based on your recent transactions, increasing your contribution to a tax-advantaged account by $2,500 before year-end could save you approximately $750 in taxes.
          </p>
          <button className="mt-4 text-emerald-600 text-sm font-bold hover:text-emerald-800 transition-colors">
            Review Strategy &rarr;
          </button>
        </div>

        <div className="bg-white border border-amber-200 rounded-2xl p-6 shadow-[0_4px_20px_-10px_rgba(251,191,36,0.3)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-50">
            <AlertTriangle className="text-amber-500" size={24} />
          </div>
          <h3 className="text-lg font-bold text-amber-600 mb-2">High Cash Drag</h3>
          <p className="text-slate-600 text-sm leading-relaxed font-medium">
            Your cash position has exceeded your target allocation of 10%. With current inflation rates, reallocating excess cash into your diversified portfolio or Infinite Banking policy is recommended.
          </p>
          <button className="mt-4 text-amber-600 text-sm font-bold hover:text-amber-700 transition-colors">
            View Recommendations &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
