import Image from "next/image";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "10 Dinosaur Species",
    desc: "From swarming Compsognathus to the mighty T-Rex. Each species has unique behavior — tanks, flyers, chargers, and more.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Auto-Combat",
    desc: "Your vehicle attacks automatically — focus on movement, dodging, and positioning through waves of dinosaur swarms.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Roguelike Runs",
    desc: "Every 10-minute run is different. 24 waves of escalating difficulty. Card-based level-ups with random weapon drops.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Weapon Evolutions",
    desc: "Combine Machine Gun + Flamethrower for Flame Machine Gun. Discover powerful evolution combos to crush the horde.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: "3 Vehicles",
    desc: "Motorcycle, SUV, or Truck — each with unique stats and passives. Customize with paint, wheels, and equipment loadouts.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Epic Boss Fights",
    desc: "Collect 3 trophies to unlock the time tunnel. Face the T-Rex in an intense arena showdown — 20,000 HP of pure terror.",
  },
];

const dinosaurs = [
  { name: "Compsognathus", role: "Swarm", img: "/images/Compsognathus.png" },
  { name: "Raptor", role: "Fast", img: "/images/Raptor.png" },
  { name: "Stegosaurus", role: "Tank", img: "/images/Stegosaurus.png" },
  { name: "Pteranodon", role: "Flyer", img: "/images/Pteranodon.png" },
  { name: "Triceratops", role: "Charger", img: "/images/Triceratops.png" },
  { name: "T-Rex", role: "Boss", img: "/images/T-Rex.png" },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] via-orange-950/5 to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
            Features
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Gear Up. Drive. <span className="text-orange-400">Survive.</span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center mb-4 group-hover:bg-orange-600/30 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Dinosaur bestiary */}
        <div className="mt-16 p-8 rounded-2xl border border-orange-500/20 bg-orange-500/5">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Dinosaur <span className="text-orange-400">Bestiary</span>
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
            {dinosaurs.map((d) => (
              <div key={d.name} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 relative mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Image
                    src={d.img}
                    alt={d.name}
                    fill
                    className="object-contain drop-shadow-[0_0_8px_rgba(234,88,12,0.3)]"
                  />
                </div>
                <p className="text-sm font-medium text-white">{d.name}</p>
                <p className="text-xs text-zinc-500">{d.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
