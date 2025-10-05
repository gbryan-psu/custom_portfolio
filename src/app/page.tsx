export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4">
      <div className="animated-background"></div>
      <div className="z-10 container mx-auto max-w-4xl p-4 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            <span className="animate-fade-in opacity-0 text-shadow-secondary">{"Hi, I'm "}</span>
            <span className="text-accent-gradient animate-fade-in-delay-1 opacity-0">Gabien </span>
            <span className="animate-fade-in-delay-2 opacity-0 text-shadow-primary">Bryan</span>
          </h1>

          <p className="mx-auto max-w-4xl animate-fade-in-delay-3 text-lg font-bold opacity-0">
            Quality Engineer looking to transition into software engineering, passionate about
            building reliable web applications and robust automated testing frameworks. I specialize
            in TypeScript, Playwright, and React, combining strong testing practices with modern
            front-end development.
          </p>
        </div>
      </div>
    </main>
  );
}
