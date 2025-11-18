export default function About() {
  return (
    <div className="min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="relative soft-card inner-shadow p-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{backgroundImage:'radial-gradient(20rem 12rem at 10% 10%,#000,transparent), radial-gradient(16rem 10rem at 90% 20%,#000,transparent), radial-gradient(14rem 8rem at 30% 90%,#000,transparent)'}} />
          <div className="relative">
            <h1 className="text-3xl font-bold text-neutral-900 mb-3">About Us</h1>
            <p className="text-neutral-600 leading-relaxed">
              We craft simple, delightful surveys that help people share opinions across technology, health, finance, education, travel, and entertainment. Our focus is a smooth experience—one thoughtful question at a time—followed by relevant offers that help fund the platform.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] inner-shadow">
                <div className="text-neutral-900 font-semibold">Lightweight</div>
                <div className="text-neutral-600 text-sm">Fast to load, easy to use.</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] inner-shadow">
                <div className="text-neutral-900 font-semibold">Respectful</div>
                <div className="text-neutral-600 text-sm">Privacy-first approach.</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] inner-shadow">
                <div className="text-neutral-900 font-semibold">Human</div>
                <div className="text-neutral-600 text-sm">A handcrafted, friendly feel.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
