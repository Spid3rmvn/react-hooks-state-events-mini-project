import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Task from "../components/Task";

test("displays the task name", () => {
  const task = { name: "Test Task", description: "This is a test task" };
  render(<Task task={task} />);
  expect(screen.getByText("Test Task")).toBeInTheDocument();
});

test("displays the task description", () => {
  const task = { name: "Test Task", description: "This is a test task" };
  render(<Task task={task} />);
  expect(screen.getByText("This is a test task")).toBeInTheDocument();
});
