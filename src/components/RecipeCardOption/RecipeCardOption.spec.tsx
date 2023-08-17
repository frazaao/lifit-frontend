import { render, screen } from "@testing-library/react";
import RecipeCardOption from ".";

describe("RecipeCardOption", () => {
    it("should render RecipeCardOption", () => {
        render(<RecipeCardOption />);

        const recipecardoption = screen.getByTestId(/recipecardoption/i);

        expect(recipecardoption).toBeInTheDocument();
    });
});
