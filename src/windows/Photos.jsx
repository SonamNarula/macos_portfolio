
import { useState } from "react";
import WindowWrapper from "../components/WindowWrapper";
import WindowControls from "../components/WindowControls";
import { photosLinks, gallery } from "../constants";
import { Images, Heart, Folder, Clock, Sparkles } from "lucide-react";

const Photos = () => {
    const [activeTab, setActiveTab] = useState("Library");

    const icons = {
        Library: Images,
        Memories: Sparkles,
        Projects: Folder,
        Moments: Clock,
        Favorites: Heart,
    };

    return (
        <div className="flex h-full min-h-[420px] w-[min(850px,90vw)] overflow-hidden rounded-xl bg-white text-gray-800">
            <aside className="w-48 shrink-0 border-r border-gray-200 bg-gray-50 p-4">
                <div className="mb-6">
                    <WindowControls target="photos" />
                </div>

                <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Library
                </h2>

                <div className="space-y-1">
                    {photosLinks.map((item) => {
                        const Icon = icons[item.title] || Images;

                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.title)}
                                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${
                                    activeTab === item.title
                                        ? "bg-blue-100 font-medium text-blue-700"
                                        : "text-gray-600 hover:bg-gray-200"
                                }`}
                            >
                                <Icon size={16} />
                                {item.title}
                            </button>
                        );
                    })}
                </div>
            </aside>

            <main className="min-w-0 flex-1 overflow-y-auto p-5 sm:p-7">
                <div className="mb-6">
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
                        Photos
                    </p>

                    <h1 className="mt-1 text-2xl font-semibold tracking-tight">
                        {activeTab}
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        A collection of projects, memories and moments.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {gallery.map((photo) => (
                        <div
                            key={photo.id}
                            className="group aspect-square overflow-hidden rounded-xl bg-gray-100"
                        >
                            <img
                                src={photo.img}
                                alt={`Gallery image ${photo.id}`}
                                loading="lazy"
                                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

                {gallery.length === 0 && (
                    <div className="flex h-48 flex-col items-center justify-center text-gray-400">
                        <Images size={36} />
                        <p className="mt-3 text-sm">No photos available yet.</p>
                    </div>
                )}

                <p className="mt-5 text-xs text-gray-400">
                    {gallery.length} items
                </p>
            </main>
        </div>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
