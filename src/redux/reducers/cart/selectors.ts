import { AppState } from "../../store.type";
import { Cart, Product } from "./types";

export const getProducts = (state: AppState): Product[] => state.cart.products;

export const getCounter = (state: AppState): number => state.cart.counter;

export const getCart = (state: AppState): Cart => state.cart;
