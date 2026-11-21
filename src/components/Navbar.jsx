import { useEffect, useState } from "react";
import { Wifi, Battery, Search, Volume2 } from "lucide-react";

const Navbar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const date = currentTime.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
    });

    const time = currentTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <nav className="fixed top-0 left-0 z-50 flex h-9 w-full items-center justify-between bg-black/30 px-5 text-sm text-white backdrop-blur-xl">

            {/* Left section */}
            <div className="flex items-center gap-5">
                <span className="text-lg font-semibold">⌘</span>
                <span className="font-semibold">SonamOS</span>
                <span className="hidden sm:block">About</span>
                <span className="hidden sm:block">Projects</span>
                <span className="hidden sm:block">Contact</span>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-4">
                <Volume2 size={15} />
                <Wifi size={15} />
                <Battery size={17} />
                <Search size={15} />

                <span className="hidden sm:block">
          {date}
        </span>

                <span className="font-medium tabular-nums">
          {time}
        </span>
            </div>
        </nav>
    );
};

export default Navbar;