import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

const TaskList = ({ tasks, onDelete }) => {
  const handleTaskDelete = (taskId) => {
    onDelete(taskId);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          category={task.category}
          onDelete={handleTaskDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;

