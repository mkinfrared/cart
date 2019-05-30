import * as React from "react";

import TableRow from "../../containers/TableRowContainer";
import TableHeaderCell from "../TableHeaderCell";
import { stableSort, getSorting } from "../../utils/sort";

import css from "./_Table.module.scss";

import { Product } from "../../redux/reducers/cart/types";
import { orderBy, TableProps, TableState } from "./Table.type";

class Table extends React.Component<TableProps, TableState> {
  public state: Readonly<TableState> = {
    order: "DESC",
    orderBy: null
  };

  public handleClick = (column: orderBy) => () => {
    let { order } = this.state;

    if (column === this.state.orderBy && order === "DESC") {
      order = "ASC";
    } else {
      order = "DESC";
    }

    this.setState({ order, orderBy: column });
  };

  public getClassName = (column: orderBy) => {
    const { orderBy, order } = this.state;

    if (orderBy === column) {
      return order === "DESC" ? css.desc : css.asc;
    }

    return "";
  };

  public renderItems = () => {
    const { orderBy, order } = this.state;
    let { items } = this.props;

    if (orderBy) {
      items = stableSort(items, getSorting(order, orderBy));
    }

    return items.map((item: Product) => (
      <TableRow
        key={item.ProductId}
        id={item.ProductId}
        name={item.Name}
        quantity={item.Quantity}
        price={item.Price}
      />
    ));
  };

  public render() {
    return (
      <div className={css.table}>
        <div className={css.header}>
          <TableHeaderCell
            columnName="Product"
            className={this.getClassName("Name")}
            onClick={this.handleClick("Name")}
          />
          <TableHeaderCell
            columnName="Quantity"
            className={this.getClassName("Quantity")}
            onClick={this.handleClick("Quantity")}
          />
          <TableHeaderCell
            columnName="Price"
            className={this.getClassName("Price")}
            onClick={this.handleClick("Price")}
          />
          <TableHeaderCell />
        </div>
        {this.renderItems()}
      </div>
    );
  }
}

export default Table;
