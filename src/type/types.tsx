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
  fullCat?: string;
  cat?: string;
  discount?: number;
};

export type DOTDProduct = {
  name: string;
  rating: string;
  brand?: string;
  currentPrice: string;
  initialPrice: string;
  image?: string;
  id?: number;
};

export type Blogdatatype = {
  img: string;
  category: string;
  title: string;
  readTime?: number;
  views?: number;
  date?: Date;
}[];

export type Blogdatatype1 = {
  img: string;
  category: string;
  title: string;
  readTime?: number;
  views?: number;
  date?: Date;
};

export type CartReducerType = {
  state: {
    items: [];
    totalAmount: 0;
    totalQuantity: 0;
  };

  action: {
    items: [];
    totalAmount: 0;
    totalQuantity: 0;
  };
};
