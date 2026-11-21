import WindowWrapper from "../components/WindowWrapper";
import WindowControls from "../components/WindowControls";
import { FileText, ExternalLink } from "lucide-react";

const Text = ({ data }) => {
    const title = data?.subtitle || data?.name || "Project Details";

    const description = data?.description || "No description available.";

    const githubUrl =
        data?.githubUrl ||
        data?.github ||
        data?.link ||
        data?.url ||
        null;

    const liveUrl = data?.liveUrl || data?.demoUrl || null;

    const renderDescription = () => {
        if (Array.isArray(description)) {
            return description.map((item, index) => (
                <p key={index} className="mb-3 leading-7 text-gray-600">
                    {typeof item === "string" ? item : item?.text}
                </p>
            ));
        }

        return (
            <p className="whitespace-pre-line leading-7 text-gray-600">
                {description}
            </p>
        );
    };

    return (
        <div className="flex h-[min(600px,80vh)] w-[min(650px,90vw)] flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
            {/* Window Header */}
            <div
                id="window-header"
                className="flex items-center gap-3 border-b border-gray-200 bg-gray-50 px-4 py-3"
            >
                <WindowControls target="txtfile" />

                <div className="flex flex-1 items-center justify-center gap-2">
                    <FileText size={16} className="text-gray-500" />
                    <h2 className="text-sm font-semibold text-gray-700">
                        {title}
                    </h2>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-7">
                <div className="mx-auto max-w-xl">
                    <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              Project Overview
            </span>

                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                            {title.replace(/\.[^/.]+$/, "")}
                        </h1>
                    </div>

                    <div className="text-sm">
                        {renderDescription()}
                    </div>

                    {/* Project Links */}
                    {(githubUrl || liveUrl) && (
                        <div className="mt-8 border-t border-gray-200 pt-5">
                            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                                Explore Project
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {githubUrl && (
                                    <a
                                        href={githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700"
                                    >
                                        GitHub Repository
                                        <ExternalLink size={15} />
                                    </a>
                                )}

                                {liveUrl && (
                                    <a
                                        href={liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                                    >
                                        Live Demo
                                        <ExternalLink size={15} />
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;