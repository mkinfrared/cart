import { Product } from "../../redux/reducers/cart/types";

export interface TableState {
  orderBy: orderBy;
  order: order;
}

export interface TableProps {
  items: Product[];
}

export type order = "ASC" | "DESC";

export type orderBy = keyof PartialProduct | null;

type PartialProduct = Pick<Product, "Name" | "Quantity" | "Price">;
