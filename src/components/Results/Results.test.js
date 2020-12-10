import { render, screen } from "@testing-library/react";
import Results from "./Results";

test("renders learn react link", () => {
    render(<Results />);
    const element = screen.getByTestId("results");
    expect(element).toBeInTheDocument();
});
