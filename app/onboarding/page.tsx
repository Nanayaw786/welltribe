
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Target, Dumbbell, Moon, Salad, Brain, ChevronRight, ChevronLeft } from "lucide-react";

const GOALS = [
  { id: "lose_weight", label: "Lose Weight", description: "Burn fat, feel lighter, move better", icon: Target },
  { id: "build_muscle", label: "Build Muscle", description: "Get stronger, build lean mass", icon: Dumbbell },
  { id: "sleep_better", label: "Sleep Better", description: "Fix your sleep, boost your energy", icon: Moon },
  { id: "eat_cleaner", label: "Eat Cleaner", description: "Cut junk, fuel your body right", icon: Salad },
  { id: "reduce_stress", label: "Reduce Stress", description: "Calm your mind, find balance", icon: Brain },
];

const SCHEDULES = [
  { id: "early_bird", label: "Early Bird", description: "I wake up before 7am" },
  { id: "daytime", label: "Daytime", description: "I am most active 9am–5pm" },
  { id: "night_owl", label: "Night Owl", description: "I come alive after 8pm" },
];

const STYLES = [
  { id: "tough_love", label: "Tough Love", description: "Push me hard, no excuses" },
  { id: "supportive", label: "Supportive", description: "Encourage me, keep it positive" },
  { id: "data_driven", label: "Data Driven", description: "Show me stats and progress" },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState("");
  const [schedule, setSchedule] = useState("");
  const [style, setStyle] = useState("");

  const handleFinish = () => {
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <span className="text-xl font-black tracking-tight text-emerald-400">WELLTRIBE</span>
        <span className="text-sm text-gray-500">Step {step} of 3</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/10 h-1">
        <div
          className="bg-emerald-500 h-1 transition-all duration-500"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full px-8 py-12">

        {/* Step 1 — Goal */}
        {step === 1 && (
          <div>
            <h2 className="text-4xl font-black mb-2">What is your <span className="text-emerald-400">main goal?</span></h2>
            <p className="text-gray-400 mb-8">We will match you with a pod of people chasing the same thing.</p>
            <div className="grid grid-cols-1 gap-4">
              {GOALS.map(({ id, label, description, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setGoal(id)}
                  className={`flex items-center gap-5 p-5 rounded-2xl border-2 transition text-left ${
                    goal === id
                      ? "border-emerald-500 bg-emerald-500/10"
                      : "border-white/10 bg-white/5 hover:border-white/30"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    goal === id ? "bg-emerald-500/30" : "bg-white/10"
                  }`}>
                    <Icon size={24} className={goal === id ? "text-emerald-400" : "text-gray-400"} />
                  </div>
                  <div>
                    <div className="font-black text-lg">{label}</div>
                    <div className="text-gray-400 text-sm">{description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 — Schedule */}
        {step === 2 && (
          <div>
            <h2 className="text-4xl font-black mb-2">What is your <span className="text-emerald-400">schedule?</span></h2>
            <p className="text-gray-400 mb-8">We will time your reminders and match you with people on your rhythm.</p>
            <div className="grid grid-cols-1 gap-4">
              {SCHEDULES.map(({ id, label, description }) => (
                <button
                  key={id}
                  onClick={() => setSchedule(id)}
                  className={`flex items-center gap-5 p-5 rounded-2xl border-2 transition text-left ${
                    schedule === id
                      ? "border-emerald-500 bg-emerald-500/10"
                      : "border-white/10 bg-white/5 hover:border-white/30"
                  }`}
                >
                  <div>
                    <div className="font-black text-lg">{label}</div>
                    <div className="text-gray-400 text-sm">{description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 — Accountability Style */}
        {step === 3 && (
          <div>
            <h2 className="text-4xl font-black mb-2">How do you want to be <span className="text-emerald-400">held accountable?</span></h2>
            <p className="text-gray-400 mb-8">Your AI coach and pod will adapt to your style.</p>
            <div className="grid grid-cols-1 gap-4">
              {STYLES.map(({ id, label, description }) => (
                <button
                  key={id}
                  onClick={() => setStyle(id)}
                  className={`flex items-center gap-5 p-5 rounded-2xl border-2 transition text-left ${
                    style === id
                      ? "border-emerald-500 bg-emerald-500/10"
                      : "border-white/10 bg-white/5 hover:border-white/30"
                  }`}
                >
                  <div>
                    <div className="font-black text-lg">{label}</div>
                    <div className="text-gray-400 text-sm">{description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-10">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition font-semibold"
            >
              <ChevronLeft size={20} /> Back
            </button>
          ) : <div />}

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              disabled={step === 1 && !goal || step === 2 && !schedule}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed text-black font-black px-8 py-4 rounded-2xl transition"
            >
              Next <ChevronRight size={20} />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              disabled={!style}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed text-black font-black px-8 py-4 rounded-2xl transition"
            >
              Find My Pod <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
