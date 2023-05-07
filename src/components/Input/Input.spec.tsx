import { render, screen } from "@testing-library/react";
import Input from ".";

describe("Input", () => {
    it("should render Input", () => {
        render(<Input />);

        const input = screen.getByTestId(/input/i);

        expect(input).toBeInTheDocument();
    });
});
