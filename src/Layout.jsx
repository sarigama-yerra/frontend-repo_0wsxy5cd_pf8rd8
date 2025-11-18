import Navbar from "./components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative z-0">
        {children}
      </main>
      <footer className="relative z-10 mt-16 border-t border-neutral-200 bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-8 text-neutral-500 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Quick Survey</div>
          <div className="flex items-center gap-3">
            <a href="/privacy" className="hover:text-neutral-800">Privacy</a>
            <span className="opacity-30">•</span>
            <a href="/about" className="hover:text-neutral-800">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
