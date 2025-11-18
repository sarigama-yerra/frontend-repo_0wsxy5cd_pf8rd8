import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    `soft-btn ${isActive ? "border-neutral-300" : "border-neutral-200/80"}`;

  return (
    <header className="relative z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-white border border-neutral-200 shadow-md handcrafted-anim" />
          <span className="text-neutral-900 font-semibold tracking-tight">Quick Survey</span>
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={linkClasses} end>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <NavLink to="/privacy" className={linkClasses}>Privacy</NavLink>
        </nav>
      </div>
    </header>
  );
}
