import { render, screen } from "@testing-library/react";
import SidebarMenuItem from ".";

describe("SidebarMenuItem", () => {
    it("should render SidebarMenuItem", () => {
        render(<SidebarMenuItem />);

        const sidebarmenuitem = screen.getByTestId(/sidebarmenuitem/i);

        expect(sidebarmenuitem).toBeInTheDocument();
    });
});
