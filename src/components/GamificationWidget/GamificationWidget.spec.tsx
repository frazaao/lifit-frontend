import { render, screen } from "@testing-library/react";
import GamificationWidget from ".";

describe("GamificationWidget", () => {
    it("should render GamificationWidget", () => {
        render(<GamificationWidget />);

        const gamificationwidget = screen.getByTestId(/gamificationwidget/i);

        expect(gamificationwidget).toBeInTheDocument();
    });
});
