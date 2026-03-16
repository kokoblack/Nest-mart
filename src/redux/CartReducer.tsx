type CartReducerItems = {
  name: string;
  img: string;
  price: number;
  subtotal: number;
  quantity: number;
};

type CartReducerState = {
  items: CartReducerItems[];
  totalAmount: 0;
  totalQuantity: 0;
};

export const cartInitState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

type CartReducerAction = { type: "ADD_ITEMS"; payload: CartReducerItems };

export const cartReducer = (
  state: CartReducerState,
  action: CartReducerAction,
) => {
  switch (action.type) {
    case "ADD_ITEMS": {
      let itemIndex = 0;
      let updateitems;

      const existingItem = state.items.some((item, index) => {
        itemIndex = index;
        return item.name === action.payload.name;
      });

      if (existingItem) {
        updateitems = [...state.items];
        updateitems[itemIndex] = {
          ...updateitems[itemIndex],
          quantity: updateitems[itemIndex].quantity + 1,
        };
      } else {
        updateitems = [
          ...state.items,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }

      return {
        ...state,
        items: updateitems,
        totalAmount: updateitems.reduce(
          (total, items) => total + items.price * items.quantity,
          0,
        ),
        totalItems: updateitems.reduce(
          (total, items) => total + items.quantity,
          0,
        ),
      };
    }
    default:
      return state;
  }
};
