import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";

import Main from "./Main";

describe("<Main />", () => {
  render(<Main name="hi" />);

  it("renders Main Commponent", () => {
    expect(screen.getByText("hello, hi")).toBeInTheDocument();
  });
  it("click add", () => {
    // fireEvent.click()
  });

})