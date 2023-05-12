import { render, screen } from "@testing-library/react";
import Toast from ".";

describe("Toast", () => {
    it("should render Toast", () => {
        render(<Toast />);

        const toast = screen.getByTestId(/toast/i);

        expect(toast).toBeInTheDocument();
    });
});
