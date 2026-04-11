import { create } from "zustand";

type ProductDetailItem = {
  name: string;
  initPrice: number;
  curtPrice: number;
  img: string;
};

type ProductDetailState = {
  name: string;
  initPrice: number;
  curtPrice: number;
  img: string;

  updateProductDetail: (item: ProductDetailItem) => void;
};

export const useProductDetailStore = create<ProductDetailState>((set) => ({
  name: "",
  img: "",
  initPrice: 0,
  curtPrice: 0,

  updateProductDetail: (item) => {
    set({
      name: item.name,
      initPrice: item.initPrice,
      curtPrice: item.curtPrice,
      img: item.img,
    });
  },
}));
