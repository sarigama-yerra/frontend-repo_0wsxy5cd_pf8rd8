import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm transition border border-transparent hover:border-blue-500/30 ${
      isActive ? "bg-blue-600/20 text-white border-blue-500/40" : "text-blue-200"
    }`;

  return (
    <header className="relative z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/20" />
          <span className="text-white font-semibold tracking-tight">Quick Survey</span>
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
