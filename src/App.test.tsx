import * as React from "react";
import { shallow } from "enzyme";

import { App } from "./App";

describe("App", () => {
  it("should be defined", () => {
    const mock = jest.fn();
    const wrapper = shallow(<App getCart={mock} />).instance();

    expect(wrapper).toBeDefined();
  });

  it("should match the snapthot", () => {
    const mock = jest.fn();
    const wrapper = shallow(<App getCart={mock} />);

    expect(wrapper).toMatchSnapshot();
  });
});
