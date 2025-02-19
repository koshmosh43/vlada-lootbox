import { create } from "zustand";

interface LootBoxState {
  isBoxOpen: boolean;
  currentItem: string | null;
  itemsHistory: string[];
  openBox: () => void;
  setItem: (item: string) => void;
}

export const useLootBoxStore = create<LootBoxState>((set) => ({
  isBoxOpen: false,
  currentItem: null,
  itemsHistory: [],
  openBox: () =>
    set({
      isBoxOpen: true,
    }),
  setItem: (item) =>
    set((state) => ({
      currentItem: item,
      itemsHistory: [...state.itemsHistory, item],
    })),
}));