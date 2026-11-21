import { Minus, Square, X } from "lucide-react";
import useWindowStore from "../store/window";

const WindowControls = ({ target }) => {
    const closeWindow = useWindowStore((state) => state.closeWindow);
    const minimizeWindow = useWindowStore((state) => state.minimizeWindow);
    const maximizeWindow = useWindowStore((state) => state.maximizeWindow);

    return (
        <div className="flex items-center gap-2">
            <button
                type="button"
                onClick={() => closeWindow(target)}
                className="group flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f57]"
                aria-label="Close window"
            >
                <X size={9} className="text-black opacity-0 group-hover:opacity-100" />
            </button>

            <button
                type="button"
                onClick={() => minimizeWindow(target)}
                className="group flex h-3 w-3 items-center justify-center rounded-full bg-[#febc2e]"
                aria-label="Minimize window"
            >
                <Minus size={9} className="text-black opacity-0 group-hover:opacity-100" />
            </button>

            <button
                type="button"
                onClick={() => maximizeWindow(target)}
                className="group flex h-3 w-3 items-center justify-center rounded-full bg-[#28c840]"
                aria-label="Maximize window"
            >
                <Square size={7} className="text-black opacity-0 group-hover:opacity-100" />
            </button>
        </div>
    );
};

export default WindowControls;