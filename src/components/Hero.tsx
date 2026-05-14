import Image from "next/image";
import ArkaneIdle from "./ArkaneIdle";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-12">
      {/* Background — Chapter 1 boss arena, more visible */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-ch1-boss.png"
          alt="Ruined keep — Chapter 1"
          fill
          className="object-cover opacity-70 scale-105"
          priority
        />
        {/* Lighter gradient: only darken edges, keep center readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a140e]/55 via-[#1a140e]/30 to-[#1a140e]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(26,20,14,0.55)_75%)]" />
      </div>

      {/* Ember glows */}
      <div className="absolute top-1/3 left-[12%] w-[320px] h-[320px] bg-amber-600/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 right-[12%] w-[420px] h-[420px] bg-orange-700/18 rounded-full blur-[130px] pointer-events-none" />

      {/* T-Rex T2 — Arkane's summoned ally, lifted slightly above ground line so it reads as standing further back, not crowding Arkane */}
      <div className="hidden md:block absolute bottom-0 left-[30%] lg:left-[28%] w-[26%] lg:w-[22%] h-[34%] pointer-events-none z-10">
        <Image
          src="/images/T-Rex_T2.png"
          alt="T-Rex (T2) — Arkane's apex summon"
          fill
          priority
          sizes="(max-width: 1024px) 29vw, 25vw"
          className="object-contain object-bottom drop-shadow-[0_0_40px_rgba(168,85,247,0.35)]"
          style={{ objectPosition: "left bottom" }}
        />
      </div>

      {/* Arkane ambient glow — static decorative blob (separate from animated image so it doesn't flicker per frame) */}
      <div className="hidden md:block absolute bottom-[12%] left-[8%] w-[28%] h-[44%] bg-amber-600/20 rounded-full blur-[90px] pointer-events-none z-[5]" />

      {/* Arkane — left poster layer (122-frame idle animation), in front of T-Rex, both anchored to the same ground line.
          NOTE: no drop-shadow filter on the animated <img> — the alpha mask changes every frame which would re-render
          the shadow each tick and project flicker onto whatever sits behind her (the T-Rex). Static glow above handles ambience. */}
      <div className="hidden md:flex absolute bottom-0 left-[1%] w-[29%] lg:w-[26%] h-[63%] pointer-events-none z-20 items-end justify-start">
        <ArkaneIdle
          alt="Arkane"
          className="w-full h-full object-contain object-left-bottom"
        />
      </div>

      {/* Ruin Lord — boss, pulled inward from right edge for tighter framing */}
      <div className="hidden md:block absolute bottom-0 right-[6%] lg:right-[8%] w-[32%] lg:w-[29%] h-[70%] pointer-events-none z-10">
        <Image
          src="/images/E901_RuinLord.png"
          alt="Ruin Lord — Chapter 1 Boss"
          fill
          priority
          sizes="(max-width: 1024px) 36vw, 32vw"
          className="object-contain object-bottom drop-shadow-[0_0_50px_rgba(234,88,12,0.45)]"
          style={{ objectPosition: "right bottom" }}
        />
      </div>

      {/* Foreground content — centered narrow column so poster characters frame it */}
      <div className="relative z-30 max-w-3xl mx-auto px-6 text-center flex flex-col items-center min-h-[calc(100vh-9rem)]">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/15 backdrop-blur-sm text-orange-200 text-sm mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          Coming Soon to Steam
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none animate-fade-in-up delay-100">
          <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">LAST</span>{" "}
          <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 bg-clip-text text-transparent animate-gradient-x">
            EMBER
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-5 text-lg sm:text-xl text-zinc-200 font-medium animate-fade-in-up delay-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
          Summon Dinosaurs. Build Your Deck. Outlast the Dark.
        </p>

        {/* Mobile-only character/boss row (static thumbs — animation runs only on md+) */}
        <div className="mt-10 md:hidden flex items-center justify-center gap-4 animate-fade-in-up delay-300">
          <Image
            src="/images/character-arkane.png"
            alt="Arkane"
            width={140}
            height={180}
            className="h-auto w-[110px] drop-shadow-[0_0_20px_rgba(234,88,12,0.4)]"
          />
          <span
            className="text-3xl font-black italic"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px rgba(234,88,12,0.85)",
              textShadow: "0 0 30px rgba(234,88,12,0.4)",
            }}
          >
            VS
          </span>
          <Image
            src="/images/E901_RuinLord.png"
            alt="Ruin Lord"
            width={170}
            height={220}
            className="h-auto w-[150px] drop-shadow-[0_0_20px_rgba(234,88,12,0.4)]"
          />
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-float z-20">
        <svg className="w-6 h-6 text-orange-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
