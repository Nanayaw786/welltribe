
"use client";
import { useState } from "react";
import { Flame, CheckCircle, XCircle, Users, Trophy, Brain, BarChart2, Bell } from "lucide-react";

const POD_MEMBERS = [
  { name: "Marcus", checked: true, streak: 12 },
  { name: "Priya", checked: true, streak: 8 },
  { name: "Jordan", checked: false, streak: 5 },
  { name: "Aisha", checked: true, streak: 21 },
  { name: "Tyler", checked: false, streak: 3 },
  { name: "Zoe", checked: true, streak: 15 },
];

export default function DashboardPage() {
  const [checkedIn, setCheckedIn] = useState<null | boolean>(null);
  const [note, setNote] = useState("");

  const podStreak = 6;
  const myStreak = 9;
  const checkedInCount = POD_MEMBERS.filter(m => m.checked).length;

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Top Nav */}
      <nav className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <span className="text-xl font-black tracking-tight text-emerald-400">WELLTRIBE</span>
        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell size={20} className="text-gray-400 hover:text-white transition" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full" />
          </button>
          <div className="w-8 h-8 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center text-emerald-400 font-black text-sm">
            S
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">

        {/* Greeting */}
        <div>
          <h1 className="text-3xl font-black">Good morning, <span className="text-emerald-400">Samuel.</span></h1>
          <p className="text-gray-400 mt-1">Your pod is watching. Do not break the streak.</p>
        </div>

        {/* Streak Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-orange-400 mb-2">
              <Flame size={18} />
              <span className="text-sm font-bold">My Streak</span>
            </div>
            <div className="text-4xl font-black">{myStreak}<span className="text-lg text-gray-400 ml-1">days</span></div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <Users size={18} />
              <span className="text-sm font-bold">Pod Streak</span>
            </div>
            <div className="text-4xl font-black">{podStreak}<span className="text-lg text-gray-400 ml-1">days</span></div>
          </div>
        </div>

        {/* Daily Check-in */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-black mb-1">Today's Check-In</h2>
          <p className="text-gray-400 text-sm mb-5">Did you stick to your goal today?</p>

          {checkedIn === null ? (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setCheckedIn(true)}
                className="flex items-center justify-center gap-3 bg-emerald-500/10 border-2 border-emerald-500/40 hover:border-emerald-500 hover:bg-emerald-500/20 text-emerald-400 font-black py-5 rounded-2xl transition text-lg"
              >
                <CheckCircle size={24} /> Yes
              </button>
              <button
                onClick={() => setCheckedIn(false)}
                className="flex items-center justify-center gap-3 bg-red-500/10 border-2 border-red-500/40 hover:border-red-500 hover:bg-red-500/20 text-red-400 font-black py-5 rounded-2xl transition text-lg"
              >
                <XCircle size={24} /> No
              </button>
            </div>
          ) : (
            <div className={`rounded-2xl p-5 border-2 ${checkedIn ? "bg-emerald-500/10 border-emerald-500/40" : "bg-red-500/10 border-red-500/40"}`}>
              <div className={`flex items-center gap-2 font-black text-lg mb-3 ${checkedIn ? "text-emerald-400" : "text-red-400"}`}>
                {checkedIn ? <CheckCircle size={22} /> : <XCircle size={22} />}
                {checkedIn ? "Checked in! Your pod can see this." : "Missed today. Tomorrow is a new day."}
              </div>
              <textarea
                value={note}
                onChange={e => setNote(e.target.value)}
                placeholder="Add a note for your pod... (optional)"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-600 resize-none focus:outline-none focus:border-emerald-500/50"
                rows={2}
              />
            </div>
          )}
        </div>

        {/* Pod Status */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-black">Pod Status</h2>
            <span className="text-sm text-emerald-400 font-bold">{checkedInCount}/{POD_MEMBERS.length} checked in</span>
          </div>
          <div className="space-y-3">
            {POD_MEMBERS.map((member) => (
              <div key={member.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm font-black">
                    {member.name[0]}
                  </div>
                  <span className="font-semibold">{member.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-orange-400 text-sm">
                    <Flame size={14} />
                    <span className="font-bold">{member.streak}</span>
                  </div>
                  {member.checked ? (
                    <CheckCircle size={20} className="text-emerald-400" />
                  ) : (
                    <XCircle size={20} className="text-gray-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Coach Nudge */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-6">
          <div className="flex items-center gap-2 text-emerald-400 font-black mb-2">
            <Brain size={18} />
            AI Coach
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            "You have been consistent for 9 days straight — that puts you in the top 15% of your pod. 
            Keep this momentum through the weekend, that is when most people slip."
          </p>
        </div>

        {/* Bottom Nav */}
        <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 flex items-center justify-around px-6 py-4">
          <button className="flex flex-col items-center gap-1 text-emerald-400">
            <BarChart2 size={22} />
            <span className="text-xs font-bold">Dashboard</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-white transition">
            <Users size={22} />
            <span className="text-xs font-bold">Pod</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-white transition">
            <Trophy size={22} />
            <span className="text-xs font-bold">Progress</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-white transition">
            <Brain size={22} />
            <span className="text-xs font-bold">Coach</span>
          </button>
        </div>

        {/* Bottom padding for fixed nav */}
        <div className="h-24" />
      </div>
    </main>
  );
}
