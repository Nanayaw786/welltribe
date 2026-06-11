
"use client";
import { useState } from "react";
import { Flame, CheckCircle, XCircle, Users, Trophy, Brain, BarChart2, Send } from "lucide-react";
import Link from "next/link";

const FEED = [
  {
    id: 1,
    name: "Aisha",
    initial: "A",
    time: "7:02 AM",
    checked: true,
    streak: 21,
    note: "Hit the gym before work. Feeling unstoppable.",
    reactions: { fire: 3, hug: 0, cheer: 2 },
  },
  {
    id: 2,
    name: "Priya",
    initial: "P",
    time: "7:45 AM",
    checked: true,
    streak: 8,
    note: "Meal prepped for the whole week. No excuses now.",
    reactions: { fire: 2, hug: 1, cheer: 4 },
  },
  {
    id: 3,
    name: "Marcus",
    initial: "M",
    time: "8:10 AM",
    checked: true,
    streak: 12,
    note: "",
    reactions: { fire: 1, hug: 0, cheer: 1 },
  },
  {
    id: 4,
    name: "Jordan",
    initial: "J",
    time: "9:30 AM",
    checked: false,
    streak: 5,
    note: "Rough morning. Will try to make it up tonight.",
    reactions: { fire: 0, hug: 4, cheer: 1 },
  },
  {
    id: 5,
    name: "Zoe",
    initial: "Z",
    time: "10:15 AM",
    checked: true,
    streak: 15,
    note: "15 day streak! Lets go tribe!",
    reactions: { fire: 5, hug: 2, cheer: 6 },
  },
];

const MESSAGES = [
  { id: 1, name: "Aisha", initial: "A", text: "Who else is doing a morning workout tomorrow?", time: "8:00 AM" },
  { id: 2, name: "Zoe", initial: "Z", text: "I am in! 6am. Lets hold each other to it.", time: "8:05 AM" },
  { id: 3, name: "Marcus", initial: "M", text: "Jordan you good? We need you back on streak.", time: "9:45 AM" },
];

export default function PodPage() {
  const [tab, setTab] = useState<"feed" | "chat">("feed");
  const [message, setMessage] = useState("");
  const [reactions, setReactions] = useState<Record<number, string>>({});
  const [messages, setMessages] = useState(MESSAGES);

  const handleReact = (feedId: number, type: string) => {
    setReactions(prev => ({ ...prev, [feedId]: type }));
  };

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      name: "Samuel",
      initial: "S",
      text: message,
      time: "Now",
    }]);
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Top Nav */}
      <nav className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <span className="text-xl font-black tracking-tight text-emerald-400">WELLTRIBE</span>
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1">
          <Users size={14} className="text-emerald-400" />
          <span className="text-sm font-bold text-gray-300">Lose Weight Pod</span>
        </div>
      </nav>

      {/* Tabs */}
      <div className="flex border-b border-white/10">
        <button
          onClick={() => setTab("feed")}
          className={`flex-1 py-4 text-sm font-black transition ${tab === "feed" ? "text-emerald-400 border-b-2 border-emerald-400" : "text-gray-500 hover:text-white"}`}
        >
          POD FEED
        </button>
        <button
          onClick={() => setTab("chat")}
          className={`flex-1 py-4 text-sm font-black transition ${tab === "chat" ? "text-emerald-400 border-b-2 border-emerald-400" : "text-gray-500 hover:text-white"}`}
        >
          GROUP CHAT
        </button>
      </div>

      {/* Feed Tab */}
      {tab === "feed" && (
        <div className="max-w-2xl mx-auto px-6 py-6 space-y-4 pb-32">
          {FEED.map((item) => (
            <div key={item.id} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-black">
                    {item.initial}
                  </div>
                  <div>
                    <div className="font-black">{item.name}</div>
                    <div className="text-gray-500 text-xs">{item.time}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-orange-400 text-sm">
                    <Flame size={14} />
                    <span className="font-bold">{item.streak}</span>
                  </div>
                  {item.checked ? (
                    <div className="flex items-center gap-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">
                      <CheckCircle size={12} /> Done
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full">
                      <XCircle size={12} /> Missed
                    </div>
                  )}
                </div>
              </div>
              {item.note && (
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{item.note}</p>
              )}
              {/* Reactions */}
              <div className="flex items-center gap-2">
                {[
                  { type: "fire", label: "Fire", count: item.reactions.fire },
                  { type: "hug", label: "Hug", count: item.reactions.hug },
                  { type: "cheer", label: "Cheer", count: item.reactions.cheer },
                ].map(({ type, label, count }) => (
                  <button
                    key={type}
                    onClick={() => handleReact(item.id, type)}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border transition ${
                      reactions[item.id] === type
                        ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
                        : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30"
                    }`}
                  >
                    {label} {count + (reactions[item.id] === type ? 1 : 0)}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Chat Tab */}
      {tab === "chat" && (
        <div className="max-w-2xl mx-auto flex flex-col h-[calc(100vh-180px)]">
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.name === "Samuel" ? "flex-row-reverse" : ""}`}>
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-black text-sm flex-shrink-0">
                  {msg.initial}
                </div>
                <div className={`max-w-xs ${msg.name === "Samuel" ? "items-end" : "items-start"} flex flex-col`}>
                  <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.name === "Samuel"
                      ? "bg-emerald-500 text-black font-semibold"
                      : "bg-white/10 text-white"
                  }`}>
                    {msg.text}
                  </div>
                  <span className="text-gray-600 text-xs mt-1">{msg.name} · {msg.time}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Message Input */}
          <div className="px-6 py-4 border-t border-white/10 flex gap-3">
            <input
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              placeholder="Message your pod..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50"
            />
            <button
              onClick={handleSend}
              className="w-11 h-11 bg-emerald-500 hover:bg-emerald-400 rounded-xl flex items-center justify-center transition"
            >
              <Send size={18} className="text-black" />
            </button>
          </div>
        </div>
      )}

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 flex items-center justify-around px-6 py-4">
        <Link href="/dashboard" className="flex flex-col items-center gap-1 text-gray-600 hover:text-white transition">
          <BarChart2 size={22} />
          <span className="text-xs font-bold">Dashboard</span>
        </Link>
        <Link href="/pod" className="flex flex-col items-center gap-1 text-emerald-400">
          <Users size={22} />
          <span className="text-xs font-bold">Pod</span>
        </Link>
        <Link href="/progress" className="flex flex-col items-center gap-1 text-gray-600 hover:text-white transition">
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
