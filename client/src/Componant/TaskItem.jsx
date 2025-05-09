import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../features/tasks/taskSlice";
import { useNavigate } from "react-router-dom";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleEdit = (task) => {
    navigate(`/tasks/${task._id}`);
  };

  return (
    <div className="p-4 border rounded mb-2 flex justify-between items-center bg-white shadow-sm">
      <div>
        <h3 className="text-xl font-bold">{task.name}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <p
          className={`text-sm font-medium ${
            task.status === "DONE" ? "text-green-500" : "text-red-500"
          }`}
        >
          {task.status}
        </p>
        <p className="text-sm text-gray-600">Created: {new Date(task.createdAt).toLocaleDateString()}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => handleEdit(task)}
          className="bg-blue-400 text-white px-3 py-1 rounded"
        >
          Edit
        </button>
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
