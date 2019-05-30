import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Header from "../Header";

describe("Header", () => {
  let wrapper: ShallowWrapper<typeof Header>;

  const title = "marklar";

  beforeEach(() => {
    wrapper = shallow(<Header title={title} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have marklar as textContent", () => {
    expect(wrapper.contains(title)).toBe(true);
  });
});
