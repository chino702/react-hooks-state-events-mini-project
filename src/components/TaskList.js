import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={uuidv4()} text={task.text} category={task.category} />
      ))}
    </div>
  );
};

export default TaskList;
