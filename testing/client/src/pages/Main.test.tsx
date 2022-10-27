import React from "react";
import { render, screen, } from "@testing-library/react";

import Main from "./Main";

describe("<Main />", () => {
  it("renders Main Commponent", () => {
    render(<Main name="hi" />);
    expect(screen.getByText("hello, hi")).toBeInTheDocument();
  });
})