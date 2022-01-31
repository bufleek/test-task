import { shallow } from "enzyme";
import React from "react";
import App from "../App";

describe("MyComponent", () => {
  it("should render my component", () => {
    const wrapper = shallow(<App />);
  });
});
