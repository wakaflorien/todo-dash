import { render, screen, waitFor, fireEvent } from "../setupTests";
import userEvent from "@testing-library/user-event";
import Home from "../pages/home";
import { QueryClient, useQuery } from "@tanstack/react-query";

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: jest.fn(),
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

jest.mock("../components/Loading", () => {
  return function MockLoading({ children }) {
    return <div data-testid="loading">{children}</div>;
  };
});


describe("Home page", () => {
  const initialState = {};

  beforeEach(() => {
    useQuery.mockImplementation(() => ({
      data: initialState,
      isLoading: false,
      error: null,
    }));
  });

  it("renders correct component", async () => {
    render(<Home />);
    expect(screen.getByText(/12 min/i)).toBeInTheDocument();
  });

  it("handles loading state", () => {
    useQuery.mockImplementation(() => ({
      data: null,
      isLoading: true,
      error: null,
    }));

    render(<Home />);
    const loadingIcon = screen.getByTestId("loading");
    expect(loadingIcon).toBeInTheDocument();
  });

  it("handles error state", () => {
    useQuery.mockImplementation(() => ({
      data: null,
      isLoading: false,
      error: new Error("Failed to fetch"),
    }));

    render(<Home />);
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  // it("adds new todo when form is submitted", async () => {
  //   const user = userEvent.setup();
  //   render(<Home />);

  //   const input = screen.getByRole("input", { name: /todo/i });
  //   const submitButton = screen.getByRole("button", { name: /addTodo/i });

  //   await user.type(input, "New todo item");
  //   await user.click(submitButton);

  //   expect(screen.getByText("New todo item")).toBeInTheDocument();
  // });
});

// describe("Todo App", () => {
//   const initialState = {};
//   beforeEach(() => {
//     useQuery.mockImplementation(() => ({
//       data: initialState,
//       isLoading: false,
//       error: null,
//     }));
//   });

//   test("should fetch todos", async () => {
//     render(<Home />);

//     // await waitFor(() => screen.getByText("Todo List"));
//         expect(screen.getByText(/12 min/i)).toBeInTheDocument();

//     // expect(screen.getByText("Todo List")).toBeInTheDocument();
//   });

//   test("should add a new todo", async () => {
//     render(<Home />);

//     const input = screen.getByPlaceholderText("Add new todo");
//     const addButton = screen.getByText("Add");

//     // Simulate user input and clicking the add button
//     fireEvent.change(input, { target: { value: "New Todo" } });
//     fireEvent.click(addButton);

//     await waitFor(() => screen.getByText("New Todo"));

//     expect(screen.getByText("New Todo")).toBeInTheDocument();
//   });

//   test("should handle API errors", async () => {
//     jest
//       .spyOn(global, "fetch")
//       .mockRejectedValueOnce(new Error("Network error"));

//     render(<Home />);

//     await waitFor(() => screen.getByText("Error fetching todos"));

//     expect(screen.getByText("Error fetching todos")).toBeInTheDocument();
//   });
// });
