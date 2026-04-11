import { create } from "zustand";

type CartItem = {
  name: string;
  img: string;
  price: number;
  quantity?: number;
  subTotal?: number;
};

type CartState = {
  items: CartItem[];
  totalAmount: number;
  totalQuantity: number;

  addItem: (item: CartItem) => void;
  increaseItem: (name: string) => void;
  decreaseItem: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void
  clearItem: (name: String) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  totalAmount: 0,
  totalQuantity: 0,

  addItem: (item) => {
    const { items } = get();

    const itemIndex = items.findIndex((i) => i.name === item.name);

    let updatedItem: CartItem[];

    if (itemIndex !== -1) {
      updatedItem = [...items];

      updatedItem[itemIndex] = {
        ...updatedItem[itemIndex],
        quantity: updatedItem[itemIndex].quantity! + 1,
        subTotal:
          (updatedItem[itemIndex].quantity! + 1) * updatedItem[itemIndex].price,
      };
    } else {
      updatedItem = [
        ...items,
        {
          ...item,
          quantity: 1,
          subTotal: item.price,
        },
      ];
    }

    const totalAmount = updatedItem.reduce(
      (total, item) => total + item.subTotal!,
      0,
    );

    const totalQuantity = updatedItem.reduce(
      (total, item) => total + item.quantity!,
      0,
    );

    set({
      items: updatedItem,
      totalAmount,
      totalQuantity,
    });
  },

  increaseItem: (name) => {
    const { items } = get();

    const itemIndex = items.findIndex((i) => i.name === name);

    let updatedItems = [...items];
    const existingItem = updatedItems[itemIndex];

    if (existingItem.quantity === 10) {
      updatedItems[itemIndex] = {
        ...existingItem,
        quantity: 10,
        subTotal: existingItem.quantity * existingItem.price,
      };
    } else {
      updatedItems[itemIndex] = {
        ...existingItem,
        quantity: existingItem.quantity! + 1,
        subTotal: (existingItem.quantity! + 1) * existingItem.price,
      };
    }

    const totalAmount = updatedItems.reduce(
      (total, item) => total + item.price * item.quantity!,
      0,
    );

    const totalQuantity = updatedItems.reduce(
      (total, item) => total + item.quantity!,
      0,
    );

    set({
      items: updatedItems,
      totalAmount,
      totalQuantity,
    });
  },

  decreaseItem: (name) => {
    const { items } = get();

    const itemIndex = items.findIndex((i) => i.name === name);

    let updatedItems = [...items];
    const existingItem = updatedItems[itemIndex];

    if (existingItem.quantity === 1) {
      updatedItems[itemIndex] = {
        ...existingItem,
        quantity: 1,
        subTotal: existingItem.price,
      };
    } else {
      updatedItems[itemIndex] = {
        ...existingItem,
        quantity: existingItem.quantity! - 1,
        subTotal: (existingItem.quantity! - 1) * existingItem.price,
      };
    }

    const totalAmount = updatedItems.reduce(
      (total, item) => total + item.price * item.quantity!,
      0,
    );

    const totalQuantity = updatedItems.reduce(
      (total, item) => total + item.quantity!,
      0,
    );

    set({
      items: updatedItems,
      totalAmount,
      totalQuantity,
    });
  },

  updateQuantity: (name, quantity) => {
  const { items } = get();

  let updatedItems = items.map((item) => {
    if (item.name === name) {
      return {
        ...item,
        quantity: quantity < 1 ? 1 : quantity, // prevent 0 or negative
        subTotal: quantity! * item.price
      };
    }
    return item;
  });

  const totalAmount = updatedItems.reduce(
    (total, item) => total + item.price * item.quantity!,
    0
  );

  const totalQuantity = updatedItems.reduce(
    (total, item) => total + item.quantity!,
    0
  );

  set({
    items: updatedItems,
    totalAmount,
    totalQuantity,
  });
},

  clearCart: () => {
    set({
      items: [],
      totalAmount: 0,
      totalQuantity: 0,
    });
  },

  clearItem: (name) => {
    const { items } = get();

    const updatedItems = items.filter((item) => item.name !== name);

    const totalAmount = updatedItems.reduce(
      (total, item) => total + item.price * item.quantity!,
      0,
    );

    const totalQuantity = updatedItems.reduce(
      (total, item) => total + item.quantity!,
      0,
    );

    set({
      items: updatedItems,
      totalAmount,
      totalQuantity,
    });
  },
}));
