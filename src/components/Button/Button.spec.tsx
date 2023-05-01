import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
    it("should render Button", () => {
        render(<Button />);

        const button = screen.getByTestId(/button/i);

        expect(button).toBeInTheDocument();
    });
});
