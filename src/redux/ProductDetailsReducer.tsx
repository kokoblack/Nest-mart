import { create } from "zustand";

type ProductDetailItem = {
  name: string;
  initPrice: number;
  curtPrice: number;
  img: string;
  wishlist: boolean
};

type ProductDetailState = {
  name: string;
  initPrice: number;
  curtPrice: number;
  img: string;
  wishlist: boolean

  updateProductDetail: (item: ProductDetailItem) => void;
};

export const useProductDetailStore = create<ProductDetailState>((set) => ({
  name: "",
  img: "",
  initPrice: 0,
  curtPrice: 0,
  wishlist: false,

  updateProductDetail: (item) => {
    set({
      name: item.name,
      initPrice: item.initPrice,
      curtPrice: item.curtPrice,
      img: item.img,
      wishlist: item.wishlist
    });
  },
}));
