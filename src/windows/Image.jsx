
import WindowWrapper from "../components/WindowWrapper";
import WindowControls from "../components/WindowControls";

const Image = ({ data }) => {
    const imageUrl = data?.imageUrl || "/images/project-1.png";
    const imageName = data?.name || "Image Preview";

    return (
        <div className="w-[min(750px,90vw)] overflow-hidden rounded-xl bg-white">
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2 className="flex-1 text-center font-semibold text-gray-700">
                    {imageName}
                </h2>
                <div className="w-12" />
            </div>

            <div className="flex max-h-[75vh] items-center justify-center bg-[#e5e5e5] p-4">
                <img
                    src={imageUrl}
                    alt={imageName}
                    className="max-h-[65vh] max-w-full rounded-md object-contain"
                />
            </div>
        </div>
    );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
