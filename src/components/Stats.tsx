const STATS = [
  { value: "12,400+", label: "Vehicles Delivered" },
  { value: "98%",     label: "Customer Satisfaction" },
  { value: "450 mi",  label: "Max Range" },
  { value: "47",      label: "Showrooms Nationwide" },
];

export default function Stats() {
  return (
    <section className="py-16 border-y border-white/5" style={{ background: "rgba(255,255,255,0.02)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-gradient mb-1">{value}</div>
              <div className="text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
