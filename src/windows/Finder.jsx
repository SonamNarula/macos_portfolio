
import { useState } from "react";
import WindowWrapper from "../components/WindowWrapper";
import WindowControls from "../components/WindowControls";
import { locations } from "../constants/index.js";
import useWindowStore from "../store/window";

import {
    ChevronLeft,
    ChevronRight,
    House,
    BriefcaseBusiness,
    Trash2,
} from "lucide-react";

const Finder = () => {
    const [currentFolder, setCurrentFolder] = useState(locations.work);
    const [history, setHistory] = useState([]);

    const openWindow = useWindowStore((state) => state.openWindow);

    const navigateTo = (folder) => {
        setHistory((previous) => [...previous, currentFolder]);
        setCurrentFolder(folder);
    };

    const goBack = () => {
        if (history.length === 0) return;

        const previous = [...history];
        const lastFolder = previous.pop();

        setHistory(previous);
        setCurrentFolder(lastFolder);
    };

    const openItem = (item) => {
        if (item.kind === "folder") {
            navigateTo(item);
            return;
        }

        if (item.fileType === "pdf") {
            openWindow("resume", item);
        } else if (item.fileType === "img") {
            openWindow("imgfile", item);
        } else {
            openWindow("txtfile", item);
        }
    };

    const sidebarItems = [
        { id: "work", name: "Projects", icon: BriefcaseBusiness },
        { id: "about", name: "About Me", icon: House },
        { id: "experience", name: "Experience", icon: BriefcaseBusiness },
        { id: "trash", name: "Trash", icon: Trash2 },
    ];

    const changeRoot = (id) => {
        setHistory([]);
        setCurrentFolder(locations[id] || locations.work);
    };

    return (
        <div className="flex h-[min(520px,75vh)] w-[min(850px,92vw)] overflow-hidden rounded-xl bg-white text-gray-800 shadow-2xl">

            {/* Sidebar */}
            <aside className="flex w-44 shrink-0 flex-col border-r border-gray-200 bg-[#f5f5f7] p-4 sm:w-48">
                <div className="mb-7">
                    <WindowControls target="finder" />
                </div>

                <p className="mb-3 px-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Favourites
                </p>

                <div className="space-y-1">
                    {sidebarItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => changeRoot(item.id)}
                                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${
                                    currentFolder.type === item.id
                                        ? "bg-blue-100 font-medium text-blue-700"
                                        : "text-gray-600 hover:bg-gray-200"
                                }`}
                            >
                                <Icon size={17} />
                                {item.name}
                            </button>
                        );
                    })}
                </div>

                <div className="mt-auto border-t border-gray-200 pt-4">
                    <p className="px-2 text-[11px] text-gray-400">
                        SonamOS Finder
                    </p>
                </div>
            </aside>

            {/* Main area */}
            <main className="flex min-w-0 flex-1 flex-col bg-white">
                <header
                    id="window-header"
                    className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 px-5"
                >
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={goBack}
                            disabled={history.length === 0}
                            className="text-gray-400 hover:text-gray-800 disabled:opacity-30"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            type="button"
                            onClick={() => changeRoot("work")}
                            className="text-gray-400 hover:text-gray-800"
                        >
                            <House size={17} />
                        </button>

                        <ChevronRight size={15} className="text-gray-300" />
                    </div>

                    <h2 className="truncate text-sm font-semibold text-gray-700">
                        {currentFolder.name}
                    </h2>

                    <div className="w-10" />
                </header>

                <section className="flex-1 overflow-y-auto p-5 sm:p-7">
                    {currentFolder.children?.length > 0 ? (
                        <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
                            {currentFolder.children.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onDoubleClick={() => openItem(item)}
                                    onClick={() => {
                                        if (item.kind === "file") openItem(item);
                                    }}
                                    className="group flex min-h-28 flex-col items-center justify-start gap-2 rounded-xl p-3 text-center transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    title={
                                        item.kind === "folder"
                                            ? "Double-click to open folder"
                                            : "Click to open file"
                                    }
                                >
                                    <div className="flex h-16 w-16 items-center justify-center">
                                        <img
                                            src={
                                                item.icon ||
                                                (item.kind === "folder"
                                                    ? "/images/folder.png"
                                                    : "/images/txt.png")
                                            }
                                            alt=""
                                            className="h-14 w-14 object-contain transition-transform duration-200 group-hover:scale-105"
                                        />
                                    </div>

                                    <span className="max-w-full break-words text-xs font-medium text-gray-700">
                    {item.name}
                  </span>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="flex h-full min-h-60 flex-col items-center justify-center text-center">
                            <Trash2 size={42} className="mb-3 text-gray-300" />
                            <p className="text-sm font-semibold text-gray-600">
                                This folder is empty
                            </p>
                        </div>
                    )}
                </section>

                <footer className="flex h-9 shrink-0 items-center justify-between border-t border-gray-200 px-5 text-[11px] text-gray-400">
                    <span>{currentFolder.children?.length || 0} items</span>
                    <span>Sonam's Portfolio</span>
                </footer>
            </main>
        </div>
    );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
