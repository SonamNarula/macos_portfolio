import { useEffect, useState } from "react";
import { Command, Wifi, Battery, Search, Volume2 } from "lucide-react";
import useWindowStore from "../store/window.js";

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
    { label: "Experience", window: "finder", data: { location: "experience" } },
    { label: "Contact", window: "contact" },
    { label: "Resume", window: "resume" },
  ];

  return (
    <div className="fixed left-0 top-0 z-[80] flex h-9 w-full items-center justify-between border-b border-white/10 bg-[#100d4c]/85 px-3 text-[12px] text-white shadow-sm backdrop-blur-xl sm:px-5">
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <Command size={16} className="shrink-0" />
        <button
          type="button"
          onClick={() => openWindow("finder")}
          className="shrink-0 font-semibold hover:text-blue-200"
          aria-label="Open SonamOS Finder"
        >
          SonamOS
        </button>
        <nav aria-label="Portfolio navigation" className="flex min-w-0 items-center gap-3 sm:gap-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => openWindow(item.window, item.data ?? null)}
              className="whitespace-nowrap text-white/85 transition hover:text-white hover:underline hover:underline-offset-4"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="ml-2 flex shrink-0 items-center gap-2 sm:gap-3">
        <Volume2 size={13} className="hidden sm:block" />
        <Wifi size={13} />
        <Battery size={15} />
        <Search size={13} className="hidden sm:block" />
        <span className="hidden md:block">{date}</span>
        <span className="font-medium tabular-nums">{time}</span>
      </div>
    </div>
  );
};

export default Navbar;
