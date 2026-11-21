
import WindowWrapper from "#hoc/WindowWrapper";
import { techStack } from "#constants/index.js";
import { Check, Flag } from "lucide-react";
import WindowControls from "#components/WindowControls";

const Terminal = () => {
    return (
        <div className="h-full">
            <div
                id="window-header"
                className="flex items-center justify-between px-4 py-3 rounded-t-lg bg-gray-50 border-b border-gray-200 select-none text-sm text-gray-400"
            >
                <WindowControls target="terminal" />
                <h2 className="font-bold text-lg text-gray-700">
                    Technical Skills
                </h2>
                <div className="w-10" />
            </div>

            <div className="p-4 bg-white rounded-b-lg">
                <p className="font-mono text-sm">
          <span className="font-bold text-indigo-600">
            sonam@sonamos %
          </span>{" "}
                    show tech stack
                </p>

                <div className="flex items-center mt-4 mb-2 font-medium text-gray-600">
                    <p className="w-32">Category</p>
                    <p>Technologies</p>
                </div>

                <ul className="py-2 my-2 border-y border-dashed space-y-3">
                    {techStack.map(({ category, items }) => (
                        <li
                            key={category}
                            className="flex items-start my-3 text-sm"
                        >
                            <Check className="text-green-600 w-5 shrink-0" size={18} />

                            <h3 className="w-32 shrink-0 font-bold text-green-600">
                                {category}
                            </h3>

                            <ul className="flex flex-wrap gap-x-1 text-gray-800">
                                {items.map((item, index) => (
                                    <li key={item}>
                                        {item}
                                        {index !== items.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="text-green-600 space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                        <Check size={18} />
                        {techStack.length} skill categories loaded successfully
                    </p>

                    <p className="text-gray-700 flex items-center gap-2">
                        <Flag size={15} fill="black" />
                        System status: Online
                    </p>
                </div>
            </div>
        </div>
    );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
