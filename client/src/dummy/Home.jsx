import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTasks,
  createTask,
  editTask,
  removeTask,
} from "../features/tasks/TaskActions";
import {
  setSearchQuery,
  setStatusFilter,
  setCurrentPage,
} from "../features/tasks/taskSlice";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import Pagination from "../components/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const { tasks, searchQuery, statusFilter, currentPage } = useSelector(
    (state) => state.tasks
  );
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      dispatch(fetchTasks(dispatch));
    }
  }, [dispatch, user]);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleFilterStatus = (e) => {
    dispatch(setStatusFilter(e.target.value));
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((task) => statusFilter === "all" || task.status === statusFilter);

  const tasksToShow = filteredTasks.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Task List</h1>

      <TaskForm />

      <div className="flex justify-between mb-4">
        <input
          type="text"
          className="border p-2 rounded-md"
          placeholder="Search tasks"
          value={searchQuery}
          onChange={handleSearch}
        />
        <select
          className="border p-2 rounded-md"
          value={statusFilter}
          onChange={handleFilterStatus}
        >
          <option value="all">All</option>
          <option value="DONE">Done</option>
          <option value="PENDING">Pending</option>
        </select>
      </div>

      <div className="space-y-4">
        {tasksToShow.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={editTask}
            onDelete={removeTask}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={filteredTasks.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
