import { connect } from "react-redux";
import TableRow from "../../components/TableRow";
import { removeProduct, updateProduct } from "../../redux/reducers/cart/actions";


const mapDispatchToProps = {
  removeItem: removeProduct,
  updateItem: updateProduct
};

export default connect(null, mapDispatchToProps)(TableRow);
