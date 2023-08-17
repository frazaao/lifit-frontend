import { render, screen } from "@testing-library/react";
import MealRegistryCard from ".";

describe("MealRegistryCard", () => {
    it("should render MealRegistryCard", () => {
        render(<MealRegistryCard />);

        const mealregistrycard = screen.getByTestId(/mealregistrycard/i);

        expect(mealregistrycard).toBeInTheDocument();
    });
});
