import * as React from "react";
import { connect } from "react-redux";

import CartContainer from "./containers/CartContainer";
import { getCart } from "./redux/reducers/cart/actions";

import css from "./_App.module.scss";

import { AppProps } from "./App.type";

export class App extends React.Component<AppProps> {
  public componentDidMount() {
    this.props.getCart();
  }

  public render() {
    return (
      <div className={css.app}>
        <CartContainer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getCart
};

export default connect(
  null,
  mapDispatchToProps
)(App);
