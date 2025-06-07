import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "bun:test";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders without error", () => {
    render(<Footer />);
    const myComponent = screen.getByRole("contentinfo");
    expect(myComponent).toBeInTheDocument();
  });
});
