import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/map_1.png"
          alt="Dinosaur Map"
          fill
          className="object-cover opacity-20 scale-150"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-[#0a0a0a]" />
      </div>

      {/* Glows */}
      <div className="absolute top-1/3 left-[15%] w-[300px] h-[300px] bg-red-600/15 rounded-full blur-[100px]" />
      <div className="absolute top-1/3 right-[15%] w-[400px] h-[400px] bg-orange-600/12 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-sm mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          Coming Soon to Steam
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-none animate-fade-in-up delay-100">
          <span className="text-white">CAR</span>{" "}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent animate-gradient-x">
            SURVIVOR
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-xl sm:text-2xl text-zinc-300 font-medium animate-fade-in-up delay-200">
          Drive Through the Dinosaur Age. Survive The Horde.
        </p>

        {/* === VS Scene === */}
        <div className="mt-16 relative flex items-center justify-center animate-fade-in-up delay-300">

          {/* Left: Super Car */}
          <div className="relative shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-red-500/15 rounded-full blur-3xl" />
            <Image
              src="/images/car-super-side.png"
              alt="Super Car"
              width={300}
              height={300}
              className="w-[220px] sm:w-[320px] h-auto drop-shadow-[0_0_30px_rgba(239,68,68,0.5)] -scale-x-100"
            />
          </div>

          {/* Center: VS */}
          <div className="mx-2 sm:mx-6 flex flex-col items-center z-20 shrink-0">
            <div className="relative">
              <span
                className="text-5xl sm:text-7xl lg:text-8xl font-black italic"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px rgba(234,88,12,0.8)",
                  textShadow: "0 0 40px rgba(234,88,12,0.4)",
                  filter: "drop-shadow(0 0 20px rgba(234,88,12,0.3))",
                }}
              >
                VS
              </span>
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>

          {/* Right: T-Rex */}
          <div className="relative shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-3xl" />
            <Image
              src="/images/T-Rex.png"
              alt="T-Rex"
              width={400}
              height={400}
              loading="eager"
              className="w-[220px] sm:w-[320px] h-auto drop-shadow-[0_0_30px_rgba(234,88,12,0.6)] -scale-x-100"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <a
            href="mailto:dashdeploystudio@gmail.com"
            className="px-8 py-3.5 rounded-full bg-orange-600 hover:bg-orange-500 transition-colors text-white font-bold animate-pulse-glow"
          >
            Get Notified
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 rounded-full border border-white/20 hover:border-orange-500/40 transition-colors text-zinc-300 hover:text-orange-300 font-medium"
          >
            See Features
          </a>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-4 gap-6 max-w-lg mx-auto animate-fade-in-up delay-500">
          {[
            { value: "10", label: "Dinosaur Species" },
            { value: "3", label: "Time Eras" },
            { value: "7+", label: "Weapons" },
            { value: "3", label: "Vehicles" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-orange-400">{stat.value}</div>
              <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <svg className="w-6 h-6 text-orange-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
