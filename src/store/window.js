
import { create } from "zustand";

const useWindowStore = create((set) => ({
    windows: {},
    activeWindow: null,
    highestZIndex: 100,

    // Open a new window or restore an existing one
    openWindow: (windowKey, data = null) =>
        set((state) => {
            const nextZIndex = state.highestZIndex + 1;
            const previous = state.windows[windowKey] || {};

            return {
                windows: {
                    ...state.windows,
                    [windowKey]: {
                        ...previous,
                        isOpen: true,
                        isMinimized: false,
                        isMaximized: previous.isMaximized || false,
                        zIndex: nextZIndex,
                        ...(data !== null ? { data } : {}),
                    },
                },
                activeWindow: windowKey,
                highestZIndex: nextZIndex,
            };
        }),

    // Close window
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

    // Minimize window
    minimizeWindow: (windowKey) =>
        set((state) => {
            const current = state.windows[windowKey];

            if (!current) return state;

            return {
                windows: {
                    ...state.windows,
                    [windowKey]: {
                        ...current,
                        isMinimized: true,
                    },
                },
                activeWindow:
                    state.activeWindow === windowKey ? null : state.activeWindow,
            };
        }),

    // Maximize / restore window size
    maximizeWindow: (windowKey) =>
        set((state) => {
            const current = state.windows[windowKey];

            if (!current) return state;

            return {
                windows: {
                    ...state.windows,
                    [windowKey]: {
                        ...current,
                        isMaximized: !current.isMaximized,
                    },
                },
            };
        }),

    // Bring window to front
    focusWindow: (windowKey) =>
        set((state) => {
            const nextZIndex = state.highestZIndex + 1;
            const previous = state.windows[windowKey] || {};

            return {
                windows: {
                    ...state.windows,
                    [windowKey]: {
                        ...previous,
                        isOpen: true,
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
