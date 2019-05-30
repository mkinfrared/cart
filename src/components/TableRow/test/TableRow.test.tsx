import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import TableRow from "../TableRow";

describe("TableRow", () => {
  let wrapper: ShallowWrapper<TableRow>;

  const name = "marklar";
  const price = 42;
  const quantity = 13;
  const id = "47";

  let removeItem = jest.fn();
  let updateItem = jest.fn();

  beforeEach(() => {
    removeItem = jest.fn();
    updateItem = jest.fn();

    wrapper = shallow(
      <TableRow
        name={name}
        price={price}
        quantity={quantity}
        id={id}
        removeItem={removeItem}
        updateItem={updateItem}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call removeItem", () => {
    const instance = wrapper.instance() as TableRow;
    instance.handleRemoveClick();

    expect(removeItem).toBeCalled();
    expect(removeItem).toHaveBeenCalledWith(id);
  });

  it("should not call updateItem when newQuantity is less than 1", () => {
    const instance = wrapper.instance() as TableRow;
    instance.handleQuantityButtonsClick(-13)();

    expect(updateItem).not.toBeCalled();
  });

  it("should call updateItem when newQuantity is greater than 0", () => {
    const instance = wrapper.instance() as TableRow;
    instance.handleQuantityButtonsClick(12)();

    expect(updateItem).toBeCalled();
  });
});
