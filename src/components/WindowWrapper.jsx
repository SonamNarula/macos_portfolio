
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";
import useWindowStore from "../store/window";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
    const WrappedComponent = (props) => {
        const windowRef = useRef(null);

        const windowState = useWindowStore(
            (state) => state.windows[windowKey]
        );

        const focusWindow = useWindowStore((state) => state.focusWindow);

        const isOpen = windowState?.isOpen ?? false;
        const isMinimized = windowState?.isMinimized ?? false;
        const zIndex = windowState?.zIndex ?? 0;

        useLayoutEffect(() => {
            const element = windowRef.current;
            if (!element) return;

            element.style.display =
                isOpen && !isMinimized ? "block" : "none";
        }, [isOpen, isMinimized]);

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
            { dependencies: [isOpen, isMinimized], scope: windowRef }
        );

        useGSAP(
            () => {
                const element = windowRef.current;
                if (!element) return;

                const [instance] = Draggable.create(element, {
                    trigger: element.querySelector("#window-header") || element,
                    onPress: () => focusWindow(windowKey),
                    bounds: "main",
                });

                return () => instance.kill();
            },
            { scope: windowRef }
        );

        return (
            <section
                id={windowKey}
                ref={windowRef}
                style={{ zIndex }}
                className="absolute"
                onMouseDown={() => focusWindow(windowKey)}
            >
                <Component {...props} />
            </section>
        );
    };

    WrappedComponent.displayName = `WindowWrapper(${Component.displayName || Component.name || windowKey})`;

    return WrappedComponent;
};

export default WindowWrapper;
