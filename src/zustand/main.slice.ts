import { create } from "zustand";

type MainState = {
    query: string,
    filterStrings: string[]
}

type MainAction = {
    setQuery: (query: string) => void,
    setFilterStrings: (filterStrings: string[]) => void,
    reset: () => void,
}

const initialState: MainState = {
    query: "",
    filterStrings: []
}

const useMainStore = create<MainState & MainAction>((set) => ({
    ...initialState,
    setQuery: (query: string) => set(() => ({ query })),
    setFilterStrings: (filterStrings: string[]) => set(() => ({ filterStrings })),
    reset: () => set(initialState),
}))

export default useMainStore;