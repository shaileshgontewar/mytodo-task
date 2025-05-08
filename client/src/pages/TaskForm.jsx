import React, { useState, useEffect } from "react";
import {
  createTask,
  updateTask,
  fetchTasks,
} from "../features/tasks/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "PENDING",
  });

  useEffect(() => {
    if (id) {
      const task = tasks.find((t) => t._id === id);
      if (task) {
        setFormData({
          name: task.name,
          description: task.description,
          status: task.status,
        });
      }
    }
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateTask({ id, data: formData }));
    } else {
      dispatch(createTask(formData));
    }
    dispatch(fetchTasks());
    navigate("/tasks");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md mt-10">
      <h2 className="text-xl font-bold mb-4">
        {id ? "Edit Task" : "Add Task"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Task Name"
          className="w-full border p-2"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full border p-2"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <select
          className="w-full border p-2"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        >
          <option value="PENDING">PENDING</option>
          <option value="DONE">DONE</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          {id ? "Update Task" : "Create Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
