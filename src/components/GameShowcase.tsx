import Image from "next/image";

export default function GameShowcase() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
            In-Game Preview
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Enter the <span className="text-orange-400">Dino Wasteland</span>
          </h2>
        </div>

        {/* Game UI screenshot */}
        <div className="rounded-2xl overflow-hidden border border-orange-500/20 shadow-[0_0_60px_rgba(234,88,12,0.15)]">
          <Image
            src="/images/lobby-dino.png"
            alt="Dino Wasteland Game Lobby"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>

        {/* Caption */}
        <p className="text-center text-zinc-500 text-sm mt-4">
          Main lobby — choose your stage, customize your vehicle, and start the run
        </p>
      </div>
    </section>
  );
}
