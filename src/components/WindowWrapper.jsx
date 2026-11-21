
import { useEffect, useRef, useState } from "react";
import useWindowStore from "../store/window.js";

const WindowWrapper = (Component, windowKey) => {
    const WrappedComponent = (props) => {
        const wrapperRef = useRef(null);

        const windowState = useWindowStore(
            (state) => state.windows[windowKey]
        );
        const focusWindow = useWindowStore((state) => state.focusWindow);

        const isOpen = windowState?.isOpen ?? false;
        const isMinimized = windowState?.isMinimized ?? false;
        const isMaximized = windowState?.isMaximized ?? false;
        const zIndex = windowState?.zIndex ?? 10;

        const [position, setPosition] = useState(null);

        useEffect(() => {
            if (!isOpen || isMinimized) return;

            const element = wrapperRef.current;
            if (!element) return;

            if (!position) {
                const rect = element.getBoundingClientRect();
                setPosition({
                    x: Math.max(8, (window.innerWidth - rect.width) / 2),
                    y: Math.max(45, (window.innerHeight - rect.height) / 2),
                });
            }
        }, [isOpen, isMinimized]);

        useEffect(() => {
            const element = wrapperRef.current;
            if (!element) return;

            let dragData = null;

            const handlePointerDown = (event) => {
                const header = event.target.closest("#window-header");

                if (!header) return;
                if (event.target.closest("button")) {
                    // Allow dragging from empty parts of the header, not its controls.
                    if (event.target.closest("[data-no-drag]")) return;
                }

                if (isMaximized) return;

                const rect = element.getBoundingClientRect();

                dragData = {
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

            const handlePointerMove = (event) => {
                if (!dragData) return;

                const dx = event.clientX - dragData.startX;
                const dy = event.clientY - dragData.startY;

                const maxLeft = window.innerWidth - 100;
                const maxTop = window.innerHeight - 80;

                const left = Math.max(
                    0,
                    Math.min(maxLeft, dragData.left + dx)
                );

                const top = Math.max(
                    32,
                    Math.min(maxTop, dragData.top + dy)
                );

                element.style.left = `${left}px`;
                element.style.top = `${top}px`;
            };

            const handlePointerUp = () => {
                dragData = null;
            };

            element.addEventListener("pointerdown", handlePointerDown);
            window.addEventListener("pointermove", handlePointerMove);
            window.addEventListener("pointerup", handlePointerUp);

            return () => {
                element.removeEventListener("pointerdown", handlePointerDown);
                window.removeEventListener("pointermove", handlePointerMove);
                window.removeEventListener("pointerup", handlePointerUp);
            };
        }, [focusWindow, windowKey, isMaximized]);

        useEffect(() => {
            if (!wrapperRef.current) return;

            if (position && !isMaximized) {
                wrapperRef.current.style.left = `${position.x}px`;
                wrapperRef.current.style.top = `${position.y}px`;
                wrapperRef.current.style.transform = "none";
            }
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
                    display: "block",
                    maxWidth: "calc(100vw - 8px)",
                    maxHeight: "calc(100vh - 75px)",
                    ...(isMaximized
                        ? {
                            left: "8px",
                            top: "36px",
                            width: "calc(100vw - 16px)",
                            height: "calc(100vh - 110px)",
                            transform: "none",
                        }
                        : {}),
                }}
                className="window-wrapper"
            >
                <Component {...props} data={windowState?.data ?? props.data} />
            </section>
        );
    };

    WrappedComponent.displayName = `WindowWrapper(${
        Component.displayName || Component.name || windowKey
    })`;

    return WrappedComponent;
};

export default WindowWrapper;
