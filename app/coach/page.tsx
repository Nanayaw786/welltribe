
"use client";
import { useState } from "react";
import { Brain, Send, Zap, TrendingUp, AlertTriangle, BarChart2, Users, Trophy } from "lucide-react";
import Link from "next/link";

const INSIGHTS = [
  {
    icon: TrendingUp,
    color: "emerald",
    title: "Your Best Day",
    body: "You check in most consistently on Mondays and Tuesdays. Your weekend completion rate is 61% — focus there.",
  },
  {
    icon: AlertTriangle,
    color: "orange",
    title: "Slip Pattern Detected",
    body: "You have missed 3 of the last 4 Sundays. Your AI coach will send you an extra nudge this Sunday at 7pm.",
  },
  {
    icon: Zap,
    color: "yellow",
    title: "Streak Opportunity",
    body: "You are 1 day away from your longest streak ever. Check in today and break your personal record.",
  },
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    role: "coach",
    text: "Hey Samuel. I have been watching your patterns. You are doing well — 9 days straight is no joke. What is on your mind today?",
  },
];

export default function CoachPage() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const QUICK_PROMPTS = [
    "Why do I keep missing Sundays?",
    "How do I push through when I feel lazy?",
    "What should my goal be this week?",
    "Am I on track compared to my pod?",
  ];

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    const userMsg = { id: messages.length + 1, role: "user", text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses: Record<string, string> = {
        "Why do I keep missing Sundays?": "Sundays are a transition day — your routine breaks down because there is no structure forcing you to act. Try anchoring your Sunday check-in to something you already do, like your morning coffee or before your first meal.",
        "How do I push through when I feel lazy?": "Do not rely on motivation — it is unreliable. Instead, shrink the habit to its smallest form. On a lazy day, your only job is to open the app and tap Yes or No. That is it. Momentum follows action, not the other way around.",
        "What should my goal be this week?": "Based on your pattern, I want you to focus on one thing: check in before 9am every day this week. Morning check-ins correlate with 3x higher completion rates in your pod. Set a 7am alarm right now.",
        "Am I on track compared to my pod?": "You are sitting at 82% completion — that puts you 2nd in your pod behind Aisha at 95%. The gap is winnable. Three more consistent days and you take the top spot.",
      };
      const reply = responses[text] || "That is a great question. Based on your check-in history, I can see you are building real momentum. Stay consistent, communicate with your pod, and remember — small daily actions compound into massive results.";
      setMessages(prev => [...prev, { id: prev.length + 1, role: "coach", text: reply }]);
      setLoading(false);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-black text-white pb-32">

      {/* Top Nav */}
      <nav className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <span className="text-xl font-black tracking-tight text-emerald-400">WELLTRIBE</span>
        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
          <Brain size={14} className="text-emerald-400" />
          <span className="text-sm font-bold text-emerald-400">AI Coach</span>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-black">Your <span className="text-emerald-400">AI Coach</span></h1>
          <p className="text-gray-400 mt-1">Powered by Gemini. Learns your patterns. Always in your corner.</p>
        </div>

        {/* Insights */}
        <div className="space-y-3">
          {INSIGHTS.map(({ icon: Icon, color, title, body }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex gap-4">
              <div className={`w-10 h-10 rounded-xl bg-${color}-500/20 flex items-center justify-center flex-shrink-0`}>
                <Icon size={20} className={`text-${color}-400`} />
              </div>
              <div>
                <div className="font-black mb-1">{title}</div>
                <div className="text-gray-400 text-sm leading-relaxed">{body}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-white/10 flex items-center gap-2">
            <Brain size={16} className="text-emerald-400" />
            <span className="font-black text-sm">Chat with your coach</span>
          </div>

          {/* Messages */}
          <div className="p-5 space-y-4 max-h-80 overflow-y-auto">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0 ${
                  msg.role === "coach" ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-400" : "bg-white/10 border border-white/20 text-white"
                }`}>
                  {msg.role === "coach" ? <Brain size={14} /> : "S"}
                </div>
                <div className={`max-w-xs px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "coach"
                    ? "bg-white/10 text-white"
                    : "bg-emerald-500 text-black font-semibold"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <Brain size={14} className="text-emerald-400" />
                </div>
                <div className="bg-white/10 px-4 py-3 rounded-2xl text-sm text-gray-400">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompts */}
          <div className="px-5 pb-3 flex gap-2 flex-wrap">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="text-xs bg-white/5 border border-white/10 hover:border-emerald-500/40 text-gray-300 hover:text-emerald-400 px-3 py-1.5 rounded-full transition font-semibold"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-5 pb-5 flex gap-3">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend(input)}
              placeholder="Ask your coach anything..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50"
            />
            <button
              onClick={() => handleSend(input)}
              className="w-11 h-11 bg-emerald-500 hover:bg-emerald-400 rounded-xl flex items-center justify-center transition"
            >
              <Send size={16} className="text-black" />
            </button>
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
        <Link href="/progress" className="flex flex-col items-center gap-1 text-gray-600 hover:text-white transition">
          <Trophy size={22} />
          <span className="text-xs font-bold">Progress</span>
        </Link>
        <Link href="/coach" className="flex flex-col items-center gap-1 text-emerald-400">
          <Brain size={22} />
          <span className="text-xs font-bold">Coach</span>
        </Link>
      </div>
    </main>
  );
}
