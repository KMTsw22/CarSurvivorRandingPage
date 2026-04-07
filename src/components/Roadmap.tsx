const milestones = [
  {
    phase: "Phase 1",
    title: "MVP Development",
    status: "current",
    items: [
      "Core game loop — survive, level up, fight boss",
      "Present Era: Manhattan stage with 20+ enemy types",
      "3 playable vehicles with unique stats",
      "Card-based level-up system with weapon evolutions",
      "AI-powered asset generation pipeline",
    ],
  },
  {
    phase: "Phase 2",
    title: "Steam Early Access",
    status: "upcoming",
    items: [
      "Steam store page & community hub",
      "Past & Future era stages",
      "Expanded weapon & skill trees",
      "Player progression & garage system",
      "Cloud-based analytics & telemetry",
    ],
  },
  {
    phase: "Phase 3",
    title: "Full Launch & Beyond",
    status: "future",
    items: [
      "Full 3-era campaign with boss encounters",
      "Online leaderboards & challenges",
      "Community content & modding support",
      "Mobile platform expansion",
      "Live service updates & seasonal events",
    ],
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    current: "bg-green-500/20 text-green-400 border-green-500/30",
    upcoming: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    future: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30",
  };
  const labels: Record<string, string> = {
    current: "In Progress",
    upcoming: "Next Up",
    future: "Planned",
  };
  return (
    <span className={`px-3 py-1 rounded-full border text-xs font-medium ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] via-orange-950/10 to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
            Roadmap
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Where We&apos;re Headed
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
            Our development roadmap from MVP to full launch and beyond.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-6">
          {milestones.map((m) => (
            <div
              key={m.phase}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                m.status === "current"
                  ? "border-orange-500/40 bg-orange-500/5"
                  : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-zinc-500 font-mono">{m.phase}</span>
                <StatusBadge status={m.status} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{m.title}</h3>
              <ul className="space-y-3">
                {m.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                      m.status === "current" ? "bg-orange-400" : "bg-zinc-600"
                    }`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
