import MoreVfxScene from "@/three/MoreVfxScene";
import Aurora from "@/components/Vfx/Aurora";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Aurora />


      <header className="relative mx-auto max-w-6xl px-6 pt-16">
        <div className="flex items-start justify-between gap-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(145,94,255,0.4)] bg-[rgba(255,255,255,0.06)] px-4 py-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-[#00F5FF] shadow-[0_0_12px_rgba(0,245,255,0.7)]" />
              Futuristic campus collaboration + marketplace
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight">
              The Future of Campus Collaboration
            </h1>
            <p className="mt-4 text-[rgba(255,255,255,0.78)]">
              AI recommendations, real-time chat, smart search, and a premium 3D
              interface—built for students, faculty, and startups.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#market"
                className="rounded-xl border border-[rgba(145,94,255,0.35)] bg-[rgba(145,94,255,0.08)] px-5 py-3 text-sm font-medium backdrop-blur hover:bg-[rgba(145,94,255,0.14)] transition"
              >
                Explore Marketplace
              </a>
              <a
                href="#ai"
                className="rounded-xl bg-[#915EFF] px-5 py-3 text-sm font-medium text-black shadow-[0_0_28px_rgba(145,94,255,0.55)] hover:brightness-110 transition"
              >
                Try AI Search
              </a>
            </div>
          </div>

          <div className="hidden lg:block w-[480px] h-[480px]">
            <MoreVfxScene />
          </div>

        </div>

          <div id="market" className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 [perspective:1200px]">

          {[
            {
              title: "AI Recommendations",
              desc: "Smart suggestions from your interests & search history.",
            },
            {
              title: "Real-time Chat",
              desc: "Rooms, typing indicators, reactions, and file sharing.",
            },
            {
              title: "Marketplace Analytics",
              desc: "Verification, trends, and seller insights.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="group relative rounded-2xl border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.06)] backdrop-blur p-5 shadow-[0_0_0_1px_rgba(145,94,255,0.10)] transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(145,94,255,0.22)] [transform-style:preserve-3d]"
            >

              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(500px circle at 20% 10%, rgba(145,94,255,0.35), transparent 55%), radial-gradient(400px circle at 80% 30%, rgba(0,245,255,0.22), transparent 60%)",
                  transform: "translateZ(40px)",
                }}
              />
              <div className="text-lg font-semibold [transform:translateZ(20px)]">{c.title}</div>

              <div className="mt-2 text-sm text-[rgba(255,255,255,0.72)]">
                {c.desc}
              </div>
            </div>
          ))}
        </div>

        <section id="ai" className="mt-14 rounded-3xl border border-[rgba(145,94,255,0.35)] bg-[rgba(255,255,255,0.06)] backdrop-blur p-7">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
            <div>
              <div className="text-xl font-semibold">AI Smart Search</div>
              <div className="mt-2 text-sm text-[rgba(255,255,255,0.78)]">
                Example: “Need second-hand laptop under 20k”.
              </div>
            </div>
            <div className="rounded-2xl border border-[rgba(0,245,255,0.25)] bg-[rgba(0,245,255,0.06)] px-4 py-3 text-sm text-[rgba(255,255,255,0.9)]">
              Filters → Recommendations → Best matches → Nearby listings
            </div>
          </div>
        </section>
      </header>

      <div id="particles" className="pointer-events-none absolute inset-0 -z-10" />
    </div>
  );
}

https://github.com/varunnvm/sharespacelite-