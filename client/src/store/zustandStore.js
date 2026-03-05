import { create } from "zustand";

export const useStore = create((set) => ({
  cards: [],
  search: "",
  setQuery: (query) => {
    set({ search: query });
  },
  loadCards: async () => {
    try {
      const res = await fetch("http://localhost:3000/api/movie");
      const data = await res.json();
      set({ cards: data });
    } catch (err) {
      console.log(err);
    }
  },
}));
