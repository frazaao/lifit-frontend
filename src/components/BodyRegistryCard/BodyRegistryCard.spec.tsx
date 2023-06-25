import { render, screen } from "@testing-library/react";
import BodyRegistryCard from ".";

describe("BodyRegistryCard", () => {
    it("should render BodyRegistryCard", () => {
        render(<BodyRegistryCard />);

        const bodyregistrycard = screen.getByTestId(/bodyregistrycard/i);

        expect(bodyregistrycard).toBeInTheDocument();
    });
});
