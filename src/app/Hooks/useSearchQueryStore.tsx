import { create } from "zustand";

interface SearchQueryStore {
  searchQuery: string;
  setSearchQuery: (query : string) => void;
} 

export const useSearchQueryStore = create<SearchQueryStore>((set) => {
  return {
    searchQuery: "",
    setSearchQuery: (query : string) => set({ searchQuery: query })
  }
})