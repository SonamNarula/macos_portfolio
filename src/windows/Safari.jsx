
import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import { blogPosts } from "#constants/index.js";
import { ExternalLink, Globe, Lock, Search } from "lucide-react";

const Safari = () => {
    return (
        <div className="flex h-full flex-col overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
            {/* Safari title bar */}
            <div className="flex items-center gap-3 border-b border-gray-300 bg-[#f5f5f7] px-4 py-3">
                <WindowControls target="safari" />

                <div className="mx-auto flex w-full max-w-xl items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-600">
                    <Lock size={13} />
                    <span className="flex-1 text-center">sonamnarula.dev</span>
                    <Search size={14} />
                </div>

                <Globe size={18} className="text-gray-500" />
            </div>

            {/* Page content */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-8">
                <div className="mx-auto max-w-5xl">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                        Portfolio / Selected Work
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Things I've built.
                    </h1>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                        A collection of projects where I've explored software development,
                        problem-solving, and Generative AI.
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                        {blogPosts.map((project, index) => {
                            const projectLink = project.link || project.url || "https://github.com/SonamNarula";
                            const projectImage = project.image || project.img;

                            return (
                                <article
                                    key={project.title || index}
                                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="flex h-44 items-center justify-center overflow-hidden bg-gray-100">
                                        {projectImage ? (
                                            <img
                                                src={projectImage}
                                                alt={project.title || "Project preview"}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <div className="text-5xl font-semibold text-gray-300">
                                                {project.title?.charAt(0) || "S"}
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-5">
                                        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                                            Selected project {String(index + 1).padStart(2, "0")}
                                        </p>

                                        <h2 className="text-xl font-semibold">
                                            {project.title || "Untitled project"}
                                        </h2>

                                        <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
                                            {project.description || "A project built as part of my software development journey."}
                                        </p>

                                        <a
                                            href={projectLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                                        >
                                            View project <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <div className="mt-8 rounded-2xl bg-[#e9e9ed] p-5">
                        <p className="text-sm font-medium">More on GitHub</p>
                        <p className="mt-1 text-sm text-gray-600">
                            Explore my repositories, experiments, and ongoing work.
                        </p>
                        <a
                            href="https://github.com/SonamNarula"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
                        >
                            github.com/SonamNarula <ExternalLink size={14} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
