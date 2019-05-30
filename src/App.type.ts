import { getCart } from "./redux/reducers/cart/actions";

export interface AppProps {
  getCart: typeof getCart;
}
