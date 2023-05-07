import { render, screen } from "@testing-library/react";
import ReceptionSlider from ".";

describe("ReceptionSlider", () => {
    it("should render ReceptionSlider", () => {
        render(<ReceptionSlider />);

        const receptionslider = screen.getByTestId(/receptionslider/i);

        expect(receptionslider).toBeInTheDocument();
    });
});
