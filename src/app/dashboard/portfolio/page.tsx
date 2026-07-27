"use client";

import { Wallet, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const mockChartData = [
  { year: 'Year 1', premium: 100000, cashValue: 65000 },
  { year: 'Year 2', premium: 200000, cashValue: 155000 },
  { year: 'Year 3', premium: 300000, cashValue: 265000 },
  { year: 'Year 4', premium: 400000, cashValue: 395000 },
  { year: 'Year 5', premium: 500000, cashValue: 535000 }, // Break even approx
  { year: 'Year 6', premium: 600000, cashValue: 685000 },
  { year: 'Year 7', premium: 700000, cashValue: 855000 },
  { year: 'Year 8', premium: 800000, cashValue: 1045000 },
];

export default function PortfolioPage() {
  return (
    <div className="space-y-6 pb-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
          <Wallet className="text-emerald-600" size={28} />
          Policy Tracker
        </h1>
        <p className="text-slate-500">Track and manage your diverse assets and Infinite Banking policies.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-lg font-bold text-slate-900">Performance</h3>
             <select className="bg-slate-50 border border-slate-300 text-sm text-slate-700 rounded-lg px-3 py-1 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all font-medium">
               <option>Last 30 Days</option>
               <option>Last 6 Months</option>
               <option>Year to Date</option>
             </select>
          </div>
          <div className="flex-1 mt-4">
             <ResponsiveContainer width="100%" height="100%" minHeight={300}>
               <AreaChart data={mockChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                 <defs>
                   <linearGradient id="colorCashValue" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#059669" stopOpacity={0.3}/>
                     <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                   </linearGradient>
                   <linearGradient id="colorPremium" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.2}/>
                     <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                 <YAxis 
                   stroke="#94a3b8" 
                   fontSize={12} 
                   tickLine={false} 
                   axisLine={false} 
                   tickFormatter={(value) => `$${value / 1000}k`}
                 />
                 <Tooltip 
                   contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                   itemStyle={{ fontWeight: 600 }}
                   formatter={(value: any) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Number(value) || 0)}
                 />
                 <Area type="monotone" dataKey="premium" name="Paid Premiums" stroke="#94a3b8" fillOpacity={1} fill="url(#colorPremium)" strokeDasharray="5 5" />
                 <Area type="monotone" dataKey="cashValue" name="Cash Value" stroke="#059669" strokeWidth={3} fillOpacity={1} fill="url(#colorCashValue)" />
               </AreaChart>
             </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">Asset Allocation</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div> Infinite Banking
                </span>
                <span className="font-bold text-slate-900">45%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div> Real Estate
                </span>
                <span className="font-bold text-slate-900">35%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div> Crypto
                </span>
                <span className="font-bold text-slate-900">10%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div> Cash
                </span>
                <span className="font-bold text-slate-900">10%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
