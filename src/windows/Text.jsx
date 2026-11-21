import WindowWrapper from "../components/WindowWrapper.jsx";
import WindowControls from "../components/WindowControls.jsx";
import { ExternalLink, CheckCircle2, Layers3, BriefcaseBusiness } from "lucide-react";

const GitHubIcon = ({ size = 19 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z" />
  </svg>
);

const Text = ({ data }) => {
  const title = (data?.subtitle || data?.name || "Details").replace(/\.txt$/i, "");
  const description = data?.description || "Details will be added soon.";
  const techStack = Array.isArray(data?.techStack) ? data.techStack : [];
  const highlights = Array.isArray(data?.highlights) ? data.highlights : [];
  const architecture = Array.isArray(data?.architecture) ? data.architecture : [];
  const github = data?.github || data?.repository || data?.repoUrl || null;
  const live = data?.live || data?.liveUrl || data?.deploymentUrl || null;
  const isExperience = ["Leadership / Mentoring", "Campus / Innovation", "Community"].includes(data?.category);
  const paragraphs = Array.isArray(description) ? description : [description];
  const experienceImages = Array.isArray(data?.imageUrls) ? data.imageUrls : data?.imageUrl ? [data.imageUrl] : [];

  return (
    <div className="relative flex h-full w-full min-w-0 max-w-full flex-col overflow-hidden rounded-xl bg-white text-gray-800 shadow-2xl">
      <header id="window-header" className="flex h-14 shrink-0 items-center justify-between border-b border-gray-200 bg-gray-50 px-3 sm:px-4">
        <div className="w-16 shrink-0"><WindowControls target="txtfile" /></div>
        <h2 className="min-w-0 flex-1 truncate px-2 text-center text-sm font-semibold text-gray-700">{title}</h2>
        <div className="w-16 shrink-0" />
      </header>

      <div className="absolute inset-x-0 bottom-0 top-14 overflow-y-auto overflow-x-hidden overscroll-contain" style={{ WebkitOverflowScrolling: "touch" }}>
        <div className="mx-auto block w-full min-w-0 max-w-3xl px-4 py-6 sm:px-8 sm:py-9">
          {experienceImages.length > 0 && (
            <div className={`mb-7 grid w-full min-w-0 gap-3 ${experienceImages.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
              {experienceImages.map((src, index) => (
                <figure key={src} className="min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
                  <img
                    src={src}
                    alt={`${title} experience photo ${index + 1}`}
                    loading="lazy"
                    className="block h-auto max-h-[440px] w-full object-contain"
                  />
                </figure>
              ))}
            </div>
          )}

          <div className="mb-7 min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              {data?.category || (isExperience ? "Experience" : "Project overview")}
            </p>
            <h1 className="mt-3 break-words text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
            {data?.role && (
              <p className="mt-2 break-words text-base font-medium text-gray-500">
                {data.role}{data.organization ? ` · ${data.organization}` : ""}
              </p>
            )}
          </div>

          <section className="mb-8 min-w-0">
            <div className="mb-4 flex items-center gap-2">
              <BriefcaseBusiness size={18} className="shrink-0 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">{isExperience ? "About the Experience" : "About the Project"}</h3>
            </div>
            <div className="min-w-0 space-y-3 break-words text-sm leading-7 text-gray-600 sm:text-[15px]">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="break-words">{typeof paragraph === "string" ? paragraph : paragraph?.text || ""}</p>
              ))}
            </div>
          </section>

          {highlights.length > 0 && (
            <section className="mb-8 min-w-0">
              <div className="mb-4 flex items-center gap-2">
                <CheckCircle2 size={18} className="shrink-0 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">{isExperience ? "What I Do" : "Key Features & Contributions"}</h3>
              </div>
              <ul className="space-y-3">
                {highlights.map((item, index) => (
                  <li key={index} className="flex min-w-0 items-start gap-3 text-sm leading-6 text-gray-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    <span className="min-w-0 break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {architecture.length > 0 && (
            <section className="mb-8 min-w-0">
              <div className="mb-4 flex items-center gap-2">
                <Layers3 size={18} className="shrink-0 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Architecture & Implementation</h3>
              </div>
              <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
                {architecture.map((item, index) => (
                  <div key={index} className="min-w-0 break-words rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm leading-6 text-gray-600">{item}</div>
                ))}
              </div>
            </section>
          )}

          {techStack.length > 0 && (
            <section className="mb-8 min-w-0">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Core Technologies Used</h3>
              <div className="flex min-w-0 flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span key={index} className="max-w-full break-words rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
                    {typeof tech === "string" ? tech : tech.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {(github || live) && (
            <section className="border-t border-gray-200 pt-6 pb-2">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                {isExperience ? "Connect" : "Project Links"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#24292f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black">
                    <GitHubIcon /> View on GitHub <ExternalLink size={14} />
                  </a>
                )}
                {live && (
                  <a href={live} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                    Live Deployment <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
