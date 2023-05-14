import { render, screen } from "@testing-library/react";
import NextAppointment from ".";

describe("NextAppointment", () => {
    it("should render NextAppointment", () => {
        render(<NextAppointment />);

        const nextappointment = screen.getByTestId(/nextappointment/i);

        expect(nextappointment).toBeInTheDocument();
    });
});
