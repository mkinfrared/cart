import * as React from "react";

import css from "./_TableRow.module.scss";

import { TableRowProps } from "./TableRow.type";

class TableRow extends React.Component<TableRowProps> {
  public handleRemoveClick = () => {
    const { id } = this.props;
    this.props.removeItem(id);
  };

  public handleQuantityButtonsClick = (num: number) => () => {
    const { id, quantity } = this.props;
    const newQuantity = quantity + num;

    if (newQuantity < 1) {
      return;
    }

    this.props.updateItem(id, newQuantity);
  };

  public render() {
    const { name, price, quantity } = this.props;
    return (
      <div className={css.tableRow}>
        <div>
          <p>{name}</p>
        </div>
        <div>
          <button onClick={this.handleQuantityButtonsClick(-1)}>
            <p>-</p>
          </button>
          <p>{quantity}</p>
          <button onClick={this.handleQuantityButtonsClick(1)}>
            <p>+</p>
          </button>
        </div>
        <div>
          <p>${price}</p>
        </div>
        <div>
          <button onClick={this.handleRemoveClick}>Remove</button>
        </div>
      </div>
    );
  }
}

export default TableRow;
