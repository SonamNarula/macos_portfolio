
import { useMemo } from "react";
import {
    Folder,
    FolderOpen,
    FileText,
    FileImage,
    ChevronLeft,
    ChevronRight,
    House,
    BriefcaseBusiness,
} from "lucide-react";

import WindowWrapper from "../components/WindowWrapper";
import WindowControls from "../components/WindowControls";
import { locations } from "../constants";
import useLocationStore from "../store/location";
import useWindowStore from "../store/window";

const sidebarItems = [
    { id: "work", name: "Projects", icon: BriefcaseBusiness },
    { id: "about", name: "About Me", icon: House },
    { id: "experience", name: "Experience", icon: Folder },
    { id: "trash", name: "Trash", icon: Folder },
];

const Finder = () => {
    const activeLocations = useLocationStore(
        (state) => state.activeLocations
    );
    const setActiveLocation = useLocationStore(
        (state) => state.setActiveLocation
    );
    const goBack = useLocationStore((state) => state.goBack);

    const openWindow = useWindowStore((state) => state.openWindow);

    const currentLocation =
        activeLocations?.[activeLocations.length - 1] || "work";

    const currentFolder = locations[currentLocation] || locations.work;

    const items = useMemo(
        () => currentFolder?.children || [],
        [currentFolder]
    );

    const handleOpen = (item) => {
        if (item.kind === "folder") {
            setActiveLocation(item.id);
            return;
        }

        if (item.fileType === "pdf") {
            openWindow("resume");
        } else if (item.fileType === "img") {
            openWindow("imgfile");
        } else {
            openWindow("txtfile");
        }
    };

    const getFileIcon = (item) => {
        if (item.kind === "folder") return Folder;

        if (item.fileType === "img") return FileImage;

        return FileText;
    };

    return (
        <div
            id="finder"
            className="flex h-[520px] w-[min(850px,90vw)] overflow-hidden rounded-xl bg-white shadow-2xl"
        >
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="mb-5 flex items-center gap-3">
                    <WindowControls target="finder" />
                </div>

                <h3>Favourites</h3>

                <ul>
                    {sidebarItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <li
                                key={item.id}
                                className={
                                    currentLocation === item.id
                                        ? "active"
                                        : "not-active"
                                }
                                onClick={() => {
                                    if (locations[item.id]) {
                                        setActiveLocation(item.id);
                                    }
                                }}
                            >
                                <Icon size={17} />
                                <span className="text-sm">{item.name}</span>
                            </li>
                        );
                    })}
                </ul>
            </aside>

            {/* Main content */}
            <main className="content flex-1 overflow-y-auto bg-white">
                <div
                    id="window-header"
                    className="mb-6 flex items-center gap-3"
                >
                    <button
                        type="button"
                        onClick={goBack}
                        disabled={activeLocations.length <= 1}
                        className="rounded p-1 hover:bg-gray-200 disabled:opacity-30"
                    >
                        <ChevronLeft size={19} />
                    </button>

                    <button
                        type="button"
                        disabled
                        className="rounded p-1 opacity-30"
                    >
                        <ChevronRight size={19} />
                    </button>

                    <h2 className="ml-2 font-semibold text-gray-700">
                        {currentFolder?.name || "Finder"}
                    </h2>
                </div>

                {items.length > 0 ? (
                    <div className="grid grid-cols-3 gap-6 sm:grid-cols-4">
                        {items.map((item, index) => {
                            const Icon = getFileIcon(item);

                            return (
                                <button
                                    type="button"
                                    key={item.id || `${item.name}-${index}`}
                                    onDoubleClick={() => handleOpen(item)}
                                    className="group flex flex-col items-center gap-2 rounded-lg p-3 text-center transition hover:bg-blue-50"
                                    title="Double-click to open"
                                >
                                    <Icon
                                        size={48}
                                        strokeWidth={1.3}
                                        className={
                                            item.kind === "folder"
                                                ? "fill-blue-200 text-blue-500"
                                                : "text-gray-500"
                                        }
                                    />

                                    <span className="max-w-full break-words text-xs text-gray-700">
                    {item.name}
                  </span>
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    <div className="flex h-64 flex-col items-center justify-center text-gray-400">
                        <FolderOpen size={48} strokeWidth={1.2} />
                        <p className="mt-3 text-sm">This folder is empty</p>
                    </div>
                )}
            </main>
        </div>
    );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
