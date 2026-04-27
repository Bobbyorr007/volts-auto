const REVIEWS = [
  {
    name: "Marcus T.",
    location: "Lagos, Nigeria",
    rating: 5,
    text: "Switched from petrol 8 months ago and never looking back. The Model V handles Nigerian roads like a dream and the charging network is expanding fast.",
    model: "Model V Sedan",
    avatar: "M",
    avatarBg: "#2563eb",
  },
  {
    name: "Sarah O.",
    location: "Abuja, Nigeria",
    rating: 5,
    text: "My Model X has never let me down. Range is incredible, and the Autopilot on the highway is a game changer for long trips to Lagos.",
    model: "Model X SUV",
    avatar: "S",
    avatarBg: "#6366f1",
  },
  {
    name: "Chidi A.",
    location: "Port Harcourt, Nigeria",
    rating: 5,
    text: "The Model S Plaid is in a class of its own. 2.1 seconds to 60 is something you have to experience to believe. Absolutely insane.",
    model: "Model S Sport",
    avatar: "C",
    avatarBg: "#f59e0b",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">Customer Stories</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Owners Love It</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Real drivers. Real experiences. See what Volts Auto owners are saying.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map(({ name, location, rating, text, model, avatar, avatarBg }) => (
            <div
              key={name}
              className="p-6 rounded-2xl flex flex-col gap-4"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <Stars count={rating} />
              <p className="text-gray-300 text-sm leading-relaxed flex-1">"{text}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: avatarBg }}
                >
                  {avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{name}</div>
                  <div className="text-gray-500 text-xs">{location} · {model}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
