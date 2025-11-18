import Navbar from "./components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <Navbar />
      <main className="relative z-0">
        {children}
      </main>
      <footer className="relative z-10 mt-16 border-t border-blue-500/10">
        <div className="max-w-6xl mx-auto px-4 py-8 text-blue-300/70 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Quick Survey</div>
          <div className="flex items-center gap-3">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <span className="opacity-30">•</span>
            <a href="/about" className="hover:text-white">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
