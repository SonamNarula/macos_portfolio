const Home = () => {
  return (
    <section
      id="home"
      className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden px-5"
    >
      <div className="text-center text-white">
        <p className="mb-5 text-lg font-light tracking-wide transition-all duration-200 hover:font-medium sm:text-2xl">
          Hello, I'm
        </p>

        <h1 className="whitespace-nowrap text-5xl font-bold tracking-tight drop-shadow-lg transition-all duration-200 hover:font-extrabold sm:text-7xl md:text-8xl">
          Sonam Narula<span className="text-blue-300">.</span>
        </h1>

        <h2 className="mt-5 text-3xl font-light italic tracking-wide transition-all duration-200 hover:font-medium sm:text-4xl">
          Think. Solve. Build.
        </h2>

        <p className="mt-6 text-sm font-medium tracking-[0.12em] text-white/90 transition-all duration-200 hover:font-bold sm:text-base">
          DSA <span className="text-blue-300">·</span> COMPETITIVE PROGRAMMING{" "}
          <span className="text-blue-300">·</span> AI/ML
        </p>

        <div className="mt-7 inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-3 shadow-lg backdrop-blur-md transition-all duration-200 hover:border-white/50 hover:bg-white/15">
          <p className="text-xs font-semibold tracking-wide transition-all duration-200 hover:font-bold sm:text-sm">
            ICPC ALGO QUEEN 2026
            <span className="mx-2 text-blue-300">·</span>
            GLOBAL RANK 386
          </p>
        </div>

        <p className="mt-7 text-sm text-white/75 transition-all duration-200 hover:font-semibold sm:text-base">
          Turning complex problems into elegant solutions.
        </p>
      </div>
    </section>
  );
};

export default Home;
