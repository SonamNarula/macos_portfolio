
import { useMemo } from "react";
import WindowWrapper from "../components/WindowWrapper";
import WindowControls from "../components/WindowControls";
import { locations } from "../constants";
import useLocationStore from "../store/location";
import useWindowStore from "../store/window";
import {
    Folder,
    FileText,
    FileImage,
    File,
    ChevronLeft,
    ChevronRight,
    House,
} from "lucide-react";

const Finder = () => {
    const activeLocations = useLocationStore((state) => state.activeLocations);
    const setActiveLocation = useLocationStore(
        (state) => state.setActiveLocation
    );

    const openWindow = useWindowStore((state) => state.openWindow);

    const currentLocation = activeLocations?.[activeLocations.length - 1] || "work";
    const currentFolder = locations[currentLocation] || locations.work;

    const items = useMemo(
        () => currentFolder?.children || [],
        [currentFolder]
    );

    const openItem = (item) => {
        if (item.kind === "folder") {
            setActiveLocation(item.id);
            return;
        }

        if (item.fileType === "pdf") {
            openWindow("resume", { name: item.name });
        } else if (item.fileType === "img") {
            openWindow("imgfile", item);
        } else {
            openWindow("txtfile", item);
        }
    };

    const sidebarItems = [
        { id: "work", label: "Projects" },
        { id: "about", label: "About Me" },
        { id: "experience", label: "Experience" },
        { id: "resume", label: "Resume" },
        { id: "trash", label: "Trash" },
    ];

    const getFileIcon = (item) => {
        if (item.kind === "folder") return <Folder size={34} className="text-blue-500" />;
        if (item.fileType === "img") return <FileImage size={34} className="text-purple-500" />;
        if (item.fileType === "pdf") return <File size={34} className="text-red-500" />;
        return <FileText size={34} className="text-gray-500" />;
    };

    return (
        <div className="flex h-full min-h-[420px] flex-col overflow-hidden bg-white text-gray-800">
            <div id="window-header">
                <WindowControls target="finder" />
                <h2 className="flex-1 text-center font-semibold text-gray-700">
                    {currentFolder.name}
                </h2>
                <div className="w-12" />
            </div>

            <div className="flex min-h-0 flex-1">
                <aside className="w-44 shrink-0 border-r border-gray-200 bg-gray-50 p-3">
                    <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                        Favorites
                    </p>

                    {sidebarItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveLocation(item.id)}
                            className={`mb-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${
                                currentLocation === item.id
                                    ? "bg-blue-100 text-blue-700"
                                    : "text-gray-600 hover:bg-gray-200"
                            }`}
                        >
                            <Folder size={16} />
                            {item.label}
                        </button>
                    ))}
                </aside>

                <section className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-3">
                        <button
                            onClick={() => setActiveLocation("work")}
                            className="rounded p-1 hover:bg-gray-100"
                            title="Go to Projects"
                        >
                            <House size={17} />
                        </button>
                        <ChevronLeft size={17} className="text-gray-400" />
                        <ChevronRight size={17} className="text-gray-400" />
                        <span className="text-sm font-medium">{currentFolder.name}</span>
                    </div>

                    <div className="grid flex-1 content-start grid-cols-2 gap-5 overflow-auto p-5 sm:grid-cols-3">
                        {items.map((item) => (
                            <button
                                key={item.id}
                                onDoubleClick={() => openItem(item)}
                                onClick={() => {
                                    if (item.kind === "folder") {
                                        // Double-click opens folders, single-click selects.
                                    }
                                }}
                                className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-xl p-3 text-center transition hover:bg-blue-50"
                                title={`Double-click to open ${item.name}`}
                            >
                                {getFileIcon(item)}
                                <span className="max-w-full break-words text-xs text-gray-700">
                  {item.name}
                </span>
                            </button>
                        ))}
                    </div>

                    <footer className="border-t border-gray-200 px-4 py-2 text-xs text-gray-400">
                        {items.length} items
                    </footer>
                </section>
            </div>
        </div>
    );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
