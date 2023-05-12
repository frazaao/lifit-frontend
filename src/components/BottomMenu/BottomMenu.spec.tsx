import { render, screen } from "@testing-library/react";
import BottomMenu from ".";

describe("BottomMenu", () => {
    it("should render BottomMenu", () => {
        render(<BottomMenu />);

        const bottommenu = screen.getByTestId(/bottommenu/i);

        expect(bottommenu).toBeInTheDocument();
    });
});
