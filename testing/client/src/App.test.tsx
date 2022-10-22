import React from "react";
import { render, screen ,} from "@testing-library/react";

import App from "./App";

it("renders with or without a name", () => {
  const userName = "coco";
  render(<App name={userName} />);
  expect(screen.getByText(`hello, ${userName}`)).toBeInTheDocument();
})
