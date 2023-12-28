import { expect, it } from "vitest";
import { render, screen } from "./utils/test.utils";
import App from "./App";

it("Is heading", () => {
    render(<App />);
    const headingElement = screen.getByRole("heading")
    expect(headingElement).toBeInTheDocument();
  });