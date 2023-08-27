import { render, screen } from "@testing-library/react";
import Pagination from ".";

describe("Pagination", () => {
    it("should render Pagination", () => {
        render(<Pagination />);

        const pagination = screen.getByTestId(/pagination/i);

        expect(pagination).toBeInTheDocument();
    });
});
