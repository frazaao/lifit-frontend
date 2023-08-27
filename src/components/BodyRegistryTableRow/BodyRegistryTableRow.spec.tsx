import { render, screen } from "@testing-library/react";
import BodyRegistryTableRow from ".";

describe("BodyRegistryTableRow", () => {
    it("should render BodyRegistryTableRow", () => {
        render(<BodyRegistryTableRow />);

        const bodyregistrytablerow = screen.getByTestId(/bodyregistrytablerow/i);

        expect(bodyregistrytablerow).toBeInTheDocument();
    });
});
