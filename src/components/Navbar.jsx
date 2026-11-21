
import { useEffect, useState } from "react";
import {
    Command,
    Wifi,
    Battery,
    Search,
    Volume2,
} from "lucide-react";

const Navbar = () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);

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

    return (
        <nav className="fixed left-0 top-0 z-50 flex h-9 w-full items-center justify-between border-b border-white/10 bg-black/30 px-5 text-sm text-white backdrop-blur-xl">
            <div className="flex items-center gap-5">
                <Command size={18} />
                <span className="font-semibold">SonamOS</span>
                <span className="hidden sm:block">File</span>
                <span className="hidden sm:block">Edit</span>
                <span className="hidden sm:block">View</span>
                <span className="hidden sm:block">Window</span>
                <span className="hidden sm:block">Help</span>
            </div>

            <div className="flex items-center gap-4">
                <Volume2 size={15} />
                <Wifi size={15} />
                <Battery size={17} />
                <Search size={15} />
                <span className="hidden sm:block">{date}</span>
                <span className="font-medium tabular-nums">{time}</span>
            </div>
        </nav>
    );
};

export default Navbar;
