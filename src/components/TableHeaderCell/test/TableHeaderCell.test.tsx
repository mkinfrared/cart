import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import TableHeaderCell from "../TableHeaderCell";

describe("TableHeaderCell", () => {
  let wrapper: ShallowWrapper<typeof TableHeaderCell> | null;

  const className = "marklar";
  const columnName = "hanky";

  let onClick = jest.fn();

  beforeEach(() => {
    onClick = jest.fn();

    wrapper = shallow(
      <TableHeaderCell
        className={className}
        columnName={columnName}
        onClick={onClick}
      />
    );
  });

  afterEach(() => {
    wrapper = null;
  });

  it("should render JSX tree with div having className and p with assigned onClick handler", () => {
    const paragraph = wrapper!.find("p");
    const div = wrapper!.find("div");

    paragraph.simulate("click");

    expect(onClick).toBeCalled();
    expect(div.hasClass(className)).toBe(true);
  });

  it("should render JSX tree with div not having className and p without assigned onClick handler", () => {
    const wrapper = shallow(<TableHeaderCell />);
    const paragraph = wrapper.find("p");
    const div = wrapper.find("div");

    paragraph.simulate("click");

    expect(onClick).not.toBeCalled();
    expect(div.hasClass(className)).toBe(false);
  });
});
