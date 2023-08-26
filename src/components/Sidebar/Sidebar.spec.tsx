import { render, screen } from "@testing-library/react";
import Sidebar from ".";

describe("Sidebar", () => {
    it("should render Sidebar", () => {
        render(<Sidebar />);

        const sidebar = screen.getByTestId(/sidebar/i);

        expect(sidebar).toBeInTheDocument();
    });
});
