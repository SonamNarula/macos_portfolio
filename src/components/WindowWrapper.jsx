import { useLayoutEffect, useRef, useState } from "react";
import useWindowStore from "../store/window.js";

const WINDOW_SIZES = {
  finder: { width: 900, height: 650 },
  safari: { width: 1080, height: 760 },
  photos: { width: 880, height: 660 },
  contact: { width: 650, height: 620 },
  terminal: { width: 720, height: 560 },
  resume: { width: 900, height: 760 },
  txtfile: { width: 880, height: 760 },
  imgfile: { width: 780, height: 650 },
};

// Resize only from the four small corners. Full-height edge handles
// overlap the Safari scrollbar and make ordinary scrolling feel like resizing.
const RESIZE_HANDLES = [
  ["nw", "left-0 top-0 h-3 w-3 cursor-nwse-resize"],
  ["ne", "right-0 top-0 h-3 w-3 cursor-nesw-resize"],
  ["sw", "left-0 bottom-0 h-3 w-3 cursor-nesw-resize"],
  ["se", "right-0 bottom-0 h-3 w-3 cursor-nwse-resize"],
];

const WindowWrapper = (Component, windowKey) => {
  const WrappedComponent = (props) => {
    const wrapperRef = useRef(null);
    const [position, setPosition] = useState(null);

    const windowState = useWindowStore((state) => state.windows[windowKey]);
    const focusWindow = useWindowStore((state) => state.focusWindow);

    const isOpen = windowState?.isOpen ?? false;
    const isMinimized = windowState?.isMinimized ?? false;
    const isMaximized = windowState?.isMaximized ?? false;
    const zIndex = windowState?.zIndex ?? 10;

    const defaults = WINDOW_SIZES[windowKey] || { width: 800, height: 620 };
    const width = `min(${defaults.width}px, calc(100vw - 20px))`;
    const height = `min(${defaults.height}px, calc(100vh - 120px))`;

    useLayoutEffect(() => {
      const element = wrapperRef.current;
      if (!element || !isOpen || isMinimized || position) return;

      const rect = element.getBoundingClientRect();
      setPosition({
        x: Math.max(8, (window.innerWidth - rect.width) / 2),
        y: Math.max(44, (window.innerHeight - rect.height) / 2),
      });
    }, [isOpen, isMinimized, position]);

    useLayoutEffect(() => {
      const element = wrapperRef.current;
      if (!element) return;

      let drag = null;

      const onPointerDown = (event) => {
        const header = event.target.closest("#window-header");
        if (!header || isMaximized || event.button !== 0) return;
        if (event.target.closest("button, a, input, select, textarea, [data-no-drag]")) return;

        const rect = element.getBoundingClientRect();
        drag = {
          pointerId: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          left: rect.left,
          top: rect.top,
        };

        element.style.left = `${rect.left}px`;
        element.style.top = `${rect.top}px`;
        element.style.transform = "none";
        focusWindow?.(windowKey);
        event.preventDefault();
      };

      const onPointerMove = (event) => {
        if (!drag || event.pointerId !== drag.pointerId) return;

        const dx = event.clientX - drag.startX;
        const dy = event.clientY - drag.startY;
        const rect = element.getBoundingClientRect();

        const left = Math.max(
          0,
          Math.min(window.innerWidth - Math.min(140, rect.width), drag.left + dx)
        );
        const top = Math.max(36, Math.min(window.innerHeight - 80, drag.top + dy));

        element.style.left = `${left}px`;
        element.style.top = `${top}px`;
      };

      const onPointerUp = (event) => {
        if (drag && event.pointerId === drag.pointerId) drag = null;
      };

      element.addEventListener("pointerdown", onPointerDown);
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
      window.addEventListener("pointercancel", onPointerUp);

      return () => {
        element.removeEventListener("pointerdown", onPointerDown);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
        window.removeEventListener("pointercancel", onPointerUp);
      };
    }, [focusWindow, isMaximized, isOpen, isMinimized]);

    const beginResize = (event, direction) => {
      event.preventDefault();
      event.stopPropagation();
      if (isMaximized) return;

      const element = wrapperRef.current;
      if (!element) return;

      const start = element.getBoundingClientRect();
      const startX = event.clientX;
      const startY = event.clientY;
      const minWidth = Math.min(windowKey === "finder" ? 520 : 360, window.innerWidth - 20);
      const minHeight = Math.min(windowKey === "finder" ? 360 : 280, window.innerHeight - 120);
      const maxWidth = window.innerWidth - 20;
      const maxHeight = window.innerHeight - 120;

      const onMove = (moveEvent) => {
        const dx = moveEvent.clientX - startX;
        const dy = moveEvent.clientY - startY;

        let nextWidth = start.width;
        let nextHeight = start.height;

        if (direction.includes("e")) nextWidth = start.width + dx;
        if (direction.includes("w")) nextWidth = start.width - dx;
        if (direction.includes("s")) nextHeight = start.height + dy;
        if (direction.includes("n")) nextHeight = start.height - dy;

        nextWidth = Math.max(minWidth, Math.min(maxWidth, nextWidth));
        nextHeight = Math.max(minHeight, Math.min(maxHeight, nextHeight));

        const nextLeft = direction.includes("w") ? start.right - nextWidth : start.left;
        const nextTop = direction.includes("n") ? start.bottom - nextHeight : start.top;

        element.style.width = `${nextWidth}px`;
        element.style.height = `${nextHeight}px`;
        element.style.left = `${Math.max(0, Math.min(nextLeft, window.innerWidth - nextWidth))}px`;
        element.style.top = `${Math.max(36, Math.min(nextTop, window.innerHeight - nextHeight))}px`;
        element.style.transform = "none";
      };

      const onUp = () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("pointercancel", onUp);
      };

      focusWindow?.(windowKey);
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
    };

    if (!isOpen || isMinimized) return null;

    return (
      <section
        ref={wrapperRef}
        data-window-wrapper={windowKey}
        onMouseDown={() => focusWindow?.(windowKey)}
        style={{
          position: "absolute",
          width,
          height,
          minWidth: `min(${windowKey === "finder" ? 520 : 360}px, calc(100vw - 20px))`,
          minHeight: `min(${windowKey === "finder" ? 360 : 280}px, calc(100vh - 120px))`,
          maxWidth: "calc(100vw - 20px)",
          maxHeight: "calc(100vh - 110px)",
          left: position ? `${position.x}px` : "50%",
          top: position ? `${position.y}px` : "50%",
          transform: position ? "none" : "translate(-50%, -50%)",
          zIndex,
          ...(isMaximized
            ? {
                left: "8px",
                top: "42px",
                width: "calc(100vw - 16px)",
                height: "calc(100vh - 112px)",
                minWidth: 0,
                minHeight: 0,
                transform: "none",
              }
            : {}),
        }}
        className="window-wrapper"
      >
        <Component {...props} data={windowState?.data ?? props.data ?? null} />
        {!isMaximized && RESIZE_HANDLES.map(([direction, className]) => (
          <div
            key={direction}
            onPointerDown={(event) => beginResize(event, direction)}
            className={`absolute z-[100] ${className}`}
            style={{ touchAction: "none", userSelect: "none" }}
            aria-label={`Resize window from ${direction}`}
          />
        ))}
      </section>
    );
  };

  WrappedComponent.displayName = `WindowWrapper(${Component.displayName || Component.name || windowKey})`;
  return WrappedComponent;
};

export default WindowWrapper;
