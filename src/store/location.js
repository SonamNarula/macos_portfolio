
import { create } from "zustand";

const useLocationStore = create((set) => ({
    // Current Finder location
    activeLocation: "work",

    // Navigation history
    activeLocations: ["work"],

    // Navigate to a folder
    setActiveLocation: (location) =>
        set((state) => ({
            activeLocation: location,
            activeLocations: [...state.activeLocations, location],
        })),

    // Go back
    goBack: () =>
        set((state) => {
            if (state.activeLocations.length <= 1) return state;

            const updated = state.activeLocations.slice(0, -1);

            return {
                activeLocations: updated,
                activeLocation: updated[updated.length - 1],
            };
        }),

    // Return to home folder
    resetActiveLocation: () =>
        set({
            activeLocation: "work",
            activeLocations: ["work"],
        }),
}));

export default useLocationStore;
