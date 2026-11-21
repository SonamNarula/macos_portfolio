
import WindowWrapper from "../components/WindowWrapper";
import WindowControls from "../components/WindowControls";

const Resume = () => {
    return (
        <div className="flex h-[80vh] max-h-[750px] w-[min(850px,90vw)] flex-col overflow-hidden rounded-xl bg-white">
            <div id="window-header">
                <WindowControls target="resume" />
                <h2 className="flex-1 text-center font-semibold text-gray-700">
                    Sonam_Narula_Resume.pdf
                </h2>
                <div className="w-12" />
            </div>

            <iframe
                src="/files/Sonam_Narula_Resume_Updated%20(1).pdf"
                title="Sonam Narula Resume"
                className="h-full w-full flex-1"
            />
        </div>
    );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
