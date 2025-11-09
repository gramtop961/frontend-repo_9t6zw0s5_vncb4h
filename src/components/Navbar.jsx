import { useState } from 'react';
import { Leaf, Bug, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 text-sm md:text-base font-medium text-emerald-900/90 hover:text-emerald-900 hover:bg-emerald-50 rounded-md transition-colors"
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-lime-500 text-white shadow-md">
              <Bug className="h-5 w-5" />
            </div>
            <div className="font-extrabold tracking-tight text-emerald-900 text-lg">
              PestHub
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#classify">Classify</NavLink>
            <NavLink href="#directory">Directory</NavLink>
            <a
              href="#classify"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-semibold shadow hover:shadow-md active:scale-[0.99] transition"
            >
              <Sparkles className="h-4 w-4" /> Try AI
            </a>
          </nav>

          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden p-2 text-emerald-900"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#classify">Classify</NavLink>
              <NavLink href="#directory">Directory</NavLink>
              <a
                href="#classify"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-semibold shadow hover:shadow-md active:scale-[0.99] transition"
              >
                <Leaf className="h-4 w-4" /> Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
