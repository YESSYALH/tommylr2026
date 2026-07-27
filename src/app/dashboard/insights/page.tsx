"use client";

import { PieChart, Sparkles, AlertTriangle } from "lucide-react";

export default function InsightsPage() {
  return (
    <div className="space-y-6 fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
          <PieChart className="text-emerald-500" size={28} />
          AI Insights
        </h1>
        <p className="text-gray-400">Personalized intelligence to maximize your wealth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-gradient-to-br from-emerald-900/40 to-gray-900/40 border border-emerald-500/20 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
            <Sparkles className="text-emerald-400" size={24} />
          </div>
          <h3 className="text-lg font-medium text-emerald-400 mb-2">Tax Optimization Opportunity</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Based on your recent transactions, increasing your contribution to a tax-advantaged account by $2,500 before year-end could save you approximately $750 in taxes.
          </p>
          <button className="mt-4 text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors">
            Review Strategy &rarr;
          </button>
        </div>

        <div className="bg-gradient-to-br from-yellow-900/20 to-gray-900/40 border border-yellow-500/20 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-50">
            <AlertTriangle className="text-yellow-500" size={24} />
          </div>
          <h3 className="text-lg font-medium text-yellow-500 mb-2">High Cash Drag</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Your cash position has exceeded your target allocation of 10%. With current inflation rates, reallocating excess cash into your diversified portfolio is recommended.
          </p>
          <button className="mt-4 text-yellow-500 text-sm font-medium hover:text-yellow-400 transition-colors">
            View Recommendations &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
