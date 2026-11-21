
import WindowWrapper from "../components/WindowWrapper";
import WindowControls from "../components/WindowControls";
import { FileText } from "lucide-react";

const Text = ({ data }) => {
    const title = data?.subtitle || data?.name || "Untitled.txt";

    const description = Array.isArray(data?.description)
        ? data.description
        : data?.description
            ? [data.description]
            : ["No content available yet."];

    return (
        <div className="w-[min(550px,90vw)] overflow-hidden rounded-xl bg-white text-gray-800 shadow-xl">
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2 className="flex-1 text-center font-semibold">{title}</h2>
                <div className="w-12" />
            </div>

            <div className="min-h-[280px] bg-[#fffef8] p-7">
                <div className="mb-5 flex items-center gap-2 text-gray-400">
                    <FileText size={18} />
                    <span className="text-xs">{title}</span>
                </div>

                {description.map((paragraph, index) => (
                    <p
                        key={index}
                        className="mb-4 text-sm leading-7 text-gray-700"
                    >
                        {paragraph}
                    </p>
                ))}
            </div>

            <footer className="border-t border-gray-200 px-4 py-2 text-xs text-gray-400">
                Plain Text Document
            </footer>
        </div>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
