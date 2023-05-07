import { render, screen } from "@testing-library/react";
import Logo from ".";

describe("Logo", () => {
    it("should render Logo", () => {
        render(<Logo />);

        const logo = screen.getByTestId(/logo/i);

        expect(logo).toBeInTheDocument();
    });
});
