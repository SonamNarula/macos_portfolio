
const Home = () => {
    return (
        <section className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="pointer-events-none -mt-10 px-5 text-center text-white drop-shadow-lg">

                <p className="mb-4 text-lg font-light tracking-wide sm:text-2xl">
                    Hello, I'm
                </p>

                <h1 className="text-5xl font-semibold tracking-tight sm:text-8xl">
                    Sonam Narula<span className="text-blue-300">.</span>
                </h1>

                <h2 className="mt-5 text-3xl font-light italic tracking-wide sm:text-5xl">
                    Think. Solve. Build.
                </h2>

                <p className="mt-6 text-sm font-medium tracking-widest text-white/85 sm:text-lg">
                    DSA · COMPETITIVE PROGRAMMING · AI/ML
                </p>

                <div className="mt-7 inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-2.5 backdrop-blur-md">
                    <p className="text-xs font-medium tracking-wide text-white sm:text-sm">
                        ICPC ALGO QUEEN 2026
                        <span className="mx-2 text-blue-300">•</span>
                        GLOBAL RANK 386
                    </p>
                </div>

                <p className="mt-7 text-sm font-light tracking-wide text-white/65 sm:text-base">
                    Turning complex problems into elegant solutions.
                </p>

            </div>
        </section>
    );
};

export default Home;
