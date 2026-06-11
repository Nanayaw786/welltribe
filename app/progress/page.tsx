
"use client";
import { useState } from "react";
import { Flame, Trophy, Star, Target, Zap, Shield, BarChart2, Users, Brain } from "lucide-react";
import Link from "next/link";

const generateHeatmap = () => {
  const days = [];
  for (let i = 89; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const rand = Math.random();
    const status = i < 9 ? "checked" : rand > 0.25 ? "checked" : rand > 0.1 ? "missed" : "empty";
    days.push({ date: date.toISOString().split("T")[0], status });
  }
  return days;
};

const HEATMAP = generateHeatmap();

const BADGES = [
  { id: 1, name: "First Step", description: "Completed your first check-in", icon: Star, earned: true, color: "emerald" },
  { id: 2, name: "On Fire", description: "7-day streak", icon: Flame, earned: true, color: "orange" },
  { id: 3, name: "Tribe Leader", description: "Top checker in pod for a week", icon: Trophy, earned: true, color: "yellow" },
  { id: 4, name: "Sharpshooter", description: "30-day streak", icon: Target, earned: false, color: "blue" },
  { id: 5, name: "Unstoppable", description: "60-day streak", icon: Zap, earned: false, color: "purple" },
  { id: 6, name: "Iron Will", description: "100-day streak", icon: Shield, earned: false, color: "red" },
];

const STATS = [
  { label: "Total Check-ins", value: "74" },
  { label: "Current Streak", value: "9" },
  { label: "Longest Streak", value: "21" },
  { label: "Completion Rate", value: "82%" },
];

export default function ProgressPage() {
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);

  const weeks: typeof HEATMAP[] = [];
  for (let i = 0; i < HEATMAP.length; i += 7) {
    weeks.push(HEATMAP.slice(i, i + 7));
  }

  return (
    <main className="min-h-screen bg-black text-white pb-32">

      {/* Top Nav */}
      <nav className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <span className="text-xl font-black tracking-tight text-emerald-400">WELLTRIBE</span>
        <div className="w-8 h-8 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center text-emerald-400 font-black text-sm">
          S
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-8 space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-black">Your <span className="text-emerald-400">Progress</span></h1>
          <p className="text-gray-400 mt-1">90 days of accountability tracked.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {STATS.map(({ label, value }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-3xl font-black text-emerald-400">{value}</div>
              <div className="text-gray-400 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Heatmap */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-black mb-4">Check-In Heatmap</h2>
          <div className="flex gap-1 flex-wrap">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1">
                {week.map((day) => (
                  <div
                    key={day.date}
                    onMouseEnter={() => setHoveredDay(day.date)}
                    onMouseLeave={() => setHoveredDay(null)}
                    className={`w-7 h-7 rounded-md transition cursor-pointer ${
                      day.status === "checked"
                        ? "bg-emerald-500 hover:bg-emerald-400"
                        : day.status === "missed"
                        ? "bg-red-500/40 hover:bg-red-500/60"
                        : "bg-white/5 hover:bg-white/10"
                    }`}
                    title={day.date}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
            <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-emerald-500" /> Checked in</div>
            <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-red-500/40" /> Missed</div>
            <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-white/5" /> No data</div>
          </div>
          {hoveredDay && (
            <div className="mt-2 text-xs text-emerald-400 font-bold">{hoveredDay}</div>
          )}
        </div>

        {/* Badges */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-black mb-5">Badges</h2>
          <div className="grid grid-cols-3 gap-4">
            {BADGES.map(({ id, name, description, icon: Icon, earned, color }) => (
              <div
                key={id}
                className={`flex flex-col items-center text-center p-4 rounded-2xl border transition ${
                  earned
                    ? "bg-white/5 border-white/20"
                    : "bg-white/[0.02] border-white/5 opacity-40"
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 ${
                  earned ? `bg-${color}-500/20` : "bg-white/5"
                }`}>
                  <Icon size={22} className={earned ? `text-${color}-400` : "text-gray-600"} />
                </div>
                <div className="font-black text-xs mb-1">{name}</div>
                <div className="text-gray-500 text-xs leading-tight">{description}</div>
                {earned && (
                  <div className="mt-2 text-xs text-emerald-400 font-bold">Earned</div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 flex items-center justify-around px-6 py-4">
        <Link href="/dashboard" className="flex flex-col items-center gap-1 text-gray-600 hover:text-white transition">
          <BarChart2 size={22} />
          <span className="text-xs font-bold">Dashboard</span>
        </Link>
        <Link href="/pod" className="flex flex-col items-center gap-1 text-gray-600 hover:text-white transition">
          <Users size={22} />
          <span className="text-xs font-bold">Pod</span>
        </Link>
        <Link href="/progress" className="flex flex-col items-center gap-1 text-emerald-400">
          <Trophy size={22} />
          <span className="text-xs font-bold">Progress</span>
        </Link>
        <Link href="/coach" className="flex flex-col items-center gap-1 text-gray-600 hover:text-white transition">
          <Brain size={22} />
          <span className="text-xs font-bold">Coach</span>
        </Link>
      </div>
    </main>
  );
}
