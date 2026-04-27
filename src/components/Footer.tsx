const LINKS = {
  "Company":    ["About Us", "Careers", "Press", "Contact"],
  "Vehicles":   ["Model V", "Model X", "Model S", "Compare"],
  "Ownership":  ["Charging", "Financing", "Service", "Warranty"],
  "Legal":      ["Privacy", "Terms", "Cookies"],
};

function BoltIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 font-black text-lg text-white mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <BoltIcon />
              </div>
              Volts<span className="text-blue-500">Auto</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              Premium electric vehicles for a cleaner, faster, smarter tomorrow.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white font-semibold text-sm mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600 text-xs">
          <span>© 2025 Volts Auto Inc. All rights reserved.</span>
          <div className="flex items-center gap-4">
            {["Twitter", "Instagram", "LinkedIn", "YouTube"].map((s) => (
              <a key={s} href="#" className="hover:text-gray-400 transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
