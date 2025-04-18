import React, { useState } from "react";
import PropTypes from "prop-types";

function CategoryFilter({ categories, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories && categories.length > 0 ? (
        categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={category === selectedCategory ? "selected" : ""}
          >
            {category}
          </button>
        ))
      ) : (
        <p>No categories available</p>
      )}
    </div>
  );
}

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
