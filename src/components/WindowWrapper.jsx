import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";
import useWindowStore from "../store/window.js";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
    const WrappedComponent = (props) => {
        const windowRef = useRef(null);

        const windowState = useWindowStore(
            (state) => state.windows[windowKey]
        );

        const focusWindow = useWindowStore(
            (state) => state.focusWindow
        );

        const isOpen = windowState?.isOpen ?? false;
        const isMinimized = windowState?.isMinimized ?? false;
        const isMaximized = windowState?.isMaximized ?? false;
        const zIndex = windowState?.zIndex ?? 0;

        // Show or hide window
        useLayoutEffect(() => {
            const element = windowRef.current;

            if (!element) return;

            element.style.display =
                isOpen && !isMinimized ? "block" : "none";
        }, [isOpen, isMinimized]);

        // Opening animation
        useGSAP(
            () => {
                const element = windowRef.current;

                if (!element || !isOpen || isMinimized) return;

                gsap.fromTo(
                    element,
                    {
                        scale: 0.92,
                        opacity: 0,
                        y: 25,
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        duration: 0.35,
                        ease: "power2.out",
                    }
                );
            },
            {
                dependencies: [isOpen, isMinimized],
                scope: windowRef,
            }
        );

        // Drag functionality
        useGSAP(
            () => {
                const element = windowRef.current;

                if (!element || !isOpen || isMinimized) return;

                const header =
                    element.querySelector("#window-header") || element;

                const [instance] = Draggable.create(element, {
                    trigger: header,
                    bounds: "main",

                    onPress: () => {
                        focusWindow(windowKey);
                    },
                });

                return () => {
                    instance?.kill();
                };
            },
            {
                dependencies: [isOpen, isMinimized],
                scope: windowRef,
            }
        );

        return (
            <section
                id={windowKey}
                ref={windowRef}
                style={{
                    zIndex,
                    display: isOpen && !isMinimized ? "block" : "none",
                }}
                className={`absolute ${
                    isMaximized ? "inset-0" : ""
                }`}
                onMouseDown={() => focusWindow(windowKey)}
            >
                <Component
                    {...props}
                    data={windowState?.data ?? null}
                />
            </section>
        );
    };

    WrappedComponent.displayName = `WindowWrapper(${
        Component.displayName || Component.name || windowKey
    })`;

    return WrappedComponent;
};

export default WindowWrapper;