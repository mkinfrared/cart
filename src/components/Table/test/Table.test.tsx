import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Table from "../Table";

describe("Table", () => {
  let wrapper: ShallowWrapper<Table>;

  const items: any[] = [];

  beforeEach(() => {
    wrapper = shallow(<Table items={items} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should return desc when orderBy equals to column and order is 'DESC'", () => {
    const column = "Name";
    const order = "DESC";

    const instance = wrapper.instance() as Table;
    instance.setState({ orderBy: column, order });

    const result = instance.getClassName(column);

    expect(result).toBe("desc");
  });

  it("should return asc when orderBy equals to column and order is 'ASC'", () => {
    const column = "Name";
    const order = "ASC";

    const instance = wrapper.instance() as Table;
    instance.setState({ orderBy: column, order });

    const result = instance.getClassName(column);

    expect(result).toBe("asc");
  });

  it("should set state order to 'DESC' and orderBy to 'Name'", () => {
    const column = "Name";
    const instance = wrapper.instance() as Table;

    instance.handleClick(column)();

    expect(instance.state.order).toBe("DESC");
  });

  it("should set state order to 'ASC' and orderBy to 'Name'", () => {
    const column = "Name";
    const instance = wrapper.instance() as Table;

    instance.handleClick(column)();
    instance.handleClick(column)();

    expect(instance.state.order).toBe("ASC");
  });
});
