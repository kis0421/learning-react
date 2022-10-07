
import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

// it("aa", () => {
//   const utils = render(<App name="coco" />);
//   expect(utils.container).toMatchSnapshot();
// })


it("renders with or without a name", () => {
  render(<App name="coco" />);
  // utils.getByText("hello,")
})
