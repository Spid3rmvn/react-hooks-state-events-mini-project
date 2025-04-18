import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import { CATEGORIES } from "../data";

test("displays a button for each category", () => {
  render(
    <CategoryFilter categories={CATEGORIES} onCategoryChange={() => {}} />
  );
  for (const category of CATEGORIES) {
    expect(screen.getByText(category)).toBeInTheDocument();
  }
});

test("clicking a category button adds a class of 'selected' to the button", () => {
  const mockOnCategoryChange = jest.fn();
  render(
    <CategoryFilter
      categories={CATEGORIES}
      onCategoryChange={mockOnCategoryChange}
    />
  );

  const codeButton = screen.getByRole("button", { name: "Code" });
  const allButton = screen.getByRole("button", { name: "All" });

  fireEvent.click(codeButton);

  expect(codeButton).toHaveClass("selected");
  expect(allButton).not.toHaveClass("selected");
  expect(mockOnCategoryChange).toHaveBeenCalledWith("Code");
});
