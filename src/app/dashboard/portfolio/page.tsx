"use client";

import { Wallet, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="space-y-6 fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
          <Wallet className="text-emerald-500" size={28} />
          Portfolio
        </h1>
        <p className="text-gray-400">Track and manage your diverse assets and investments.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-lg font-medium text-white">Performance</h3>
             <select className="bg-gray-900 border border-gray-700 text-sm text-gray-300 rounded-lg px-3 py-1 outline-none focus:border-emerald-500 transition-colors">
               <option>Last 30 Days</option>
               <option>Last 6 Months</option>
               <option>Year to Date</option>
             </select>
          </div>
          <div className="flex-1 border border-dashed border-gray-700/50 rounded-xl flex items-center justify-center bg-gray-900/20">
             <p className="text-gray-500 flex items-center gap-2">
               <TrendingUp size={16} /> Chart visualization pending integration (Recharts)
             </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-sm font-medium text-gray-400 mb-4">Asset Allocation</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Stocks
                </span>
                <span className="font-medium text-white">45%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div> Real Estate
                </span>
                <span className="font-medium text-white">35%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div> Crypto
                </span>
                <span className="font-medium text-white">10%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div> Cash
                </span>
                <span className="font-medium text-white">10%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
