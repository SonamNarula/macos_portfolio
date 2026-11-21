import { useState } from "react";
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

import WindowWrapper from "../components/WindowWrapper.jsx";
import WindowControls from "../components/WindowControls.jsx";
import { locations } from "../constants/index.js";
import useWindowStore from "../store/window.js";

const SIDEBAR = [
  { id: "work", label: "Projects", Icon: BriefcaseBusiness },
  { id: "about", label: "About Me", Icon: UserRound },
  { id: "experience", label: "Experience", Icon: BriefcaseBusiness },
  { id: "resume", label: "Resume", Icon: FileText },
  { id: "trash", label: "Trash", Icon: Trash2 },
];

const isFolder = (item) =>
  item?.kind === "folder" ||
  item?.type === "folder" ||
  Array.isArray(item?.children);

const Finder = () => {
  const initialEntry = { key: "work", folder: locations.work };
  const [history, setHistory] = useState([initialEntry]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(null);

  const openWindow = useWindowStore((state) => state.openWindow);

  const current = history[historyIndex] || initialEntry;
  const currentFolder = current.folder || locations.work;
  const items = currentFolder?.children || [];

  const pushFolder = (folder, key = folder?.id ?? folder?.name) => {
    if (!folder || !Array.isArray(folder.children)) return;

    const next = history.slice(0, historyIndex + 1);
    next.push({ key: String(key), folder });
    setHistory(next);
    setHistoryIndex(next.length - 1);
    setSelectedId(null);
  };

  const goBack = () => {
    if (historyIndex > 0) {
      setHistoryIndex((index) => index - 1);
      setSelectedId(null);
    }
  };

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex((index) => index + 1);
      setSelectedId(null);
    }
  };

  const goHome = () => {
    setHistory([initialEntry]);
    setHistoryIndex(0);
    setSelectedId(null);
  };

  const selectSidebar = (id) => {
    const folder = locations[id];
    if (!folder) return;
    pushFolder(folder, id);
  };

  const openItem = (item) => {
    if (!item) return;

    if (isFolder(item)) {
      pushFolder(item);
      return;
    }

    const windowKey =
      item.fileType === "pdf"
        ? "resume"
        : item.fileType === "img" || item.fileType === "image"
          ? "imgfile"
          : "txtfile";

    openWindow(windowKey, item);
  };

  const getIcon = (item) => {
    if (isFolder(item)) return "/images/folder.png";
    if (item.fileType === "pdf") return "/images/pdf.png";
    if (item.fileType === "img" || item.fileType === "image") {
      return item.imageUrl || null;
    }
    return null;
  };

  const beginResize = (event, direction) => {
    event.preventDefault();
    event.stopPropagation();

    const frame = event.currentTarget.closest(".finder-window");
    const wrapper = frame?.closest("[data-window-wrapper]");
    if (!frame || !wrapper) return;

    const start = wrapper.getBoundingClientRect();
    const startX = event.clientX;
    const startY = event.clientY;
    const minW = Math.min(520, window.innerWidth - 20);
    const minH = Math.min(360, window.innerHeight - 120);
    const maxW = window.innerWidth - 20;
    const maxH = window.innerHeight - 120;

    const onMove = (moveEvent) => {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;

      let width = start.width;
      let height = start.height;

      if (direction.includes("r")) width = start.width + dx;
      if (direction.includes("l")) width = start.width - dx;
      if (direction.includes("b")) height = start.height + dy;
      if (direction.includes("t")) height = start.height - dy;

      width = Math.max(minW, Math.min(maxW, width));
      height = Math.max(minH, Math.min(maxH, height));

      const left = direction.includes("l") ? start.right - width : start.left;
      const top = direction.includes("t") ? start.bottom - height : start.top;

      wrapper.style.width = `${width}px`;
      wrapper.style.height = `${height}px`;
      wrapper.style.left = `${Math.max(0, Math.min(left, window.innerWidth - width))}px`;
      wrapper.style.top = `${Math.max(36, Math.min(top, window.innerHeight - height))}px`;
      wrapper.style.transform = "none";
    };

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  };

  const handles = [
    ["n", "inset-x-4 top-0 h-2 cursor-n-resize"],
    ["s", "inset-x-4 bottom-0 h-2 cursor-s-resize"],
    ["e", "right-0 inset-y-4 w-2 cursor-e-resize"],
    ["w", "left-0 inset-y-4 w-2 cursor-w-resize"],
    ["nw", "left-0 top-0 h-4 w-4 cursor-nwse-resize"],
    ["ne", "right-0 top-0 h-4 w-4 cursor-nesw-resize"],
    ["sw", "left-0 bottom-0 h-4 w-4 cursor-nesw-resize"],
    ["se", "right-0 bottom-0 h-4 w-4 cursor-nwse-resize"],
  ];

  return (
    <div className="finder-window relative flex h-full w-full min-h-0 flex-col overflow-hidden rounded-[13px] bg-white text-gray-800 shadow-2xl">
      <header
        id="window-header"
        className="flex h-[54px] shrink-0 items-center border-b border-gray-200 bg-[#f7f7f9] px-4"
      >
        <div className="flex w-1/3 items-center">
          <WindowControls target="finder" />
        </div>
        <div className="flex flex-1 justify-center">
          <span className="text-[13px] font-semibold text-gray-600">
            {currentFolder?.name || "Finder"}
          </span>
        </div>
        <div className="w-1/3 text-right text-[11px] text-gray-400">
          {items.length} items
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        <aside className="flex w-[170px] shrink-0 flex-col border-r border-gray-200 bg-[#f5f5f7] p-3">
          <p className="mb-3 px-2 pt-2 text-[10px] font-bold tracking-[1.2px] text-gray-400">
            FAVOURITES
          </p>

          {SIDEBAR.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => selectSidebar(id)}
              className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2 text-left text-[12px] transition ${
                current.key === id
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

        <main className="flex min-w-0 flex-1 flex-col bg-white">
          <div
            className="flex h-[46px] shrink-0 items-center justify-between border-b border-gray-100 px-5"
            data-no-drag
          >
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={goBack}
                disabled={historyIndex === 0}
                className="text-gray-500 hover:text-blue-600 disabled:opacity-30"
                aria-label="Back"
              >
                <ChevronLeft size={19} />
              </button>
              <button
                type="button"
                onClick={goForward}
                disabled={historyIndex >= history.length - 1}
                className="text-gray-500 hover:text-blue-600 disabled:opacity-30"
                aria-label="Forward"
              >
                <ChevronRight size={19} />
              </button>
              <button
                type="button"
                onClick={goHome}
                className="text-gray-500 hover:text-blue-600"
                aria-label="Projects home"
              >
                <House size={17} />
              </button>
            </div>
            <span className="max-w-[45%] truncate text-[11px] text-gray-400">
              {currentFolder?.name || "Finder"}
            </span>
          </div>

          <section className="min-h-0 flex-1 overflow-auto p-4 sm:p-6">
            {items.length ? (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(88px,1fr))] gap-3">
                {items.map((item, index) => {
                  const itemId = item.id ?? item.name ?? index;
                  const selected = selectedId === itemId;
                  const icon = getIcon(item);
                  const folder = isFolder(item);

                  return (
                    <button
                      key={itemId}
                      type="button"
                      onClick={() => setSelectedId(itemId)}
                      onDoubleClick={() => openItem(item)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") openItem(item);
                      }}
                      className={`flex min-h-[112px] min-w-0 flex-col items-center rounded-xl px-2 py-3 transition ${
                        selected ? "bg-blue-50 ring-1 ring-blue-300" : "hover:bg-gray-100"
                      }`}
                      title="Double-click to open"
                    >
                      <div className="flex h-[62px] w-full items-center justify-center">
                        {icon ? (
                          <img
                            src={icon}
                            alt=""
                            draggable="false"
                            className="h-[56px] w-[66px] object-contain"
                            onError={(event) => {
                              event.currentTarget.style.display = "none";
                            }}
                          />
                        ) : folder ? (
                          <Folder size={40} strokeWidth={1.4} className="text-blue-500" />
                        ) : item.fileType === "pdf" ? (
                          <FileText size={36} className="text-red-500" />
                        ) : item.fileType === "img" ? (
                          <FileImage size={36} className="text-blue-500" />
                        ) : item.fileType === "txt" ? (
                          <FileText size={36} className="text-blue-500" />
                        ) : (
                          <File size={36} className="text-blue-500" />
                        )}
                      </div>
                      <span className="mt-2 w-full break-words text-center text-[11px] font-medium leading-4 text-gray-700">
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
          </section>

          <footer className="flex h-7 shrink-0 items-center justify-between border-t border-gray-100 px-4 text-[10px] text-gray-400">
            <span>{items.length} items</span>
            <span>Double-click to open</span>
          </footer>
        </main>
      </div>

      {handles.map(([direction, className]) => (
        <div
          key={direction}
          onPointerDown={(event) => beginResize(event, direction)}
          className={`absolute z-[60] ${className}`}
          style={{ touchAction: "none", userSelect: "none" }}
          aria-label={`Resize from ${direction}`}
        />
      ))}
    </div>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
