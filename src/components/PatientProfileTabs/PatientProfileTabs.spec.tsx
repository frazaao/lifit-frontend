import { render, screen } from "@testing-library/react";
import PatientProfileTabs from ".";

describe("PatientProfileTabs", () => {
    it("should render PatientProfileTabs", () => {
        render(<PatientProfileTabs />);

        const patientprofiletabs = screen.getByTestId(/patientprofiletabs/i);

        expect(patientprofiletabs).toBeInTheDocument();
    });
});
