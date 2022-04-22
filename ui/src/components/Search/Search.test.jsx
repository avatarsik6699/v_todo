import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

const onChange = jest.fn();

describe("Search component", () => {
  it("render", () => {
    render(<Search value="" children="find:" onChange={onChange} />);

    expect(screen.getByText(/find/i)).toBeInTheDocument();
  });

  it("render without children", () => {
    render(<Search value="" onChange={onChange} />);

    expect(screen.getByText(/default/i)).toBeInTheDocument();
  });

  it("render without placeholder", () => {
    render(<Search value="" onChange={onChange} />);

    expect(screen.getByPlaceholderText(/default/i)).toBeInTheDocument();
  });

  it("onChange works", () => {
    const TEXT = "some text";
    render(<Search value="" children="find:" onChange={onChange} />);

    userEvent.type(screen.getByRole("textbox"), TEXT);

    expect(onChange).toHaveBeenCalledTimes(TEXT.length);
  });
});
