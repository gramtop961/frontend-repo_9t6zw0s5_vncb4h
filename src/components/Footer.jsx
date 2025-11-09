import { Leaf, Bug, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-emerald-100 bg-white/60">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-lime-500 text-white shadow-md">
              <Bug className="h-5 w-5" />
            </div>
            <div className="font-extrabold tracking-tight text-emerald-900 text-lg">PestHub</div>
          </div>
          <p className="text-emerald-900/70 mt-3 max-w-sm">Instant AI identification with actionable insights to protect crops and maximize yield.</p>
        </div>
        <div>
          <h4 className="font-bold text-emerald-900">Product</h4>
          <ul className="mt-3 space-y-2 text-emerald-900/80">
            <li><a href="#classify" className="hover:text-emerald-900">Classify</a></li>
            <li><a href="#directory" className="hover:text-emerald-900">Directory</a></li>
            <li><a href="#about" className="hover:text-emerald-900">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-emerald-900">Get started</h4>
          <a href="#classify" className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-semibold shadow">Try PestHub</a>
        </div>
      </div>
      <div className="border-t border-emerald-100 py-4 text-center text-sm text-emerald-900/70">© {new Date().getFullYear()} PestHub. All rights reserved.</div>
    </footer>
  );
}
