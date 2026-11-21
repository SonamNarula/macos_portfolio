
import { create } from "zustand";

const useWindowStore = create((set) => ({
    windows: {},
    activeWindow: null,
    highestZIndex: 100,

    openWindow: (windowKey) =>
        set((state) => {
            const nextZIndex = state.highestZIndex + 1;

            return {
                windows: {
                    ...state.windows,
                    [windowKey]: {
                        isOpen: true,
                        isMinimized: false,
                        isMaximized: false,
                        zIndex: nextZIndex,
                    },
                },
                activeWindow: windowKey,
                highestZIndex: nextZIndex,
            };
        }),

    closeWindow: (windowKey) =>
        set((state) => {
            const updatedWindows = { ...state.windows };
            delete updatedWindows[windowKey];

            return {
                windows: updatedWindows,
                activeWindow:
                    state.activeWindow === windowKey ? null : state.activeWindow,
            };
        }),

    minimizeWindow: (windowKey) =>
        set((state) => ({
            windows: {
                ...state.windows,
                [windowKey]: {
                    ...state.windows[windowKey],
                    isMinimized: true,
                },
            },
            activeWindow:
                state.activeWindow === windowKey ? null : state.activeWindow,
        })),

    maximizeWindow: (windowKey) =>
        set((state) => ({
            windows: {
                ...state.windows,
                [windowKey]: {
                    ...state.windows[windowKey],
                    isMaximized: !state.windows[windowKey]?.isMaximized,
                },
            },
        })),

    focusWindow: (windowKey) =>
        set((state) => {
            const nextZIndex = state.highestZIndex + 1;

            return {
                windows: {
                    ...state.windows,
                    [windowKey]: {
                        ...state.windows[windowKey],
                        isMinimized: false,
                        zIndex: nextZIndex,
                    },
                },
                activeWindow: windowKey,
                highestZIndex: nextZIndex,
            };
        }),
}));

export default useWindowStore;
