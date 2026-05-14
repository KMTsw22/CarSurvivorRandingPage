import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
              About the Game
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              The Last <span className="text-orange-400">Ember Bearer</span>
            </h2>
            <p className="mt-6 text-zinc-300 leading-relaxed text-lg">
              In <span className="text-white font-medium">Last Ember</span>, you play
              <span className="text-white font-medium"> Arkane</span> — a girl whose
              hand still carries the world&apos;s last spark of summoning fire. With
              it, she calls carnivores to her side — from the quick-footed{" "}
              <span className="text-white font-medium">Compsognathus</span> to the
              apex{" "}
              <span className="text-white font-medium">T-Rex</span> — and turns them
              against the things that wait in the dark.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              A turn-based deck-builder in the lineage of Slay the Spire. Pick a path
              across each chapter&apos;s map, balance summons and spells, fuse beasts
              with arcane sigils, and evolve them into bio-mecha forms before the
              ember fades.
            </p>

            {/* Quick highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Genre", value: "Deck-Builder Roguelike" },
                { label: "Perspective", value: "Turn-Based 2D" },
                { label: "Run Length", value: "60–90 min" },
                { label: "Platform", value: "PC (Steam)" },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-xl border border-white/10 bg-white/[0.02]">
                  <div className="text-xs text-zinc-500">{item.label}</div>
                  <div className="text-sm font-medium text-white mt-1">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Chapter 1 Boss showcase */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-amber-950/30 to-orange-950/30">
              <Image
                src="/images/bg-ch1-boss.png"
                alt="Chapter 1 Boss Arena"
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[78%] h-[78%] relative">
                  <Image
                    src="/images/E901_RuinLord.png"
                    alt="Ruin Lord — Chapter 1 Boss"
                    fill
                    className="object-contain object-bottom drop-shadow-[0_0_24px_rgba(234,88,12,0.5)]"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a140e]/85 to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="text-orange-400 font-bold text-lg">Ruin Lord — Chapter 1 Boss</span>
                <p className="text-zinc-500 text-sm">P3: ember runes ignite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
