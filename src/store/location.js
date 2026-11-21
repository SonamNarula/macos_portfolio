
import { create } from "zustand";

const useLocationStore = create((set) => ({
    activeLocation: "home",

    setActiveLocation: (location) =>
        set({ activeLocation: location }),
}));

export default useLocationStore;
