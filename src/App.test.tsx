import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "./testing/setup";

import App, { STORAGE_KEY } from "./App";
import { AlacrittyConfig } from "./model";

describe("App", () => {
  it("renders empty", async () => {
    render(<App />);

    await screen.findByRole("code");

    expect(screen.getByRole("code")).toContainHTML("<pre></pre>");
  });

  it("sets live reload", async () => {
    render(<App />);

    await userEvent.click(screen.getByLabelText(/live reload/i));
    await screen.findByRole("code");

    expect(screen.getByRole("code")).toHaveTextContent(
      "live_config_reload = true",
    );
  });

  it("sets local storage", async () => {
    render(<App />);

    await userEvent.click(screen.getByLabelText(/live reload/i));

    expect(window.localStorage.length).toBe(1);
  });

  it("reads from local storage", async () => {
    const testConfig: AlacrittyConfig = {
      live_config_reload: true,
      shell: "/bin/bash",
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(testConfig));
    render(<App />);

    await screen.findByRole("code");

    expect(screen.getByRole("code")).toHaveTextContent(
      'live_config_reload = true shell = "/bin/bash"',
    );
  });
});
