const FEATURES = [
  {
    icon: "⚡",
    title: "Instant Torque",
    desc: "Every Volts model delivers peak torque from 0 RPM. No lag, no gear shifts — just instant, exhilarating acceleration.",
  },
  {
    icon: "🛡️",
    title: "5-Star Safety",
    desc: "Advanced driver assistance, automatic emergency braking, and a rigid chassis designed to protect every occupant.",
  },
  {
    icon: "📡",
    title: "Over-the-Air Updates",
    desc: "Your car gets smarter every month. New features, performance improvements, and bug fixes delivered wirelessly.",
  },
  {
    icon: "🔋",
    title: "Ultra-Fast Charging",
    desc: "Gain up to 200 miles in 15 minutes at any Volts Supercharger station. 10,000+ chargers and growing.",
  },
  {
    icon: "🧠",
    title: "Autopilot Suite",
    desc: "Full self-driving capability with hardware built in. Navigate, park, and cruise — hands-free on compatible roads.",
  },
  {
    icon: "🌍",
    title: "Zero Emissions",
    desc: "Every mile is a cleaner mile. All Volts vehicles produce zero direct emissions, backed by a renewable energy pledge.",
  },
];

export default function Features() {
  return (
    <section id="charging" className="py-24" style={{ background: "rgba(255,255,255,0.015)" }}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">Why Volts Auto</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Built Different</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Every Volts vehicle is engineered from the ground up — battery, software, and structure — to be the best EV on the road.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-2xl group hover:border-blue-500/30 transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
