import { removeProduct, updateProduct } from "../../redux/reducers/cart/actions";

export interface TableRowProps {
  id: string;
  name: string;
  quantity: number;
  price: number;
  removeItem: typeof removeProduct;
  updateItem: typeof updateProduct;
}
