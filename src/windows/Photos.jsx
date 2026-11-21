import { useState } from "react";
import WindowWrapper from "../components/WindowWrapper";
import WindowControls from "../components/WindowControls";
import { Images, Heart, Folder, Clock, Sparkles } from "lucide-react";

const photoFiles = [
  { name: "Sonam 01", src: "/images/sonam%20narula%201.PNG" },
  { name: "Sonam 02", src: "/images/sonam%20narula%202.jpg" },
  { name: "Sonam 03", src: "/images/sonam%20narula%203.jpg" },
  { name: "Sonam 04", src: "/images/sonam%20narula%204.JPG" },
  { name: "Sonam 05", src: "/images/sonam%20narula%205.JPG" },
  { name: "Sonam 06", src: "/images/sonam%20narula%206.JPG" },
];

const tabs = [
  { name: "Library", Icon: Images },
  { name: "Memories", Icon: Sparkles },
  { name: "Projects", Icon: Folder },
  { name: "Moments", Icon: Clock },
  { name: "Favorites", Icon: Heart },
];

const Photos = () => {
  const [activeTab, setActiveTab] = useState("Library");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const visiblePhotos =
    activeTab === "Favorites"
      ? photoFiles.slice(0, 2)
      : activeTab === "Projects"
        ? []
        : photoFiles;

  return (
    <div className="relative flex h-full w-full min-h-0 overflow-hidden rounded-xl bg-white text-gray-800 shadow-2xl">
      <aside className="flex w-[175px] shrink-0 flex-col border-r border-gray-200 bg-[#f5f5f7] p-3">
        <div className="mb-7 pt-1">
          <WindowControls target="photos" />
        </div>

        <p className="mb-3 px-2 text-[10px] font-bold tracking-wider text-gray-400">
          LIBRARY
        </p>

        {tabs.map(({ name, Icon }) => (
          <button
            key={name}
            onClick={() => {
              setActiveTab(name);
              setSelectedPhoto(null);
            }}
            className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2 text-left text-xs ${
              activeTab === name
                ? "bg-blue-100 font-semibold text-blue-600"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Icon size={16} />
            {name}
          </button>
        ))}

        <div className="mt-auto border-t border-gray-200 pt-3 text-[10px] text-gray-400">
          SonamOS Photos
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <header id="window-header" className="flex h-[54px] shrink-0 items-center justify-between border-b border-gray-100 px-5">
          <h2 className="text-sm font-semibold">{activeTab}</h2>
          <span className="text-xs text-gray-400">{visiblePhotos.length} photos</span>
        </header>

        <div className="min-h-0 flex-1 overflow-auto p-5">
          {visiblePhotos.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {visiblePhotos.map((photo) => (
                <button
                  key={photo.src}
                  onClick={() => setSelectedPhoto(photo)}
                  className={`overflow-hidden rounded-xl bg-gray-100 text-left transition hover:shadow-lg ${
                    selectedPhoto?.src === photo.src ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.name}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.alt = "Image could not load";
                    }}
                  />
                  <p className="px-3 py-2 text-xs text-gray-600">{photo.name}</p>
                </button>
              ))}
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center text-gray-400">
              <Folder size={40} />
              <p className="mt-3 text-sm">No photos in this album yet</p>
            </div>
          )}
        </div>
      </main>

      {selectedPhoto && (
        <div
          className="absolute inset-0 z-[100] flex items-center justify-center bg-black/85 p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute right-5 top-5 text-3xl text-white"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close photo"
          >
            ×
          </button>
          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.name}
            className="max-h-full max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </div>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;
