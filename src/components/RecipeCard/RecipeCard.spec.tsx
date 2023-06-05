import { render, screen } from "@testing-library/react";
import RecipeCard from ".";

describe("RecipeCard", () => {
    it("should render RecipeCard", () => {
        render(<RecipeCard />);

        const recipecard = screen.getByTestId(/recipecard/i);

        expect(recipecard).toBeInTheDocument();
    });
});
