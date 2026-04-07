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
              Dinosaurs vs. <span className="text-orange-400">Machines</span>
            </h2>
            <p className="mt-6 text-zinc-400 leading-relaxed text-lg">
              In Car Survivor, you drive a weaponized vehicle through a world
              overrun by dinosaurs. From swarming{" "}
              <span className="text-white font-medium">Raptors</span> to the
              terrifying{" "}
              <span className="text-white font-medium">T-Rex boss</span>,
              every run throws a different horde at you.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Survive 10 minutes of escalating chaos. Level up with powerful weapon
              combinations. Collect trophies to unlock the boss tunnel. Travel through
              Past, Present, and Future eras — each with unique dinosaur species and environments.
            </p>

            {/* Quick highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Run Duration", value: "10-15 min" },
                { label: "Perspective", value: "Top-down 2D" },
                { label: "Genre", value: "Survivor Roguelike" },
                { label: "Platform", value: "PC (Steam)" },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-xl border border-white/10 bg-white/[0.02]">
                  <div className="text-xs text-zinc-500">{item.label}</div>
                  <div className="text-sm font-medium text-white mt-1">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dinosaur showcase */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-emerald-950/30 to-orange-950/30">
              <Image
                src="/images/map_1.png"
                alt="Dinosaur Map"
                fill
                className="object-cover opacity-40"
              />
              {/* T-Rex center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[70%] h-[70%] relative">
                  <Image
                    src="/images/T-Rex.png"
                    alt="T-Rex Boss"
                    fill
                    className="object-contain drop-shadow-[0_0_24px_rgba(234,88,12,0.5)]"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="text-orange-400 font-bold text-lg">T-Rex — Chapter Boss</span>
                <p className="text-zinc-500 text-sm">20,000 HP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
