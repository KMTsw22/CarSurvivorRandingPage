"use client";

import { useState } from "react";

const members = [
  {
    name: "Max",
    realName: "Mintae Kim",
    role: "Builder",
    tags: ["Developer", "DevOps", "AI Pipeline", "Infrastructure"],
    desc: "Full-stack builder handling game development, cloud infrastructure, AI asset pipeline, and deployment. From Unity C# to Next.js to Google Cloud — building the entire technical stack end-to-end.",
    initial: "M",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Jay",
    realName: "YeongJae Kim",
    role: "Designer & Planner",
    tags: ["Game Design", "Level Design", "UX/UI", "Art Direction"],
    desc: "Designing the core gameplay loop, balancing enemy waves, crafting the 3-era world structure, and directing the visual style. Turning creative vision into detailed game design documents.",
    initial: "J",
    color: "from-orange-500 to-yellow-500",
  },
];

const repos = [
  { name: "CarSurvival", desc: "Game", url: "https://github.com/KMTsw22/CarSurvival.git" },
  { name: "CarSurvival_Plan", desc: "Design & Planning", url: "https://github.com/KMTsw22/CarSurvival_Plan.git" },
  { name: "CarSurvivorRandingPage", desc: "Landing Page", url: "https://github.com/KMTsw22/CarSurvivorRandingPage.git" },
];

export default function Team() {
  const [expanded, setExpanded] = useState<number | null>(null);

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
            A two-person indie game studio building at the intersection of gaming and AI.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {members.map((m, i) => (
            <div
              key={m.name}
              className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-orange-500/30"
            >
              {/* Card header — always visible */}
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full p-6 flex items-center gap-4 text-left cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-xl font-bold shrink-0`}>
                  {m.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{m.name}</h3>
                    <span className="text-zinc-500 text-sm">/ {m.realName}</span>
                  </div>
                  <p className="text-orange-400 text-sm">{m.role}</p>
                </div>
                <svg
                  className={`w-5 h-5 text-zinc-500 transition-transform duration-300 shrink-0 ${expanded === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Expandable detail */}
              <div className={`overflow-hidden transition-all duration-300 ${expanded === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 pb-6">
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{m.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-400">
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
            Open Development
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
