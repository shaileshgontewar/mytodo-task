import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleStatus = () => {
    dispatch(
      updateTask({
        id: task._id,
        data: { ...task, status: task.status === "DONE" ? "PENDING" : "DONE" },
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTask(task._id));
  };

  return (
    <div className="p-4 border rounded mb-2 flex justify-between items-center bg-white shadow-sm">
      <div>
        <h3 className="font-bold">{task.name}</h3>
        <p>{task.description}</p>
        <p className="text-sm text-gray-500">Status: {task.status}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleToggleStatus}
          className="px-3 py-1 bg-yellow-400 text-white rounded"
        >
          Toggle
        </button>
        <button
          onClick={handleDelete}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
