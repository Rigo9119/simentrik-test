import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("renders learn react link", () => {
    render(<SearchBar />);
    const element = screen.getByTestId("searchbar");
    expect(element).toBeInTheDocument();
});
