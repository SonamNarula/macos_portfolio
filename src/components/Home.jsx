import useWindowStore from "../store/window.js";

const LetterHover = ({ children, className = "" }) => (
  <span className={`inline-block cursor-default ${className}`} aria-label={children}>
    {Array.from(children).map((character, index) => (
      <span
        key={index}
        className="inline-block transition-[transform,font-weight,color] duration-150 ease-out hover:scale-105 hover:font-bold hover:text-blue-100"
        style={{ whiteSpace: character === " " ? "pre" : "normal" }}
        aria-hidden="true"
      >
        {character === " " ? "\u00a0" : character}
      </span>
    ))}
  </span>
);

const desktopProjects = [
  { name: "CodeFusion", location: "codefusion" },
  { name: "AcornFolio", location: "acornfolio" },
  { name: "HireLens", location: "hirelens" },
  { name: "CardioSense", location: "cardiosense" },
];

const Home = () => {
  const openWindow = useWindowStore((state) => state.openWindow);

  const openProjectFolder = (location) => {
    openWindow("finder", { location });
  };

  return (
    <section
      id="home"
      className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden px-5"
    >
      <div className="absolute left-3 top-[58px] z-20 flex flex-col gap-3 sm:left-5 sm:top-[76px] sm:gap-5">
        {desktopProjects.map((project) => (
          <button
            key={project.location}
            type="button"
            onDoubleClick={() => openProjectFolder(project.location)}
            onKeyDown={(event) => {
              if (event.key === "Enter") openProjectFolder(project.location);
            }}
            className="group flex w-[76px] flex-col items-center gap-1 rounded-lg p-2 text-center text-white transition-colors duration-150 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:w-[92px]"
            title={`Double-click to open ${project.name}`}
            aria-label={`Double-click to open ${project.name} project folder`}
          >
            <img
              src="/images/folder.png"
              alt=""
              draggable="false"
              className="h-11 w-14 object-contain transition-transform duration-150 ease-out group-hover:scale-105 sm:h-14 sm:w-[68px]"
            />
            <span className="max-w-full break-words text-[11px] font-medium leading-4 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] transition-[font-weight] duration-150 group-hover:font-bold sm:text-xs">
              {project.name}
            </span>
          </button>
        ))}
      </div>

      <div className="text-center text-white">
        <p className="mb-5 text-lg font-light tracking-wide sm:text-2xl">
          <LetterHover>Hello, I'm</LetterHover>
        </p>

        <h1 className="whitespace-nowrap text-5xl font-bold tracking-tight drop-shadow-lg sm:text-7xl md:text-8xl">
          <LetterHover>Sonam Narula</LetterHover><span className="text-blue-300">.</span>
        </h1>

        <h2 className="mt-5 text-3xl font-light italic tracking-wide sm:text-4xl">
          <LetterHover>Think. Solve. Build.</LetterHover>
        </h2>

        <p className="mt-6 text-sm font-medium tracking-[0.12em] text-white/90 sm:text-base">
          <LetterHover>DSA · COMPETITIVE PROGRAMMING · AI/ML</LetterHover>
        </p>

        <div className="mt-7 inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-3 shadow-lg backdrop-blur-md">
          <p className="text-xs font-semibold tracking-wide sm:text-sm">
            <LetterHover>ICPC ALGO QUEEN 2026 · GLOBAL RANK 386</LetterHover>
          </p>
        </div>

        <p className="mt-7 text-sm text-white/75 sm:text-base">
          <LetterHover>Turning complex problems into elegant solutions.</LetterHover>
        </p>
      </div>
    </section>
  );
};

export default Home;
