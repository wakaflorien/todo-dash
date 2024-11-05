import { render, screen, waitFor } from "../setupTests";
import userEvent from "@testing-library/user-event";
import Tooltip from "../components/Tooltip";

describe("Tooltip component", () => {
  const tooltipProps = {
    text: "Report !",
    position: "top",
  };

  it("should not render tooltip component", () => {
    render(<Tooltip {...tooltipProps} />);
  });
});
