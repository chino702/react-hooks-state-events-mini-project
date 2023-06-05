import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onCategoryFilter }) => {
  const handleClick = (category) => {
    onCategoryFilter(category);
  };

  return (
    <div className="category-filter">
      {categories.map((category, index) => (
        <button
          key={index}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
