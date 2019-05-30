export interface Cart {
  loading: boolean;
  products: Product[];
  error: string;
  counter: number;
}

export interface Product {
  ProductId: string;
  Category: string;
  MainCategory: string;
  TaxTarifCode: string;
  SupplierName: string;
  WeightMeasure: number;
  WeightUnit: string;
  Description: string;
  Name: string;
  ProductPicUrl: string;
  Status: string;
  Quantity: number;
  UoM: string;
  CurrencyCode: string;
  Price: number;
  Width: number;
  Depth: number;
  Height: number;
  DimUnit: string;
}

export enum CartActionTypes {
  GET_CART = "@@cart/GET_CART",
  GET_CART_SUCCESS = "@@cart/GET_CART_SUCCESS",
  GET_CART_FAIL = "@@cart/GET_CART_FAIL",
  SAVE_CART = "@@cart/SAVE_CART",
  ADD_PRODUCT = "@@cart/ADD_PRODUCT",
  ADD_PRODUCT_SUCCESS = "@@cart/ADD_PRODUCT_SUCCESS",
  ADD_PRODUCT_FAIL = "@@cart/ADD_PRODUCT_FAIL",
  REMOVE_PRODUCT = "@@cart/REMOVE_PRODUCT",
  REMOVE_PRODUCT_SUCCESS = "@@cart/REMOVE_PRODUCT_SUCCESS",
  REMOVE_PRODUCT_FAIL = "@@cart/REMOVE_PRODUCT_FAIL",
  UPDATE_PRODUCT = "@@cart/UPDATE_PRODUCT",
  UPDATE_PRODUCT_SUCCESS = "@@cart/UPDATE_PRODUCT_SUCCESS"
}
