export default function CTABanner() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="rounded-3xl p-12 md:p-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%)",
            boxShadow: "0 0 80px rgba(37,99,235,0.4), 0 0 160px rgba(37,99,235,0.2)",
          }}
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #818cf8, transparent)", transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #60a5fa, transparent)", transform: "translate(-30%, 30%)" }} />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 text-blue-200">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
              Limited slots available — Book now
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Ready to Go Electric?
            </h2>
            <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
              Schedule your free test drive today. No commitment, no pressure — just 30 minutes that will change how you think about driving.
            </p>

            {/* Form */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 rounded-xl text-[13px] font-medium bg-white/10 border border-white/20 text-white placeholder:text-blue-300 focus:outline-none focus:border-white/40 focus:bg-white/15"
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-xl bg-white text-blue-700 font-bold text-[13px] hover:bg-blue-50 transition-colors active:scale-95 shrink-0"
              >
                Book Test Drive
              </button>
            </form>

            <p className="text-blue-300 text-xs mt-4">No spam. Unsubscribe anytime. 🔒</p>
          </div>
        </div>
      </div>
    </section>
  );
}
