
import WindowWrapper from "../components/WindowWrapper";
import WindowControls from "../components/WindowControls";
import useWindowStore from "../store/window";

import {
    Github,
    ExternalLink,
    FileText,
    ArrowUpRight,
    Code2,
} from "lucide-react";

const Text = ({ data }) => {
    const openWindow = useWindowStore((state) => state.openWindow);

    const title = data?.subtitle || data?.name || "Project Details";

    const description = Array.isArray(data?.description)
        ? data.description
        : data?.description
            ? [data.description]
            : ["No project description available."];

    const isProject = Boolean(data?.github);

    return (
        <div className="w-[min(680px,92vw)] max-h-[82vh] overflow-hidden rounded-2xl border border-white/60 bg-[#f7f7f9] text-gray-800 shadow-2xl">

            {/* Window Header */}
            <div
                id="window-header"
                className="flex h-12 items-center justify-between border-b border-gray-200 bg-[#f1f1f3] px-4"
            >
                <WindowControls target="txtfile" />

                <h2 className="text-sm font-semibold">
                    {title}
                </h2>

                <div className="w-12" />
            </div>

            <div className="max-h-[calc(82vh-48px)] overflow-y-auto p-6 sm:p-8">

                {/* Project Preview */}
                {isProject && (
                    <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
                        <img
                            src={data.imageUrl || "/images/project-1.png"}
                            alt={title}
                            className="h-48 w-full object-cover"
                        />
                    </div>
                )}

                {/* Title */}
                <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                        {isProject ? <Code2 size={23} /> : <FileText size={23} />}
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                            {title}
                        </h3>

                        <p className="text-xs text-gray-400">
                            {isProject ? "Project Overview" : "Personal Notes"}
                        </p>
                    </div>
                </div>

                {/* Description */}
                <div className="space-y-3">
                    {description.map((paragraph, index) => (
                        <p
                            key={index}
                            className="text-sm leading-7 text-gray-600"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Tech Stack */}
                {data?.techStack?.length > 0 && (
                    <section className="mt-7">
                        <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                            Technologies Used
                        </h4>

                        <div className="flex flex-wrap gap-2">
                            {data.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </section>
                )}

                {/* Project Links */}
                {isProject && (
                    <section className="mt-8 border-t border-gray-200 pt-6">
                        <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                            Explore Project
                        </h4>

                        <div className="flex flex-wrap gap-3">

                            <a
                                href={data.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#24292f] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black"
                            >
                                <Github size={17} />
                                {title === "NeuroNews" ? "Browse GitHub" : "View on GitHub"}
                                <ArrowUpRight size={15} />
                            </a>

                            {data.live && (
                                <a
                                    href={data.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:-translate-y-0.5 hover:bg-gray-50"
                                >
                                    <ExternalLink size={16} />
                                    Live Demo
                                </a>
                            )}

                        </div>
                    </section>
                )}

                <p className="mt-8 text-[11px] text-gray-400">
                    {isProject ? "Sonam Narula · Project Portfolio" : "Plain Text Document"}
                </p>
            </div>
        </div>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
