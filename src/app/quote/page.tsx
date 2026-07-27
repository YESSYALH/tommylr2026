"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  ChevronRight, 
  ArrowLeft, 
  Activity, 
  CheckCircle2, 
  FileSignature,
  Building,
  Loader2,
  DollarSign
} from "lucide-react";

type Step = 'demographics' | 'loading' | 'quotes' | 'eapp' | 'success';

export default function QuoteSimulator() {
  const [step, setStep] = useState<Step>('demographics');
  
  // Form State
  const [formData, setFormData] = useState({
    age: "45",
    gender: "Male",
    state: "Arkansas",
    health: "Excellent",
    coverage: "1000000",
  });

  // Mock Quotes
  const [selectedQuote, setSelectedQuote] = useState<any>(null);

  // Transition to quotes
  const handleGetQuotes = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loading');
    
    // Simulate API call to iPipeline
    setTimeout(() => {
      setStep('quotes');
    }, 3500); // 3.5 seconds of "searching"
  };

  // e-App Signature
  const [signature, setSignature] = useState("");

  const handleSubmitApp = (e: React.FormEvent) => {
    e.preventDefault();
    if(signature) {
      setStep('success');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative overflow-hidden">
      {/* Navbar */}
      <header className="absolute top-0 w-full z-50 p-6 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-slate-200">
        <Link href="/" className="flex items-center gap-2 text-slate-900">
          <ShieldCheck className="text-emerald-600" size={28} />
          <span className="font-bold text-xl tracking-tight">Tommy Lee Ruff</span>
        </Link>
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-4 py-2 rounded-full">
          <Activity size={16} className="text-emerald-500" />
          iPipeline Demo Env
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-6 mt-20">
        
        {/* STEP 1: Demographics */}
        {step === 'demographics' && (
          <div className="w-full max-w-xl bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">See your exact numbers.</h1>
              <p className="text-slate-500 text-lg">No obligations. Powered by real-time API pricing.</p>
            </div>

            <form onSubmit={handleGetQuotes} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Current Age</label>
                  <input 
                    type="number" 
                    required 
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-lg font-medium text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Gender</label>
                  <select 
                    value={formData.gender}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-lg font-medium text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">State</label>
                  <select 
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-lg font-medium text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                  >
                    <option>Arkansas</option>
                    <option>Texas</option>
                    <option>Florida</option>
                    <option>California</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Health Rating</label>
                  <select 
                    value={formData.health}
                    onChange={(e) => setFormData({...formData, health: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-lg font-medium text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                  >
                    <option>Excellent (Super Preferred)</option>
                    <option>Good (Preferred)</option>
                    <option>Average (Standard)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Desired Coverage Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg">$</span>
                  <select 
                    value={formData.coverage}
                    onChange={(e) => setFormData({...formData, coverage: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 pl-8 text-lg font-medium text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all appearance-none"
                  >
                    <option value="500000">500,000</option>
                    <option value="1000000">1,000,000</option>
                    <option value="2000000">2,000,000</option>
                    <option value="5000000">5,000,000</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg p-5 rounded-xl transition-all shadow-lg hover:shadow-emerald-600/30 flex items-center justify-center gap-2 group"
              >
                Scan Market Quotes
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        )}

        {/* STEP 2: Loading State (iPipeline LifePipe Simulation) */}
        {step === 'loading' && (
          <div className="flex flex-col items-center justify-center text-center max-w-md animate-in fade-in duration-500">
            <div className="relative w-24 h-24 mb-8">
              <div className="absolute inset-0 border-4 border-emerald-100 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-emerald-600 rounded-full border-t-transparent animate-spin"></div>
              <Activity className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Connecting to iPipeline...</h2>
            <p className="text-slate-500 mb-6">Pinging endpoints for {formData.state}. Applying {formData.health} rating algorithms.</p>
            
            <div className="w-full bg-white rounded-xl p-4 border border-slate-200 shadow-sm text-left flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <CheckCircle2 className="text-emerald-500" size={18} /> Authenticating GAID...
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <CheckCircle2 className="text-emerald-500" size={18} /> Fetching MassMutual tables...
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-400">
                <Loader2 className="animate-spin text-slate-400" size={18} /> Awaiting Guardian Life...
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Quotes Results */}
        {step === 'quotes' && (
          <div className="w-full max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={() => setStep('demographics')}
                className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-50 text-slate-600 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Approved Matches</h2>
                <p className="text-slate-500">Real-time Whole Life quotes for a {formData.age} yr old {formData.gender} in {formData.state}.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Quote Card 1 */}
              <div className="bg-white rounded-3xl p-8 border-2 border-emerald-500 shadow-xl relative transform md:-translate-y-4">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  BEST FOR FAMILY BANKING
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                    <Building className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xl">MassMutual</h3>
                    <p className="text-slate-500 text-sm">Whole Life Legacy 100</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="text-5xl font-black text-slate-900 mb-2 flex items-start">
                    <span className="text-2xl mt-1">$</span>
                    {(parseInt(formData.coverage) * 0.0014).toFixed(0)}
                    <span className="text-xl text-slate-500 font-medium self-end mb-1 ml-1">/mo</span>
                  </div>
                  <p className="text-emerald-600 font-bold bg-emerald-50 inline-block px-3 py-1 rounded-lg text-sm">
                    Guaranteed Cash Value Growth
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                    Dividends paid consecutively since 1869.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                    PUA Rider available for rapid liquidity.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                    A++ Superior Rating (A.M. Best).
                  </li>
                </ul>

                <button 
                  onClick={() => {
                    setSelectedQuote("MassMutual");
                    setStep('eapp');
                  }}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold p-4 rounded-xl transition-colors"
                >
                  Start Application
                </button>
              </div>

              {/* Quote Card 2 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 transition-colors opacity-90">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                    <Building className="text-slate-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xl">Guardian Life</h3>
                    <p className="text-slate-500 text-sm">Whole Life L95</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="text-5xl font-black text-slate-900 mb-2 flex items-start">
                    <span className="text-2xl mt-1">$</span>
                    {(parseInt(formData.coverage) * 0.00155).toFixed(0)}
                    <span className="text-xl text-slate-500 font-medium self-end mb-1 ml-1">/mo</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <CheckCircle2 className="text-slate-300 shrink-0" size={20} />
                    High early cash value index.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <CheckCircle2 className="text-slate-300 shrink-0" size={20} />
                    Direct recognition policy.
                  </li>
                </ul>

                <button 
                  onClick={() => {
                    setSelectedQuote("Guardian Life");
                    setStep('eapp');
                  }}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold p-4 rounded-xl transition-colors mt-auto"
                >
                  Start Application
                </button>
              </div>

              {/* Quote Card 3 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 transition-colors opacity-90">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                    <Building className="text-slate-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xl">New York Life</h3>
                    <p className="text-slate-500 text-sm">Custom Whole Life</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="text-5xl font-black text-slate-900 mb-2 flex items-start">
                    <span className="text-2xl mt-1">$</span>
                    {(parseInt(formData.coverage) * 0.0016).toFixed(0)}
                    <span className="text-xl text-slate-500 font-medium self-end mb-1 ml-1">/mo</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <CheckCircle2 className="text-slate-300 shrink-0" size={20} />
                    Largest mutual insurer in US.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <CheckCircle2 className="text-slate-300 shrink-0" size={20} />
                    Non-direct recognition option.
                  </li>
                </ul>

                <button 
                  onClick={() => {
                    setSelectedQuote("New York Life");
                    setStep('eapp');
                  }}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold p-4 rounded-xl transition-colors mt-auto"
                >
                  Start Application
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: e-App Simulation */}
        {step === 'eapp' && (
          <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 text-emerald-600 font-bold mb-1">
                  <FileSignature size={20} /> iGO Evolve™ e-App
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{selectedQuote} Application</h2>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-500">Coverage</p>
                <p className="font-bold text-slate-900">${parseInt(formData.coverage).toLocaleString()}</p>
              </div>
            </div>

            <form onSubmit={handleSubmitApp} className="space-y-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-500" size={20} /> Pre-filled from iPipeline
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-500 block">Applicant Age</span>
                    <span className="font-bold text-slate-900">{formData.age}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">State of Issue</span>
                    <span className="font-bold text-slate-900">{formData.state}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Health Rating</span>
                    <span className="font-bold text-slate-900">{formData.health}</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Electronic Signature</label>
                <p className="text-sm text-slate-500 mb-4">Type your full legal name to electronically sign this application. This verifies your identity for {selectedQuote}.</p>
                <input 
                  type="text" 
                  required
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-4 text-xl font-writing text-slate-900 outline-none focus:border-emerald-500 transition-all text-center"
                  style={{ fontFamily: "'Dancing Script', cursive, sans-serif" }}
                />
              </div>

              <div className="flex gap-4">
                <button 
                  type="button"
                  onClick={() => setStep('quotes')}
                  className="px-6 py-4 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Back
                </button>
                <button 
                  type="submit"
                  onClick={() => setStep('success')}
                  className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold p-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  Submit to Carrier
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 5: Success */}
        {step === 'success' && (
          <div className="text-center max-w-lg animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-emerald-600" size={48} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Application Submitted!</h2>
            <p className="text-lg text-slate-500 mb-8">
              Your application was submitted "In Good Order" to {selectedQuote} via the iPipeline gateway. A certified Tommy Ruff agent in {formData.state} has been notified and will contact you to schedule your brief medical exam.
            </p>
            <Link 
              href="/"
              className="inline-block bg-slate-900 text-white font-bold px-8 py-4 rounded-full hover:bg-slate-800 transition-colors"
            >
              Return Home
            </Link>
          </div>
        )}

      </main>
    </div>
  );
}
