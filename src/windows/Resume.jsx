import WindowWrapper from "../components/WindowWrapper";
import WindowControls from "../components/WindowControls";

const Resume = () => {
  return (
    <div className="flex h-full w-full min-h-0 flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
      <div id="window-header" className="flex h-14 shrink-0 items-center justify-between border-b border-gray-200 bg-gray-50 px-4">
        <WindowControls target="resume" />
        <h2 className="flex-1 text-center text-sm font-semibold text-gray-700">
          Sonam_Narula_Resume.pdf
        </h2>
        <div className="w-10" />
      </div>

      <iframe
        src="/files/Sonam_Narula_Resume_Updated%20(1).pdf"
        title="Sonam Narula Resume"
        className="h-full w-full flex-1 bg-gray-100"
      />
    </div>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
