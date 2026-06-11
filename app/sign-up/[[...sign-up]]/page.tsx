import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-3xl font-black tracking-tight text-emerald-400">WELLTRIBE</span>
          <p className="text-gray-500 mt-2 text-sm">Start your 7-day free trial. No credit card needed.</p>
        </div>
        <SignUp appearance={{
          elements: {
            rootBox: "w-full",
            card: "bg-white/5 border border-white/10 rounded-3xl shadow-none",
            headerTitle: "text-white font-black",
            headerSubtitle: "text-gray-400",
            formButtonPrimary: "bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl",
            formFieldInput: "bg-white/10 border-white/20 text-white rounded-xl",
            formFieldLabel: "text-gray-300",
            footerActionLink: "text-emerald-400 hover:text-emerald-300",
            identityPreviewText: "text-white",
            identityPreviewEditButton: "text-emerald-400",
          }
        }} />
      </div>
    </main>
  );
}
