const techStack = [
  {
    title: "Gemini AI",
    subtitle: "Asset Generation",
    desc: "AI-powered pipeline using Google Gemini API to generate game assets — characters, environments, and effects — enabling rapid iteration at indie scale.",
    color: "from-blue-500 to-cyan-400",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Google Cloud",
    subtitle: "Infrastructure",
    desc: "Scalable cloud backend for analytics, real-time data processing, player services, and AI model inference to power our development workflow.",
    color: "from-orange-500 to-red-500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "Unity Engine",
    subtitle: "Game Development",
    desc: "Cross-platform 2D game built with Unity and C#, featuring custom physics, procedural enemy spawning, and optimized rendering for the survivor genre.",
    color: "from-emerald-500 to-teal-400",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
            Technology
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Built with <span className="text-orange-400">AI & Cloud</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
            Combining AI-driven asset generation with cloud infrastructure for
            rapid development and scalable player services.
          </p>
        </div>

        {/* Tech cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {techStack.map((t) => (
            <div
              key={t.title}
              className="relative group p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500 -translate-y-1/2 translate-x-1/2`} />

              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-6 text-white`}>
                {t.icon}
              </div>
              <h3 className="text-xl font-semibold">{t.title}</h3>
              <p className="text-orange-400 text-sm mt-1 mb-3">{t.subtitle}</p>
              <p className="text-zinc-400 leading-relaxed text-sm">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Cloud justification */}
        <div className="mt-12 p-8 rounded-2xl border border-orange-500/20 bg-orange-500/5 text-center">
          <p className="text-lg text-zinc-300">
            <span className="text-orange-300 font-semibold">Why Google Cloud?</span>{" "}
            Our AI asset pipeline processes thousands of Gemini API requests daily.
            We need scalable compute for model inference, low-latency APIs, and
            robust infrastructure as we scale toward Steam Early Access launch.
          </p>
        </div>
      </div>
    </section>
  );
}
