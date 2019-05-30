import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Cart from "../Cart";
import Table from "../../Table";

describe("Cart", () => {
  let wrapper: ShallowWrapper<Cart>;
  let products: any[] = ["marlar", "foobar"];

  let addProduct = jest.fn();
  let saveCart = jest.fn();

  beforeEach(() => {
    addProduct = jest.fn();
    saveCart = jest.fn();

    wrapper = shallow(
      <Cart products={products} addProduct={addProduct} saveCart={saveCart} />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render <Table /> when products is not empty", () => {
    expect(wrapper.contains(<Table items={products}/>)).toBe(true);
    expect(wrapper.find(Table)).toHaveLength(1);
  });

  it("should call render two 'h2's when products is empty", () => {
    products = [];
    wrapper = shallow(
      <Cart products={products} addProduct={addProduct} saveCart={saveCart} />
    );

    expect(wrapper.find("h2").length).toBe(2);
  });

  it("should call addProduct with products' length", () => {
    products = [];
    wrapper = shallow(
      <Cart products={products} addProduct={addProduct} saveCart={saveCart} />
    );

    expect(wrapper.find("h2").length).toBe(2);
  });
});
