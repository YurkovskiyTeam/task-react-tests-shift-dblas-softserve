import Info from "../components/Info/index";
import React from "react";
import { render, screen } from "@testing-library/react";
import { mockedGetGitHubUser } from "../services/DataService/__mocks__/index";
jest.mock("../services/DataService");

describe("Info Component Tests", () => {
  const props = { user: "daria" };

  test("if correct text is rendered within a view", () => {
    render(<Info {...props} />);

    expect(screen.getByText("GitHub User Info")).toBeInTheDocument();
  });

  test("if correct response text is rendered when successfully fetched", async () => {
    render(<Info {...props} />);

    expect(await screen.findByText(/daria/)).toBeInTheDocument();
  });
});
