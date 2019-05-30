import { action } from "typesafe-actions";

import { Cart, CartActionTypes, Product } from "./types";

export const getCart = () => action(CartActionTypes.GET_CART);

export const getCartSuccess = (cart: Cart) =>
  action(CartActionTypes.GET_CART_SUCCESS, cart);

export const saveCart = () => action(CartActionTypes.SAVE_CART);

export const addProduct = () => action(CartActionTypes.ADD_PRODUCT);

export const addProductSuccess = (products: Product[]) =>
  action(CartActionTypes.ADD_PRODUCT_SUCCESS, products);

export const addProductFail = (err: string) =>
  action(CartActionTypes.ADD_PRODUCT_FAIL, err);

export const removeProduct = (id: string) =>
  action(CartActionTypes.REMOVE_PRODUCT, id);

export const removeProductSuccess = (products: Product[]) =>
  action(CartActionTypes.REMOVE_PRODUCT_SUCCESS, products);

export const removeProductFail = () =>
  action(CartActionTypes.REMOVE_PRODUCT_FAIL);

export const updateProduct = (id: string, quantity: number) =>
  action(CartActionTypes.UPDATE_PRODUCT, { id, quantity });

export const updateProductSuccess = (products: Product[]) =>
  action(CartActionTypes.UPDATE_PRODUCT_SUCCESS, products);
