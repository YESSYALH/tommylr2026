import { useState } from "react";
import { TransactionType, TransactionCategory } from "@/types";
import { addTransaction } from "@/services/db";

interface TransactionModalProps {
  userId: string;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function TransactionModal({ userId, isOpen, onClose, onSuccess }: TransactionModalProps) {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<TransactionType>("income");
  const [category, setCategory] = useState<TransactionCategory>("business");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId || !amount || !description) return;
    
    setIsSubmitting(true);
    try {
      await addTransaction({
        userId,
        amount: parseFloat(amount),
        type,
        category,
        description,
        date: Date.now()
      });
      setAmount("");
      setDescription("");
      onSuccess();
    } catch (error) {
      console.error("Failed to add transaction", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 w-full max-w-md shadow-2xl relative">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Add New Record</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Type</label>
            <select 
              value={type} 
              onChange={(e) => setType(e.target.value as TransactionType)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
              <option value="asset">Asset (Investment, Cash)</option>
              <option value="liability">Liability (Debt)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Category</label>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value as TransactionCategory)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
            >
              {type === 'income' && (
                <>
                  <option value="salary">Salary</option>
                  <option value="business">Business</option>
                  <option value="investment">Investment Yield</option>
                  <option value="dividend">Dividend</option>
                </>
              )}
              {type === 'expense' && (
                <>
                  <option value="housing">Housing</option>
                  <option value="food">Food</option>
                  <option value="transport">Transport</option>
                  <option value="utilities">Utilities</option>
                  <option value="insurance">Insurance</option>
                  <option value="personal">Personal</option>
                  <option value="taxes">Taxes</option>
                </>
              )}
              {type === 'asset' && (
                <>
                  <option value="real_estate">Real Estate</option>
                  <option value="stocks">Stocks/Bonds</option>
                  <option value="crypto">Crypto</option>
                  <option value="cash">Cash/Bank</option>
                  <option value="infinite_banking">Infinite Banking Policy</option>
                </>
              )}
              {type === 'liability' && (
                <>
                  <option value="mortgage">Mortgage</option>
                  <option value="loan">Personal/Business Loan</option>
                  <option value="credit_card">Credit Card</option>
                </>
              )}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Amount ($)</label>
            <input 
              type="number" 
              step="0.01"
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
              placeholder="0.00"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Description</label>
            <input 
              type="text" 
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
              placeholder="e.g. Dividend payment"
            />
          </div>

          <div className="flex items-center gap-3 mt-8 pt-4 border-t border-slate-200">
            <button 
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 px-4 py-2.5 font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-lg transition-colors shadow-sm disabled:opacity-50 flex justify-center items-center"
            >
              {isSubmitting ? 'Saving...' : 'Save Record'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
