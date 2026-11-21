import WindowWrapper from "../components/WindowWrapper";
import WindowControls from "../components/WindowControls";

const Image = ({ data }) => {
  const imageUrl = data?.imageUrl || data?.src || "/images/sonam%20narula%201.PNG";
  const imageName = data?.name || "Image Preview";

  return (
    <div className="flex h-full w-full min-h-0 flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
      <div id="window-header" className="flex h-14 shrink-0 items-center justify-between border-b border-gray-200 bg-gray-50 px-4">
        <WindowControls target="imgfile" />
        <h2 className="min-w-0 flex-1 truncate text-center text-sm font-semibold text-gray-700">
          {imageName}
        </h2>
        <div className="w-10" />
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center bg-[#e5e5e5] p-4">
        <img
          src={imageUrl}
          alt={imageName}
          className="max-h-full max-w-full rounded-md object-contain"
        />
      </div>
    </div>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;
