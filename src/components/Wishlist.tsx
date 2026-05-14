export default function Wishlist() {
  return (
    <section id="wishlist" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="p-12 rounded-3xl border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-orange-600/20 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Coming <span className="text-orange-400">Soon</span>
            </h2>
            <p className="mt-4 text-zinc-400 text-lg max-w-md mx-auto">
              Last Ember is currently in active development.
              Stay tuned for our Steam Early Access launch!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:dashdeploystudio@gmail.com"
                className="px-10 py-4 rounded-full bg-orange-600 hover:bg-orange-500 transition-colors text-white font-bold text-lg animate-pulse-glow"
              >
                Get Notified
              </a>
            </div>
            <p className="mt-6 text-zinc-500 text-sm">
              Send us an email to get notified when we launch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
