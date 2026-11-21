import { useEffect, useRef, useState } from "react";
import useWindowStore from "../store/window.js";

const WindowWrapper = (Component, windowKey) => {
  const WrappedComponent = (props) => {
    const wrapperRef = useRef(null);
    const windowState = useWindowStore((state) => state.windows[windowKey]);
    const focusWindow = useWindowStore((state) => state.focusWindow);

    const isOpen = windowState?.isOpen ?? false;
    const isMinimized = windowState?.isMinimized ?? false;
    const isMaximized = windowState?.isMaximized ?? false;
    const zIndex = windowState?.zIndex ?? 10;

    const [position, setPosition] = useState(null);

    useEffect(() => {
      if (!isOpen || isMinimized || position) return;
      const element = wrapperRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      setPosition({
        x: Math.max(8, (window.innerWidth - rect.width) / 2),
        y: Math.max(44, (window.innerHeight - rect.height) / 2),
      });
    }, [isOpen, isMinimized, position]);

    useEffect(() => {
      const element = wrapperRef.current;
      if (!element) return;

      let drag = null;

      const onPointerDown = (event) => {
        const header = event.target.closest("#window-header");
        if (!header || isMaximized) return;

        // Window controls and interactive elements should never start a drag.
        if (event.target.closest("button, a, input, select, textarea, [data-no-drag]")) return;
        if (event.button !== 0) return;

        const rect = element.getBoundingClientRect();
        drag = {
          pointerId: event.pointerId,
          x: event.clientX,
          y: event.clientY,
          left: rect.left,
          top: rect.top,
        };

        element.style.left = `${rect.left}px`;
        element.style.top = `${rect.top}px`;
        element.style.transform = "none";

        element.setPointerCapture?.(event.pointerId);
        focusWindow?.(windowKey);
      };

      const onPointerMove = (event) => {
        if (!drag || event.pointerId !== drag.pointerId) return;

        const dx = event.clientX - drag.x;
        const dy = event.clientY - drag.y;
        const rect = element.getBoundingClientRect();

        const left = Math.min(
          window.innerWidth - Math.min(160, rect.width),
          Math.max(0, drag.left + dx)
        );
        const top = Math.min(
          window.innerHeight - 90,
          Math.max(36, drag.top + dy)
        );

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
    }, [focusWindow, isMaximized]);

    useEffect(() => {
      const element = wrapperRef.current;
      if (!element || !position || isMaximized) return;
      element.style.left = `${position.x}px`;
      element.style.top = `${position.y}px`;
      element.style.transform = "none";
    }, [position, isMaximized]);

    if (!isOpen || isMinimized) return null;

    return (
      <section
        ref={wrapperRef}
        data-window-wrapper={windowKey}
        onMouseDown={() => focusWindow?.(windowKey)}
        style={{
          position: "absolute",
          left: position ? `${position.x}px` : "50%",
          top: position ? `${position.y}px` : "50%",
          transform: position ? "none" : "translate(-50%, -50%)",
          zIndex,
          maxWidth: "calc(100vw - 16px)",
          maxHeight: "calc(100vh - 48px)",
          ...(isMaximized
            ? {
                left: "8px",
                top: "40px",
                width: "calc(100vw - 16px)",
                height: "calc(100vh - 112px)",
                transform: "none",
              }
            : {}),
        }}
        className="window-wrapper"
      >
        <Component {...props} data={windowState?.data ?? props.data ?? null} />
      </section>
    );
  };

  WrappedComponent.displayName = `WindowWrapper(${Component.displayName || Component.name || windowKey})`;
  return WrappedComponent;
};

export default WindowWrapper;
