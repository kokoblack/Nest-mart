import { create } from "zustand";

type WishlistItem = {
  name: string;
  img: string;
  price: number;
  wishlist: boolean;
};

type WishlistState = {
  wishlists: WishlistItem[];

  addWishlist: (item: WishlistItem) => void;
  removeWishlist: (name: String) => void;
  clearWishlists: () => void;
};

export const useWishlistStore = create<WishlistState>((set, get) => ({
  wishlists: [],

  addWishlist: (item) => {
    const { wishlists } = get();
    
    let updateWishlist = [...wishlists];

    updateWishlist = [...wishlists, { ...item, wishlist: true }];

    set({
      wishlists: updateWishlist,
    });
  },

  removeWishlist: (name) => {
    const { wishlists } = get();

    const updatedWishlist = wishlists.filter((item) => item.name !== name);

    set({
      wishlists: updatedWishlist,
    });
  },

  clearWishlists: () => {
    set({
      wishlists: [],
    });
  },
}));
