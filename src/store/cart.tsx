// this is the cart made using zustand
import { create } from "zustand";

type Tcart = {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
};
export const useCartStore = create<Tcart>((set) => {
  return {
    quantity: 0,

    increaseQuantity: () => {
      return set((state) => {
        // state.quantity = state.quantity + 1;
        return {
          ...state,
          quantity: state.quantity >= 10 ? 10 : state.quantity + 1,
        };
      });
    },
    decreaseQuantity: () => {
      return set((state) => {
        // state.quantity = state.quantity - 1;
        return {
          ...state,
          quantity: state.quantity == 0 ? 0 : state.quantity - 1,
        };
      });
    },
  };
});
