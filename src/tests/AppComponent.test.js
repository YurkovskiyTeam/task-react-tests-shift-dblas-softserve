import App from "../components/App/index";
import React from "react";
import { render, screen } from "@testing-library/react";
jest.mock("../services/DataService");

describe("App Component Tests", () => {
  test("if the App div is visible", () => {
    render(<App />);

    expect(screen.getByTestId("App")).toBeVisible();
  });

  test("if hello world text is rendered", () => {
    render(<App />);

    expect(screen.getByText("Hello World!")).toBeInTheDocument();
  });
});
