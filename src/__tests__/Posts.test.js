import { render, screen } from "@testing-library/react";
import Posts from "../pages/posts";

describe("Posts page", () => {
    it("renders correct component", () => {
        render(<Posts />);
        expect(screen.getByText(/Posts/i)).toBeInTheDocument();
    });
});