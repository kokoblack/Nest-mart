export type Product = {
  name: string;
  category: string;
  rating: string;
  brand?: string;
  currentPrice: string;
  initialPrice: string;
  color: string;
  type: string;
  image: string;
  fullCat?: string
  cat?: string
};

export type DOTDProduct = {
  name: string;
  rating: string;
  brand?: string;
  currentPrice: string;
  initialPrice: string;
  image?: string;
  id?: number
};
