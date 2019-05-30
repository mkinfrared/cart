import * as React from "react";

import Header from "../Header";
import Table from "../Table";

import css from "./_Cart.module.scss";

import { CartProps } from "./Cart.type";

export class Cart extends React.Component<CartProps> {
  public renderProducts = () => {
    const { products } = this.props;

    if (products.length) {
      return <Table items={products} />;
    }

    return (
      <>
        <h2>The cart is empty</h2>
        <h2>Please click "ADD PRODUCT" button to add an item</h2>
      </>
    );
  };

  public render() {
    return (
      <div className={css.cart}>
        <Header title="Cart" />
        <div>
          <button onClick={this.props.addProduct}>Add Product</button>
          <button onClick={this.props.saveCart}>Save Cart</button>
        </div>
        {this.renderProducts()}
      </div>
    );
  }
}

export default Cart;
