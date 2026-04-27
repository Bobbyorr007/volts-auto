import { useState } from "react";

const NAV = ["Models", "Charging", "About", "Contact"];

function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(8,9,10,0.85)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-black text-lg tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
            <BoltIcon />
          </div>
          <span>Volts<span className="text-blue-500">Auto</span></span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a href="#models" className="hidden md:block text-[13px] font-semibold text-gray-300 hover:text-white transition-colors">
            Explore Models
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold px-4 h-9 rounded-xl transition-colors duration-150 active:scale-95"
          >
            Book Test Drive
          </a>
          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-400 hover:text-white" onClick={() => setOpen(!open)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-1" style={{ background: "rgba(8,9,10,0.98)" }}>
          {NAV.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-gray-300 hover:text-white border-b border-white/5">
              {item}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="block mt-3 text-center bg-blue-600 text-white text-sm font-semibold py-2.5 rounded-xl">
            Book Test Drive
          </a>
        </div>
      )}
    </header>
  );
}
