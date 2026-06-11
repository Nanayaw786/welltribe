import Link from "next/link";
import { Users, CheckCircle, Brain, Flame, Trophy, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <span className="text-2xl font-black tracking-tight text-emerald-400">WELLTRIBE</span>
        <div className="flex gap-4">
          <Link href="/sign-in" className="text-sm text-gray-400 hover:text-white transition px-4 py-2">
            Sign In
          </Link>
          <Link href="/sign-up" className="text-sm bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-5 py-2 rounded-xl transition">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-8 py-28 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold px-4 py-2 rounded-full mb-8">
          <Flame size={14} />
          7-Day Free Trial — No Credit Card
        </div>
        <h1 className="text-6xl sm:text-7xl font-black tracking-tighter leading-none mb-6">
          HEALTH IS <br />
          <span className="text-emerald-400">BETTER TOGETHER.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Join a private pod of 6–10 people with your exact health goal. 
          Check in daily, hold each other accountable, and build habits that actually stick.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-black px-8 py-4 rounded-2xl text-lg transition"
          >
            Start Free Trial <ArrowRight size={20} />
          </Link>
          <Link
            href="/sign-in"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Sign In
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-8 pb-28 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/40 transition">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-5">
            <Users size={24} className="text-emerald-400" />
          </div>
          <h3 className="text-xl font-black mb-2">Your Pod</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Get matched with 6–10 people who share your exact health goal. Small group. Big accountability.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/40 transition">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-5">
            <CheckCircle size={24} className="text-emerald-400" />
          </div>
          <h3 className="text-xl font-black mb-2">Daily Check-In</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            One tap. Yes or No. 30 seconds. Your pod sees it, reacts, and keeps you moving forward.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/40 transition">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-5">
            <Brain size={24} className="text-emerald-400" />
          </div>
          <h3 className="text-xl font-black mb-2">AI Coach</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your personal AI coach learns your patterns and sends targeted nudges before you slip.
          </p>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-t border-white/10 py-10 px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center">
          <div>
            <div className="text-3xl font-black text-emerald-400">6–10</div>
            <div className="text-gray-500 text-sm mt-1">People per pod</div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-400">30s</div>
            <div className="text-gray-500 text-sm mt-1">Daily check-in time</div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-400">$9.99</div>
            <div className="text-gray-500 text-sm mt-1">Per month after trial</div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-400 flex items-center justify-center gap-1"><Trophy size={28} /> Streaks</div>
            <div className="text-gray-500 text-sm mt-1">Pod + personal</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-8 text-center text-gray-600 text-sm">
        © 2025 WellTribe. Built for people who show up.
      </footer>

    </main>
  );
}
