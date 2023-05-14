import { render, screen } from "@testing-library/react";
import RecipeSuggestion from ".";

describe("RecipeSuggestion", () => {
    it("should render RecipeSuggestion", () => {
        render(<RecipeSuggestion />);

        const recipesuggestion = screen.getByTestId(/recipesuggestion/i);

        expect(recipesuggestion).toBeInTheDocument();
    });
});
