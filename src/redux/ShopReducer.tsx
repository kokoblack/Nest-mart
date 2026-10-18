import { create } from "zustand";

type ShopState = {
  name: string;

  updateItemName: (item: string) => void;
};

export const useShopStore = create<ShopState>((set) => ({
  name: "",

  updateItemName: (itemName: string) => {
    set({
      name: itemName,
    });
  },
}));