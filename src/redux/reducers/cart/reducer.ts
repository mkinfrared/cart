import { Reducer } from "redux";

import { Cart, CartActionTypes } from "./types";

const initialState: Cart = {
  loading: false,
  products: [],
  error: "",
  counter: 0
};

export const reducer: Reducer<Cart> = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionTypes.GET_CART_SUCCESS:
      return { ...state, ...payload };
    case CartActionTypes.GET_CART_FAIL:
      return state;
    case CartActionTypes.SAVE_CART:
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    case CartActionTypes.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: payload,
        counter: state.counter + 1
      };
    case CartActionTypes.ADD_PRODUCT_FAIL:
      return { ...state, error: payload };
    case CartActionTypes.REMOVE_PRODUCT_SUCCESS:
      return { ...state, products: payload };
    case CartActionTypes.UPDATE_PRODUCT_SUCCESS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
