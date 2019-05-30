import { connect } from "react-redux";

import Cart from "../../components/Cart";
import { addProduct, saveCart } from "../../redux/reducers/cart/actions";
import { getProducts } from "../../redux/reducers/cart/selectors";

import { AppState } from "../../redux/store.type";

const mapStateToProps = (state: AppState) => ({
  products: getProducts(state)
});

const mapDispatchToProps = {
  addProduct,
  saveCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
