import { useLootBoxStore } from "../store/useLootBoxStore";

describe("useLootBoxStore", () => {
  beforeEach(() => {
    // Reset store state before each test
    useLootBoxStore.setState({
      isBoxOpen: false,
      currentItem: null,
      itemsHistory: [],
    });
  });

  it("initially has isBoxOpen = false, currentItem = null", () => {
    const state = useLootBoxStore.getState();
    expect(state.isBoxOpen).toBe(false);
    expect(state.currentItem).toBeNull();
    expect(state.itemsHistory).toHaveLength(0);
  });

  it("openBox sets isBoxOpen to true", () => {
    useLootBoxStore.getState().openBox();
    expect(useLootBoxStore.getState().isBoxOpen).toBe(true);
  });

  it("setItem updates currentItem and itemsHistory", () => {
    useLootBoxStore.getState().setItem("AK-47 | Neon Rider");
    expect(useLootBoxStore.getState().currentItem).toBe("AK-47 | Neon Rider");
    expect(useLootBoxStore.getState().itemsHistory).toEqual(["AK-47 | Neon Rider"]);
  });
});