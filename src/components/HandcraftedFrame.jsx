export default function HandcraftedFrame({ children, title }) {
  return (
    <div className="relative rounded-[28px] p-[2px] bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-fuchsia-400/20">
      <div className="rounded-[26px] bg-slate-900/60 backdrop-blur border border-white/5">
        <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs tracking-wider uppercase bg-slate-900/90 border border-white/10 text-blue-200/90">
          {title}
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />
    </div>
  );
}
