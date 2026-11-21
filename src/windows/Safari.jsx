
import WindowWrapper from "../components/WindowWrapper.jsx";
import WindowControls from "../components/WindowControls.jsx";
import { blogPosts } from "../constants/index.js";

const GithubLogo = ({ size = 18 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.22-5.08 5.49.4.35.75 1.03.75 2.08V22c0 .29.2.64.76.53A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
);

const projectDetails = {
    HireLens: {
        description:
            "An AI-powered job preparation platform that helps candidates prepare for interviews through resume analysis, role-specific questions, skill-gap insights and personalized preparation plans.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Gemini AI"],
        live: null,
    },
    Trackify: {
        description:
            "A productivity and placement tracking dashboard to manage tasks, study progress, DSA practice and placement preparation through a unified workspace.",
        tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
        live: null,
    },
    NeuroNews: {
        description:
            "An AI-focused news application exploring intelligent information discovery and modern web development.",
        tech: ["React", "AI / ML", "JavaScript"],
        live: null,
    },
    CodeFusion: {
        description:
            "A collaborative coding platform designed to bring developers together through shared coding, real-time collaboration and an integrated development workspace.",
        tech: ["React", "Node.js", "WebSockets", "Monaco Editor"],
        live: null,
    },
};

const Safari = () => {
    return (
        <div className="flex h-[min(760px,88vh)] w-[min(1100px,94vw)] flex-col overflow-hidden rounded-xl bg-[#f5f5f7] text-[#1d1d1f] shadow-2xl">

            {/* Browser toolbar */}
            <div className="flex shrink-0 items-center gap-4 border-b border-gray-200 bg-[#f5f5f7] px-4 py-3">
                <WindowControls target="safari" />

                <div className="mx-auto flex w-full max-w-xl items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-500">
                    <span>🔒</span>
                    <span>sonamnarula.dev / projects</span>
                </div>
            </div>

            {/* Page content */}
            <main className="flex-1 overflow-y-auto px-5 py-7 sm:px-9">
                <div className="mx-auto max-w-5xl">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                        My Portfolio
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                        Selected Projects<span className="text-blue-500">.</span>
                    </h1>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                        A few things I've built while exploring software engineering,
                        full-stack development, problem-solving and Artificial Intelligence.
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

                        {blogPosts.map((project, index) => {
                            const title = project.title || "Project";
                            const details = projectDetails[title] || {
                                description: project.description || "A project from my development journey.",
                                tech: project.tech || [],
                                live: project.live || null,
                            };

                            const githubUrl =
                                project.link ||
                                project.github ||
                                "https://github.com/SonamNarula";

                            const imagePath =
                                project.imageUrl ||
                                project.image ||
                                `/images/project-${index + 1}.png`;

                            return (
                                <article
                                    key={project.id || title}
                                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="flex h-48 items-center justify-center overflow-hidden bg-gray-100">
                                        <img
                                            src={imagePath}
                                            alt={title}
                                            className="h-full w-full object-cover"
                                            onError={(event) => {
                                                event.currentTarget.style.display = "none";
                                            }}
                                        />
                                    </div>

                                    <div className="p-5">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                                            Project {String(index + 1).padStart(2, "0")}
                                        </p>

                                        <h2 className="mt-2 text-xl font-bold">{title}</h2>

                                        <p className="mt-3 text-sm leading-6 text-gray-600">
                                            {details.description}
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {details.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
                                                >
                          {tech}
                        </span>
                                            ))}
                                        </div>

                                        <div className="mt-5 flex flex-wrap gap-3 border-t border-gray-100 pt-4">
                                            <a
                                                href={githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-lg bg-[#24292f] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
                                            >
                                                <GithubLogo size={17} />
                                                View on GitHub
                                            </a>

                                            {details.live && (
                                                <a
                                                    href={details.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                                                >
                                                    Live Demo ↗
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}

                    </div>

                    <div className="mt-8 rounded-2xl bg-[#e9e9ed] p-6">
                        <div className="flex items-center gap-3">
                            <GithubLogo size={27} />
                            <h2 className="text-lg font-bold">Explore more on GitHub</h2>
                        </div>

                        <p className="mt-2 text-sm text-gray-600">
                            More repositories, experiments and ongoing work.
                        </p>

                        <a
                            href="https://github.com/SonamNarula"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
                        >
                            github.com/SonamNarula ↗
                        </a>
                    </div>

                    <p className="py-6 text-center text-xs text-gray-400">
                        © 2026 Sonam Narula
                    </p>
                </div>
            </main>
        </div>
    );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
