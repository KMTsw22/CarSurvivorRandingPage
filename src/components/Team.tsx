import Image from "next/image";

type Member = {
  name: string;
  realName: string;
  role: string;
  tags: string[];
  desc: string;
  photo: string | null;
  initial: string;
};

const team: Member[] = [
  {
    name: "Max",
    realName: "Mintae Kim",
    role: "Builder",
    tags: ["Unity / C#", "AI Asset Pipeline", "Card & Enemy Balance", "Web", "DevOps"],
    desc: "Shipping Last Ember end-to-end — Unity 6 client, turn-based combat core, the Gemini / GPT Image / KLING asset pipeline, this landing site, and every balance pass in between.",
    photo: "/images/max-portrait.jpg",
    initial: "M",
  },
  {
    name: "Jay",
    realName: "YeongJae Kim",
    role: "Designer & Planner",
    tags: ["Game Design", "Card Balance", "Encounter Design", "UX / UI", "Art Direction"],
    desc: "Shapes Last Ember's run economy and combat feel — card pacing, dinosaur kits, fusion sigils, and the visual direction that holds every encounter together.",
    photo: null,
    initial: "J",
  },
];

const repos = [
  { name: "DianoCard", desc: "Game (Unity)", url: "mailto:dashdeploystudio@gmail.com" },
  { name: "DianoCardPlan", desc: "Design & Planning", url: "mailto:dashdeploystudio@gmail.com" },
  { name: "LandingPage", desc: "This Site", url: "mailto:dashdeploystudio@gmail.com" },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
            Team
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            DashDeploy <span className="text-orange-400">Studios</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
            A small indie team working at the intersection of gaming and AI.
          </p>
        </div>

        {/* Builder cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {team.map((m, i) => (
            <div
              key={m.name}
              className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/[0.06] to-transparent p-7 sm:p-8 shadow-[0_0_40px_rgba(234,88,12,0.08)]"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start h-full">
                {/* Portrait or initial badge */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden ring-2 ring-orange-500/40 shadow-[0_0_30px_rgba(234,88,12,0.25)]">
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="144px"
                      className="object-cover"
                      priority={i === 0}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-700/40 via-amber-800/30 to-[#1a140e] text-4xl font-black text-orange-200/90 select-none">
                      {m.initial}
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-baseline justify-center sm:justify-start gap-x-3 gap-y-1">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{m.name}</h3>
                    <span className="text-zinc-400 text-sm">/ {m.realName}</span>
                  </div>
                  <p className="mt-1 text-orange-400 font-semibold uppercase tracking-wider text-xs">
                    {m.role}
                  </p>

                  <p className="mt-4 text-zinc-300 leading-relaxed text-sm">
                    {m.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full border border-orange-500/20 bg-orange-500/[0.06] text-[11px] text-orange-200/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub repos */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-center text-lg font-semibold mb-6">
            Project Repositories
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {repos.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-orange-500/30 hover:bg-white/[0.05] transition-all duration-300 text-center"
              >
                <svg className="w-6 h-6 mx-auto mb-2 text-zinc-400 group-hover:text-orange-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <p className="text-sm font-medium text-white">{r.desc}</p>
                <p className="text-xs text-zinc-500 mt-1">{r.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
