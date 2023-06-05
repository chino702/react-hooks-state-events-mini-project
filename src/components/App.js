import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import { TASKS, CATEGORIES } from "../data";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks =
    selectedCategory === "All"
      ? TASKS
      : TASKS.filter((task) => task.category === selectedCategory);

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryFilter={handleCategoryFilter}
      />
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default App;
