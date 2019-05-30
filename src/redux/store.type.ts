import { Action, AnyAction, Dispatch } from "redux";
import { Cart } from "./reducers/cart/types";

export interface AppState {
  cart: Cart;
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}
