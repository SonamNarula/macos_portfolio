import WindowWrapper from "../components/WindowWrapper";
import WindowControls from "../components/WindowControls";
import { ExternalLink } from "lucide-react";

const GitHubIcon = () => (
    <svg
        viewBox="0 0 24 24"
        width="19"
        height="19"
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
);

const Text = ({ data }) => {
    const project = data?.project || data || {};

    const title =
        project.name ||
        data?.subtitle ||
        data?.name ||
        "Project Overview";

    const description =
        project.description ||
        data?.description ||
        "Project details will be updated soon.";

    const githubUrl =
        project.githubUrl ||
        project.github ||
        project.repoUrl ||
        project.repository ||
        data?.githubUrl ||
        data?.github ||
        data?.repoUrl ||
        data?.url ||
        null;

    const liveUrl =
        project.liveUrl ||
        project.deploymentUrl ||
        project.demoUrl ||
        project.website ||
        data?.liveUrl ||
        data?.deploymentUrl ||
        data?.demoUrl ||
        null;

    const techStack =
        project.techStack ||
        project.technologies ||
        data?.techStack ||
        [];

    const renderDescription = () => {
        if (Array.isArray(description)) {
            return description.map((paragraph, index) => (
                <p key={index} className="mb-3 leading-7 text-gray-600">
                    {typeof paragraph === "string"
                        ? paragraph
                        : paragraph?.text || ""}
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
        <div className="flex h-[min(650px,82vh)] w-[min(760px,92vw)] flex-col overflow-hidden rounded-xl bg-white text-gray-800 shadow-2xl">

            {/* Header */}
            <header
                id="window-header"
                className="flex h-14 shrink-0 items-center justify-between border-b border-gray-200 bg-gray-50 px-4"
            >
                <WindowControls target="txtfile" />

                <h2 className="text-sm font-semibold text-gray-700">
                    {title} — Project Details
                </h2>

                <div className="w-16" />
            </header>

            {/* Project Details */}
            <main className="flex-1 overflow-y-auto p-7 sm:p-10">
                <div className="mx-auto max-w-2xl">

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
                        Featured Project
                    </p>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {title}
                    </h1>

                    <div className="mt-8">
                        <h3 className="mb-3 text-lg font-semibold text-gray-900">
                            About the Project
                        </h3>

                        <div className="text-sm sm:text-base">
                            {renderDescription()}
                        </div>
                    </div>

                    {techStack.length > 0 && (
                        <div className="mt-7">
                            <h3 className="mb-3 text-lg font-semibold text-gray-900">
                                Technologies Used
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
                                    >
                    {typeof tech === "string" ? tech : tech.name}
                  </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-9 border-t border-gray-200 pt-6">
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                            Project Links
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {githubUrl && (
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg bg-[#24292f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
                                >
                                    <GitHubIcon />
                                    View on GitHub
                                    <ExternalLink size={14} />
                                </a>
                            )}

                            {liveUrl && (
                                <a
                                    href={liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                                >
                                    Live Deployment
                                    <ExternalLink size={14} />
                                </a>
                            )}
                        </div>

                        {!githubUrl && !liveUrl && (
                            <p className="text-sm text-gray-400">
                                Project links have not been added yet.
                            </p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;