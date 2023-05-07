import { render, screen } from "@testing-library/react";
import FormControl from ".";

describe("FormControl", () => {
    it("should render FormControl", () => {
        render(<FormControl />);

        const formcontrol = screen.getByTestId(/formcontrol/i);

        expect(formcontrol).toBeInTheDocument();
    });
});
