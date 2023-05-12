import { render, screen } from "@testing-library/react";
import BottomMenuItem from ".";

describe("BottomMenuItem", () => {
    it("should render BottomMenuItem", () => {
        render(<BottomMenuItem />);

        const bottommenuitem = screen.getByTestId(/bottommenuitem/i);

        expect(bottommenuitem).toBeInTheDocument();
    });
});
