
import { useMemo, useState } from "react";
import {
    Folder,
    House,
    BriefcaseBusiness,
    UserRound,
    Trash2,
    ChevronLeft,
    ChevronRight,
    FileText,
    FileImage,
    File,
} from "lucide-react";

import WindowWrapper from "../components/WindowWrapper";
import WindowControls from "../components/WindowControls";
import { locations } from "../constants/index.js";
import useWindowStore from "../store/window.js";

const SIDEBAR_ITEMS = [
    { id: "work", label: "Projects", Icon: BriefcaseBusiness },
    { id: "about", label: "About Me", Icon: UserRound },
    { id: "experience", label: "Experience", Icon: BriefcaseBusiness },
    { id: "trash", label: "Trash", Icon: Trash2 },
];

const isFolder = (item) =>
    item?.kind === "folder" ||
    item?.type === "folder" ||
    Array.isArray(item?.children);

const Finder = () => {
    const [currentLocation, setCurrentLocation] = useState("work");
    const [history, setHistory] = useState(["work"]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null);
    const [nestedFolder, setNestedFolder] = useState(null);

    const currentFolder =
        nestedFolder || locations?.[currentLocation] || locations?.work;

    const items = useMemo(
        () => currentFolder?.children || [],
        [currentFolder]
    );

    // Navigation
    const navigateTo = (id) => {
        if (!locations?.[id]) return;

        const nextHistory = history.slice(0, historyIndex + 1);
        nextHistory.push(id);

        setHistory(nextHistory);
        setHistoryIndex(nextHistory.length - 1);
        setCurrentLocation(id);
        setNestedFolder(null);
        setSelectedItem(null);
    };

    const goBack = () => {
        if (historyIndex <= 0) return;

        const nextIndex = historyIndex - 1;
        const nextLocation = history[nextIndex];

        setHistoryIndex(nextIndex);
        setCurrentLocation(nextLocation);
        setNestedFolder(null);
        setSelectedItem(null);
    };

    const goForward = () => {
        if (historyIndex >= history.length - 1) return;

        const nextIndex = historyIndex + 1;
        const nextLocation = history[nextIndex];

        setHistoryIndex(nextIndex);
        setCurrentLocation(nextLocation);
        setNestedFolder(null);
        setSelectedItem(null);
    };

    // Open folders and files
    const openFile = (item) => {
        if (!item) return;

        if (isFolder(item)) {
            if (locations?.[item.id]) {
                navigateTo(item.id);
            } else {
                const nextHistory = history.slice(0, historyIndex + 1);
                nextHistory.push(item.id);

                setHistory(nextHistory);
                setHistoryIndex(nextHistory.length - 1);
                setNestedFolder(item);
                setSelectedItem(null);
            }

            return;
        }

        let windowKey = "txtfile";

        if (item.fileType === "pdf") {
            windowKey = "resume";
        } else if (
            item.fileType === "img" ||
            item.fileType === "image"
        ) {
            windowKey = "imgfile";
        }

        useWindowStore.setState((state) => {
            const nextZIndex = (state.highestZIndex || 100) + 1;

            return {
                windows: {
                    ...state.windows,
                    [windowKey]: {
                        ...(state.windows[windowKey] || {}),
                        isOpen: true,
                        isMinimized: false,
                        isMaximized: false,
                        zIndex: nextZIndex,
                        data: item,
                    },
                },
                activeWindow: windowKey,
                highestZIndex: nextZIndex,
            };
        });
    };

    const getIcon = (item) => {
        if (isFolder(item)) return "/images/folder.png";

        if (item.fileType === "pdf") return "/images/pdf.png";

        if (
            item.fileType === "img" ||
            item.fileType === "image"
        ) {
            return item.imageUrl || null;
        }

        return null;
    };

    // Correct four-corner resizing
    const resizeWindow = (event, corner) => {
        event.preventDefault();
        event.stopPropagation();

        const root = event.currentTarget.closest(".finder-window");
        const wrapper = root?.closest("[data-window-wrapper]");

        if (!root || !wrapper) return;

        const startX = event.clientX;
        const startY = event.clientY;

        const rect = root.getBoundingClientRect();

        const startLeft = rect.left;
        const startTop = rect.top;
        const startWidth = rect.width;
        const startHeight = rect.height;

        const minWidth = 520;
        const minHeight = 360;

        const maxWidth = window.innerWidth - 16;
        const maxHeight = window.innerHeight - 90;

        // Keep the wrapper positioned using real coordinates.
        wrapper.style.left = `${startLeft}px`;
        wrapper.style.top = `${startTop}px`;
        wrapper.style.transform = "none";

        const onPointerMove = (moveEvent) => {
            const dx = moveEvent.clientX - startX;
            const dy = moveEvent.clientY - startY;

            let nextWidth = startWidth;
            let nextHeight = startHeight;

            // Horizontal resizing
            if (corner.includes("r")) {
                nextWidth = startWidth + dx;
            }

            if (corner.includes("l")) {
                nextWidth = startWidth - dx;
            }

            // Vertical resizing
            if (corner.includes("b")) {
                nextHeight = startHeight + dy;
            }

            if (corner.includes("t")) {
                nextHeight = startHeight - dy;
            }

            nextWidth = Math.max(
                minWidth,
                Math.min(nextWidth, maxWidth)
            );

            nextHeight = Math.max(
                minHeight,
                Math.min(nextHeight, maxHeight)
            );

            // When resizing from the left, keep the right edge fixed.
            if (corner.includes("l")) {
                wrapper.style.left = `${
                    startLeft + startWidth - nextWidth
                }px`;
            }

            // When resizing from the top, keep the bottom edge fixed.
            if (corner.includes("t")) {
                wrapper.style.top = `${
                    startTop + startHeight - nextHeight
                }px`;
            }

            root.style.width = `${nextWidth}px`;
            root.style.height = `${nextHeight}px`;
        };

        const onPointerUp = () => {
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerUp);
        };

        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerup", onPointerUp);
    };

    const resizeHandles = [
        {
            corner: "tl",
            className: "left-0 top-0 h-4 w-4 cursor-nwse-resize",
        },
        {
            corner: "tr",
            className: "right-0 top-0 h-4 w-4 cursor-nesw-resize",
        },
        {
            corner: "bl",
            className: "bottom-0 left-0 h-4 w-4 cursor-nesw-resize",
        },
        {
            corner: "br",
            className: "bottom-0 right-0 h-4 w-4 cursor-nwse-resize",
        },
    ];

    return (
        <div
            className="finder-window relative flex flex-col overflow-hidden rounded-[13px] bg-white text-gray-800 shadow-2xl"
            style={{
                width: "820px",
                height: "560px",
                minWidth: "520px",
                minHeight: "360px",
                maxWidth: "calc(100vw - 16px)",
                maxHeight: "calc(100vh - 90px)",
            }}
        >
            {/* Title bar */}
            <header
                id="window-header"
                className="flex h-[52px] shrink-0 items-center border-b border-gray-200 bg-[#f7f7f9] px-4"
                style={{ cursor: "grab" }}
            >
                <div className="flex w-[30%] items-center">
                    <WindowControls target="finder" />
                </div>

                <div className="flex flex-1 justify-center">
          <span className="text-[13px] font-semibold text-gray-600">
            {currentFolder?.name || "Finder"}
          </span>
                </div>

                <div className="w-[30%] text-right text-[11px] text-gray-400">
                    {items.length} items
                </div>
            </header>

            <div className="flex min-h-0 flex-1">
                {/* Sidebar */}
                <aside className="flex w-[172px] shrink-0 flex-col border-r border-gray-200 bg-[#f5f5f7] p-3">
                    <p className="mb-3 px-2 pt-2 text-[10px] font-bold tracking-[1.2px] text-gray-400">
                        FAVOURITES
                    </p>

                    {SIDEBAR_ITEMS.map(({ id, label, Icon }) => (
                        <button
                            key={id}
                            type="button"
                            onClick={() => navigateTo(id)}
                            className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2 text-left text-[12px] transition ${
                                currentLocation === id && !nestedFolder
                                    ? "bg-[#dceaff] font-semibold text-blue-600"
                                    : "text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            <Icon size={16} />
                            {label}
                        </button>
                    ))}

                    <div className="mt-auto border-t border-gray-200 px-2 pt-3 text-[10px] text-gray-400">
                        SonamOS Finder
                    </div>
                </aside>

                {/* Main area */}
                <main className="flex min-w-0 flex-1 flex-col bg-white">
                    {/* Navigation toolbar */}
                    <div className="flex h-[46px] shrink-0 items-center justify-between border-b border-gray-100 px-5">
                        <div className="flex items-center gap-4">
                            <button
                                type="button"
                                onClick={goBack}
                                disabled={historyIndex === 0}
                                className="text-gray-500 hover:text-blue-600 disabled:opacity-30"
                                title="Back"
                            >
                                <ChevronLeft size={19} />
                            </button>

                            <button
                                type="button"
                                onClick={goForward}
                                disabled={historyIndex >= history.length - 1}
                                className="text-gray-500 hover:text-blue-600 disabled:opacity-30"
                                title="Forward"
                            >
                                <ChevronRight size={19} />
                            </button>

                            <button
                                type="button"
                                onClick={() => navigateTo("work")}
                                className="text-gray-500 hover:text-blue-600"
                                title="Projects home"
                            >
                                <House size={17} />
                            </button>
                        </div>

                        <span className="max-w-[50%] truncate text-[11px] text-gray-400">
              {currentFolder?.name || "Finder"}
            </span>
                    </div>

                    {/* Folder contents */}
                    <div className="min-h-0 flex-1 overflow-auto p-5 sm:p-7">
                        {items.length > 0 ? (
                            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
                                {items.map((item, index) => {
                                    const icon = getIcon(item);
                                    const folder = isFolder(item);

                                    return (
                                        <button
                                            key={item.id || `${item.name}-${index}`}
                                            type="button"
                                            onClick={() => setSelectedItem(item.id)}
                                            onDoubleClick={() => openFile(item)}
                                            className={`flex min-h-[108px] min-w-0 flex-col items-center rounded-xl px-2 py-3 transition ${
                                                selectedItem === item.id
                                                    ? "bg-blue-50 ring-1 ring-blue-300"
                                                    : "hover:bg-gray-100"
                                            }`}
                                            title="Double-click to open"
                                        >
                                            <div className="flex h-[60px] w-full items-center justify-center">
                                                {icon ? (
                                                    <img
                                                        src={icon}
                                                        alt=""
                                                        draggable="false"
                                                        className="h-[56px] w-[68px] object-contain"
                                                        onError={(event) => {
                                                            event.currentTarget.style.display = "none";
                                                        }}
                                                    />
                                                ) : (
                                                    <span className="text-blue-500">
                            {folder ? (
                                <Folder size={38} />
                            ) : item.fileType === "pdf" ? (
                                <FileText size={34} />
                            ) : item.fileType === "img" ? (
                                <FileImage size={34} />
                            ) : (
                                <File size={34} />
                            )}
                          </span>
                                                )}
                                            </div>

                                            <span className="mt-2 w-full truncate text-center text-[11px] font-medium text-gray-700">
                        {item.name}
                      </span>
                                        </button>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="flex h-full flex-col items-center justify-center text-gray-400">
                                <Folder size={42} strokeWidth={1.2} />
                                <p className="mt-3 text-sm">This folder is empty</p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <footer className="flex h-7 shrink-0 items-center justify-between border-t border-gray-100 px-4 text-[10px] text-gray-400">
                        <span>{items.length} items</span>
                        <span>SonamOS Finder</span>
                    </footer>
                </main>
            </div>

            {/* Four resize corners */}
            {resizeHandles.map(({ corner, className }) => (
                <div
                    key={corner}
                    onPointerDown={(event) => resizeWindow(event, corner)}
                    className={`absolute z-50 ${className}`}
                    style={{
                        touchAction: "none",
                        userSelect: "none",
                    }}
                    title="Resize window"
                />
            ))}
        </div>
    );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
