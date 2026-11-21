import { useRef } from "react";
import gsap from "gsap";

const LetterHover = ({ children, className = "" }) => {
  const lineRef = useRef(null);

  const animateLetters = () => {
    const letters = lineRef.current?.querySelectorAll(".hover-letter");
    if (!letters?.length) return;

    gsap.killTweensOf(letters);
    gsap.set(letters, { y: 0, scale: 1, color: "inherit", fontWeight: 600 });

    gsap.to(letters, {
      y: -5,
      scale: 1.1,
      color: "#bfdbfe",
      fontWeight: 900,
      duration: 0.18,
      stagger: { each: 0.045, from: "start" },
      ease: "back.out(2)",
      yoyo: true,
      repeat: 1,
      repeatDelay: 0.08,
    });
  };

  return (
    <span
      ref={lineRef}
      onMouseEnter={animateLetters}
      className={`inline-block cursor-default ${className}`}
      aria-label={children}
    >
      {Array.from(children).map((character, index) => (
        <span
          key={index}
          className="hover-letter inline-block"
          style={{ whiteSpace: character === " " ? "pre" : "normal" }}
          aria-hidden="true"
        >
          {character === " " ? "\u00a0" : character}
        </span>
      ))}
    </span>
  );
};

const Home = () => (
  <section
    id="home"
    className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden px-5"
  >
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

export default Home;
