import WindowWrapper from "../components/WindowWrapper.jsx";
import WindowControls from "../components/WindowControls.jsx";
import { blogPosts } from "../constants/index.js";
import useWindowStore from "../store/window.js";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const GithubLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.22-5.08 5.49.4.35.75 1.03.75 2.08V22c0 .29.2.64.76.53A11.1 11.1 0 0 0 12 .9Z" />
  </svg>
);

const Safari = () => {
  const openWindow = useWindowStore((state) => state.openWindow);

  const showDetails = (project) => {
    const projectFile = {
      ...project,
      subtitle: project.name,
      name: project.name,
      fileType: "txt",
    };
    openWindow("txtfile", projectFile);
  };

  return (
    <div className="flex h-full w-full min-w-0 flex-col overflow-hidden rounded-xl bg-[#f5f5f7] text-[#1d1d1f]">
      <div id="window-header" className="flex h-14 shrink-0 items-center gap-4 border-b border-gray-200 bg-[#f5f5f7] px-4">
        <WindowControls target="safari" />
        <div className="flex min-w-0 flex-1 items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-500">
          <span className="truncate">sonamnarula.dev / projects</span>
        </div>
        <div className="w-6" />
      </div>

      <main className="h-0 min-h-0 w-full flex-1 overflow-y-auto overflow-x-hidden overscroll-contain px-5 py-6 sm:px-8" style={{ WebkitOverflowScrolling: "touch" }}>
        <div className="mx-0 w-full max-w-none">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Selected Work</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Projects I've built<span className="text-blue-500">.</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            A closer look at my work across AI-powered applications, productivity tools and collaborative developer experiences.
          </p>

          <div className="mt-7 grid w-full grid-cols-1 gap-5 md:grid-cols-2">
            {blogPosts.map((project, index) => (
              <article key={project.id} className="flex min-w-0 flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
                      {project.category || `Project 0${index + 1}`}
                    </p>
                    <h2 className="mt-2 break-words text-xl font-bold">{project.title}</h2>
                  </div>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-gray-500">2026</span>
                </div>

                <div className="mt-4 flex-1 space-y-2 text-sm leading-6 text-gray-600">
                  {(Array.isArray(project.description) ? project.description.slice(0, 2) : [project.description]).map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {(project.tech || []).slice(0, 8).map((tech) => (
                    <span key={tech} className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700">{tech}</span>
                  ))}
                  {(project.tech || []).length > 8 && (
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] text-gray-500">+{project.tech.length - 8} more</span>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap gap-3 border-t border-gray-100 pt-4">
                  <button onClick={() => showDetails(project)} className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                    Explore details
                  </button>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#24292f] px-4 py-2.5 text-sm font-semibold text-white hover:bg-black">
                      <GithubLogo size={17} /> GitHub <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                      Live demo <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="py-7 text-center text-xs text-gray-400">© 2026 Sonam Narula</p>
        </div>
      </main>
    </div>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
