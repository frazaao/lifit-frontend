import { render, screen } from "@testing-library/react";
import MealRegistryTableRow from ".";

describe("MealRegistryTableRow", () => {
    it("should render MealRegistryTableRow", () => {
        render(<MealRegistryTableRow />);

        const mealregistrytablerow = screen.getByTestId(/mealregistrytablerow/i);

        expect(mealregistrytablerow).toBeInTheDocument();
    });
});
