export default function HandcraftedFrame({ children, title }) {
  return (
    <div className="relative soft-card inner-shadow p-[2px]">
      <div className="rounded-[22px] bg-white border border-neutral-200/80">
        <div className="badge-cap">{title}</div>
        <div className="p-6">
          {children}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[28px]" />
    </div>
  );
}
