import { ShieldCheck, TrendingUp, Landmark, ArrowRight, Lock, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import KineticGrid from "@/components/KineticGrid";
import DirectionHover from "@/components/DirectionHover";

export default function InfiniteBankingPage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-gray-100 font-sans selection:bg-emerald-500/30 overflow-hidden">
      {/* Background Layer (Performance optimized) */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <KineticGrid />
      </div>
      
      {/* Subtle ambient glows for premium look */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900/10 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none z-0" />

      {/* Navbar for Public Pages */}
      <nav className="relative z-50 flex items-start justify-between px-6 md:px-12 py-8 max-w-[90rem] mx-auto">
        {/* TLR Premium Logo Component */}
        <Link href="/" className="flex flex-col gap-1 group hover:opacity-90 transition-opacity">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl md:text-5xl font-black tracking-tighter text-[#dc2626] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-serif">
              TLR
            </span>
            <span className="text-lg md:text-xl font-bold text-white tracking-tight">
              Tommy Lee Ruff, <span className="text-gray-400 text-sm md:text-base font-medium">CLU® ChFC®</span>
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="h-[2px] w-8 bg-[#dc2626] rounded-full"></div>
            <span className="text-[10px] md:text-xs font-semibold text-emerald-400 tracking-[0.15em] uppercase">
              Infinite Banking Specialist
            </span>
          </div>
          <span className="text-[10px] text-gray-500 font-medium tracking-wider italic mt-0.5">
            "40 Yrs. Experience"
          </span>
        </Link>
        
        <Link href="/login" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-widest flex items-center gap-2 mt-2">
          <DirectionHover title="Client Login" hoverColor="#6ee7b7" textColor="#34d399" /> 
          <ArrowRight size={16} />
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6 max-w-6xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-10 px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Infinite Banking Strategy
        </div>
        
        {/* Texto con MÁS PROTAGONISMO */}
        <h1 className="text-6xl md:text-8xl lg:text-[6.5rem] font-black text-white tracking-tighter leading-[1.05] mb-10 drop-shadow-2xl">
          Stop Sending <br className="hidden md:block" /> Your Wealth <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400">
            to Someone Else's Bank.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-14 leading-relaxed font-light drop-shadow-md">
          Business owners and executives who understand infinite banking don't just grow wealth — <strong className="font-semibold text-white">they control it, protect it, and use it on their own terms.</strong>
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <Link href="/contact" className="group relative inline-flex items-center justify-center px-12 py-6 font-bold text-xl text-[#070b14] bg-emerald-400 rounded-2xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_50px_-10px_rgba(52,211,153,0.6)]">
            <span className="relative z-10 flex items-center gap-3">
              Schedule Your Strategy Call 
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-emerald-300 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <p className="text-sm text-gray-500 font-medium tracking-[0.1em] uppercase mt-2">
            No obligation. No pitch. Just a real conversation.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative z-10 py-32 bg-[#0a0d14]/80 backdrop-blur-xl border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-emerald-500 tracking-[0.2em] uppercase mb-4">The Problem</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">High earners lose more than they realize.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Lost Interest", desc: "Every dollar you finance flows through a bank — and the interest goes with it. You're building their balance sheet, not yours." },
              { num: "02", title: "Market Risk", desc: "Market-linked accounts grow publicly, but fall publicly. One bad year can erase years of gains right when you need it most." },
              { num: "03", title: "Tied Capital", desc: "Business capital is either tied up or borrowed at someone else's terms. You have no liquidity without giving up control." },
              { num: "04", title: "Tax Exposure", desc: "Tax exposure grows as income grows — and most high earners are barely scratching the surface of what's available to them." }
            ].map((item, i) => (
              <div key={i} className="group bg-gray-900/40 border border-gray-800 rounded-3xl p-8 backdrop-blur-md hover:bg-gray-800/60 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-2">
                <div className="text-emerald-500/20 text-5xl font-black mb-6 group-hover:text-emerald-500/40 transition-colors">{item.num}</div>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-gray-400 text-[15px] leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Infinite Banking & How it Works */}
      <section className="relative z-10 py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold text-emerald-500 tracking-[0.2em] uppercase mb-4">The Solution</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">Your money.<br/>Your bank.<br/>Your rules.</h3>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" />
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              Infinite banking is a strategy built around a specially designed whole life insurance policy that functions as your own <strong className="text-white font-semibold">private banking system</strong>. You fund it, control it, and borrow against it — without losing the growth inside.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              It's not a product. It's a philosophy about who controls your money and when. The goal is to recapture the interest, opportunity costs, and fees that currently flow out of your financial life every single year.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: ShieldCheck, title: "Build a high cash-value policy", desc: "Maximize cash value from day one — not commissions. This becomes the foundation of your private banking system." },
              { icon: TrendingUp, title: "Fund it consistently", desc: "Premium payments grow your cash value, which is guaranteed, tax-deferred, and protected from creditors in most states." },
              { icon: Landmark, title: "Borrow against it", desc: "Policy loans let you access capital while the full cash value continues to grow. You use it without withdrawing it." },
              { icon: Lock, title: "Repay on your terms", desc: "No bank approval, no required repayment schedule. You become the lender and the borrower." }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-3xl bg-gray-900/30 border border-gray-800/50 hover:bg-gray-800/40 hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <step.icon size={26} className="text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-[15px] leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Advantages Grid */}
      <section className="relative z-10 py-32 bg-[#0a0d14]/80 backdrop-blur-xl border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-emerald-500 tracking-[0.2em] uppercase mb-4">The Advantages</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">What changes when you control the bank</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Recaptured interest", desc: "Stop paying interest to institutions. Keep it cycling inside your own system instead." },
              { title: "Tax-advantaged growth", desc: "Cash value grows tax-deferred. Policy loans are not considered taxable income." },
              { title: "Guaranteed, predictable", desc: "No market exposure on the core asset. Growth is contractually guaranteed." },
              { title: "Liquidity without sacrifice", desc: "Access capital when you need it without triggering taxes or surrendering growth." },
              { title: "Business capital on demand", desc: "Fund equipment, inventory, real estate, or opportunities without bank approval." },
              { title: "Legacy and estate planning", desc: "The death benefit passes income-tax-free, making this a powerful generational wealth tool." }
            ].map((adv, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-900/30 border border-gray-800/80 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="mb-6 inline-flex p-3 rounded-xl bg-emerald-500/10">
                  <CheckCircle2 size={24} className="text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{adv.title}</h4>
                <p className="text-gray-400 text-[15px] leading-relaxed font-light">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 py-40 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Ready to see what's possible?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          One conversation with Tommy can reveal how much you're leaving on the table — and what a private banking strategy could look like for your specific situation.
        </p>
        <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-lg text-[#070b14] bg-emerald-400 rounded-2xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(52,211,153,0.5)]">
          <span className="relative z-10 flex items-center gap-3">
            Schedule Your Strategy Call 
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-emerald-300 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </section>
    </main>
  );
}
