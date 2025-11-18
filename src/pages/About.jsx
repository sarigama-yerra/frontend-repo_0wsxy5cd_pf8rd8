export default function About() {
  return (
    <div className="min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="relative p-8 rounded-3xl border border-blue-500/20 bg-slate-800/60 shadow-xl overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{backgroundImage:'radial-gradient(20rem 12rem at 10% 10%,#60a5fa,transparent), radial-gradient(16rem 10rem at 90% 20%,#22d3ee,transparent), radial-gradient(14rem 8rem at 30% 90%,#a78bfa,transparent)'}} />
          <div className="relative">
            <h1 className="text-3xl font-bold text-white mb-3">About Us</h1>
            <p className="text-blue-200/90 leading-relaxed">
              We craft simple, delightful surveys that help people share opinions across technology, health, finance, education, travel, and entertainment. Our focus is a smooth experience—one thoughtful question at a time—followed by relevant offers that help fund the platform.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-blue-500/20">
                <div className="text-white font-semibold">Lightweight</div>
                <div className="text-blue-200/80 text-sm">Fast to load, easy to use.</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-blue-500/20">
                <div className="text-white font-semibold">Respectful</div>
                <div className="text-blue-200/80 text-sm">Privacy-first approach.</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-blue-500/20">
                <div className="text-white font-semibold">Human</div>
                <div className="text-blue-200/80 text-sm">A handcrafted, friendly feel.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
