import { create } from "zustand";

type MainState = {
    query: string,
}

type MainAction = {
    setQuery: (query: string) => void,
}

const initialState: MainState = {
    query: "",
}

const useMainStore = create<MainState & MainAction>((set) => ({
    ...initialState,
    setQuery: (query: string) => set(() => ({ query })),
    reset: () => set(initialState),
}))

export default useMainStore;