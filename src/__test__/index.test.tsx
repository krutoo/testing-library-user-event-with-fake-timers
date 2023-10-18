import {
  afterEach,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from "@jest/globals";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ClickCounter } from "..";

describe("ClickCounter", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test("should increment value by click", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const { container, getByTestId } = render(<ClickCounter />);

    expect(container.textContent).toBe("Count: 0");

    await user.click(getByTestId("counter"));
    expect(container.textContent).toBe("Count: 1");
  });
});
