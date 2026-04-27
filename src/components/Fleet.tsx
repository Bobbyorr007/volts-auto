const CARS = [
  {
    id: "model-v",
    name: "Model V",
    type: "Sedan",
    tagline: "Where speed meets elegance",
    range: "420 mi",
    speed: "3.1 sec",
    power: "670 hp",
    price: "$54,990",
    badge: "Best Seller",
    badgeColor: "bg-blue-600",
    accent: "#3b82f6",
    emoji: "🚗",
  },
  {
    id: "model-x",
    name: "Model X",
    type: "SUV",
    tagline: "Command the road",
    range: "390 mi",
    speed: "3.8 sec",
    power: "580 hp",
    price: "$69,990",
    badge: "New 2025",
    badgeColor: "bg-indigo-600",
    accent: "#6366f1",
    emoji: "🚙",
  },
  {
    id: "model-s",
    name: "Model S",
    type: "Sport",
    tagline: "Track-ready. Street-legal.",
    range: "310 mi",
    speed: "2.1 sec",
    power: "1,020 hp",
    price: "$124,990",
    badge: "Plaid",
    badgeColor: "bg-amber-600",
    accent: "#f59e0b",
    emoji: "🏎️",
  },
];

export default function Fleet() {
  return (
    <section id="models" className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">Our Lineup</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Built for Every Driver</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Three models. One electrifying promise. Find the perfect Volts for your life.</p>
        </div>

        {/* Car cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {CARS.map((car) => (
            <div
              key={car.id}
              className="relative rounded-3xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`${car.badgeColor} text-white text-[11px] font-bold px-2.5 py-1 rounded-full`}>
                  {car.badge}
                </span>
              </div>

              {/* Car visual */}
              <div
                className="h-52 flex items-center justify-center text-8xl relative overflow-hidden"
                style={{ background: `radial-gradient(ellipse at center, ${car.accent}18 0%, transparent 70%)` }}
              >
                <span className="filter drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                  {car.emoji}
                </span>
                {/* Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-12"
                  style={{ background: `linear-gradient(to top, rgba(8,9,10,0.8), transparent)` }} />
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: car.accent }}>
                      {car.type}
                    </span>
                    <h3 className="text-2xl font-black text-white">{car.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Starting at</div>
                    <div className="text-lg font-black text-white">{car.price}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-5">{car.tagline}</p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Range", val: car.range },
                    { label: "0–60", val: car.speed },
                    { label: "Power", val: car.power },
                  ].map(({ label, val }) => (
                    <div key={label} className="text-center p-2 rounded-xl" style={{ background: "rgba(255,255,255,0.04)" }}>
                      <div className="text-sm font-bold text-white">{val}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <a href="#contact"
                    className="flex-1 text-center py-2.5 rounded-xl text-[13px] font-semibold text-white transition-colors duration-150"
                    style={{ background: car.accent }}>
                    Order Now
                  </a>
                  <a href="#contact"
                    className="flex-1 text-center py-2.5 rounded-xl text-[13px] font-semibold text-gray-300 hover:text-white transition-colors"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    Test Drive
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
