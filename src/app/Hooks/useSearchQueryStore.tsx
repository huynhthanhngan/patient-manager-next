import { create } from "zustand";

interface SearchQueryStore {
  query: string;
  setQuery: (query : string) => void;
} 

export const useSearchQueryStore = create<SearchQueryStore>((set) => {
  return {
    query: "",
    setQuery: (query : string) => set({ query })
  }
})