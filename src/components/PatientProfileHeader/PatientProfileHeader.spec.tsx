import { render, screen } from "@testing-library/react";
import PatientProfileHeader from ".";

describe("PatientProfileHeader", () => {
    it("should render PatientProfileHeader", () => {
        render(<PatientProfileHeader />);

        const patientprofileheader = screen.getByTestId(/patientprofileheader/i);

        expect(patientprofileheader).toBeInTheDocument();
    });
});
