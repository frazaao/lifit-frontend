import { render, screen } from "@testing-library/react";
import UserHeader from ".";

describe("UserHeader", () => {
    it("should render UserHeader", () => {
        render(<UserHeader />);

        const userheader = screen.getByTestId(/userheader/i);

        expect(userheader).toBeInTheDocument();
    });
});
