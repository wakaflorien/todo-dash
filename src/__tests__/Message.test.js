import { render, screen, waitFor } from "../setupTests";
import { useQuery } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";
import Message from "../components/Message";
import Tooltip from "../components/Tooltip";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => {
      const translations = {
        "overview.message": "have a great working week!",
        "overview.recording": "recording",
      };
      return translations[key];
    },
  }),
}));

jest.mock("../components/Tooltip", () => {
  return function MockTooltip({ children }) {
    return <div data-testid="tooltip">{children}</div>;
  };
});

describe("Message component", () => {
  beforeEach(() => {
    // Clear mock data before each test
    jest.clearAllMocks();
  });

  const defaultProps = {
    messageType: "message",
    hasInfo: false,
  };

  const tooltipProps = {
    text: "Report !",
    position: "top",
  };

  it("shows info icon with tooltip when hasInfo is true", () => {
    render(<Message {...defaultProps} hasInfo={true} />);
    const infoIcon = screen.getByTestId("tooltip");
    expect(infoIcon).toBeInTheDocument();
    userEvent.hover(infoIcon);
  });

  it("does not show info icon when hasInfo is false", () => {
    render(<Message {...defaultProps} hasInfo={false} />);
    const infoIcon = screen.queryByTestId("tooltip");
    expect(infoIcon).not.toBeInTheDocument();
  });

  it("renders message translation key correctly", () => {
    render(<Message {...defaultProps} />);
    expect(screen.getByText("have a great working week!")).toBeInTheDocument();
  });

  it("renders recording translation key correctly", () => {
    render(<Message {...defaultProps} messageType="recording" />);
    expect(screen.getByText("recording")).toBeInTheDocument();
  });

  it("renders user image with correct alt text", () => {
    render(<Message {...defaultProps} />);
    const profileImage = screen.getByAltText("allure");

    expect(profileImage).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(profileImage).toHaveAttribute(
      "src",
      expect.stringContaining("unsplash.com")
    );
    expect(profileImage).toHaveClass(
      "h-8",
      "w-8",
      "object-cover",
      "rounded-full",
      "cursor-pointer"
    );
  });

  it("renders correct time and name", () => {
    render(<Message {...defaultProps} />);
    expect(screen.getByRole("time")).toBeInTheDocument();
    expect(screen.getByText("12:30")).toBeInTheDocument();
    expect(screen.getByText("Andrew Alfred")).toBeInTheDocument();
  });

  it("renders tooltip component with hover effect", () => {
    render(<Message hasInfo />);
    render(<Tooltip {...tooltipProps} />);
  });

  it("should not render tooltip component", () => {
    render(<Message {...defaultProps} />);
    render(<Tooltip {...tooltipProps} />);
  });
});
