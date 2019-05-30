import { addProduct, saveCart } from "../../redux/reducers/cart/actions";
import { Product } from "../../redux/reducers/cart/types";

export interface CartProps {
  products: Product[];
  addProduct: typeof addProduct;
  saveCart: typeof saveCart;
}
