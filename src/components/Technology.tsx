const techStack = [
  {
    title: "Gemini · Nano Banana",
    subtitle: "Card Art & Sprites",
    desc: "Google Gemini 2.5 Flash Image (Nano Banana) is the workhorse — card illustrations, dinosaur sprites, monster portraits, and chapter backgrounds all run through the same prompt-driven pipeline.",
    color: "from-blue-500 to-cyan-400",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "GPT Image 2",
    subtitle: "Concept & Iteration",
    desc: "OpenAI's image-2 model handles concept exploration, alt takes, and difficult prompts where Nano Banana hits a wall — keeping the art direction loop tight without leaving the keyboard.",
    color: "from-emerald-500 to-teal-400",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
      </svg>
    ),
  },
  {
    title: "KLING",
    subtitle: "Animation Source",
    desc: "Static character art becomes 122-frame idle loops via KLING video generation. The hero's animated Arkane on this page is sliced from a KLING clip and replayed at 24 fps — same pipeline feeds all in-game character animations.",
    color: "from-fuchsia-500 to-purple-500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Unity 6",
    subtitle: "Game Engine",
    desc: "Built on Unity 6 with URP and the new Input System. Data-driven cards via CSV → ScriptableObjects, custom IMGUI lobby, and a turn-based combat core in C#.",
    color: "from-orange-500 to-red-500",
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
            Built with <span className="text-orange-400">AI Tools</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
            A solo builder leaning on the best generative-image and video models
            to ship a card game with hand-feeling art at indie speed.
          </p>
        </div>

        {/* Tech cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((t) => (
            <div
              key={t.title}
              className="relative group p-7 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500 -translate-y-1/2 translate-x-1/2`} />

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-5 text-white`}>
                {t.icon}
              </div>
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <p className="text-orange-400 text-xs mt-1 mb-3">{t.subtitle}</p>
              <p className="text-zinc-400 leading-relaxed text-sm">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
