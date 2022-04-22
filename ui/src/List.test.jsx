import { render, screen } from "@testing-library/react";
import List from "./List";

const listItems = ["html", "css", "js"];

describe("list component", () => {
  it("list render", () => {
    render(<List items={listItems} />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("html")).toBeInTheDocument();
  });

  it("list render without data", () => {
    render(<List />);

    expect(screen.queryByRole("list")).toBeNull();
  });

  it("list snapshot", () => {
    const view = render(<List items={listItems} />);

    expect(view).toMatchSnapshot();
  });

  it("list empty snapshot", () => {
    const view = render(<List />);

    expect(view).toMatchSnapshot();
  });
});
