import { useEffect, useState } from "react";
import { Command, Wifi, Battery, Search, Volume2 } from "lucide-react";
import useWindowStore from "../store/window.js";

const AppleMark = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
    <path d="M17.1 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.5-1.7-3-1.7-1.3-.1-2.5.8-3.2.8s-1.7-.8-2.8-.8c-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.1 9.1.7 1.1 1.5 2.3 2.6 2.2 1-.1 1.4-.7 2.7-.7s1.7.7 2.8.7 1.8-1.1 2.5-2.2c.8-1.2 1.1-2.3 1.1-2.4-.1 0-2-.8-2-4zM15 6.3c.6-.8 1-1.9.9-3-.9 0-2 .6-2.6 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2-.5 2.7-1.3z" />
  </svg>
);

const Navbar = () => {
  const [now, setNow] = useState(new Date());
  const openWindow = useWindowStore((state) => state.openWindow);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const date = now.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const navItems = [
    { label: "Projects", window: "safari" },
    { label: "Contact", window: "contact" },
    { label: "Resume", window: "resume" },
  ];

  return (
    <>
      <div className="fixed left-0 top-0 z-[80] flex h-9 w-full items-center justify-between border-b border-white/10 bg-[#100d4c]/85 px-5 text-sm text-white shadow-sm backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <Command size={17} />
          <span className="font-semibold">SonamOS</span>
          <span className="hidden sm:block">File</span>
          <span className="hidden sm:block">Edit</span>
          <span className="hidden sm:block">View</span>
          <span className="hidden sm:block">Window</span>
          <span className="hidden sm:block">Help</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <Volume2 size={14} className="hidden sm:block" />
          <Wifi size={14} />
          <Battery size={16} />
          <Search size={14} />
          <span className="hidden sm:block">{date}</span>
          <span className="font-medium tabular-nums">{time}</span>
        </div>
      </div>

      <header className="fixed left-0 top-9 z-[75] flex h-14 w-full items-center border-b border-white/25 bg-[#c5c1ee]/90 px-5 text-[#111322] shadow-sm backdrop-blur-2xl sm:px-8">
        <button
          type="button"
          onClick={() => openWindow("finder")}
          className="mr-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition hover:bg-black/10"
          aria-label="Open SonamOS home"
        >
          <AppleMark />
        </button>

        <button
          type="button"
          onClick={() => openWindow("finder")}
          className="mr-6 whitespace-nowrap text-lg font-extrabold tracking-tight sm:mr-9 sm:text-2xl"
        >
          Sonam's Portfolio
        </button>

        <div role="navigation" aria-label="Portfolio" className="flex min-w-0 items-center gap-4 sm:gap-8">
          {navItems.map((item) => (
            <button
              key={item.window}
              type="button"
              onClick={() => openWindow(item.window)}
              className="whitespace-nowrap text-sm font-medium transition hover:text-blue-700 sm:text-lg"
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>
    </>
  );
};

export default Navbar;
