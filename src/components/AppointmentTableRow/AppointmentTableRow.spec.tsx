import { render, screen } from "@testing-library/react";
import AppointmentTableRow from ".";

describe("AppointmentTableRow", () => {
    it("should render AppointmentTableRow", () => {
        render(<AppointmentTableRow />);

        const appointmenttablerow = screen.getByTestId(/appointmenttablerow/i);

        expect(appointmenttablerow).toBeInTheDocument();
    });
});
