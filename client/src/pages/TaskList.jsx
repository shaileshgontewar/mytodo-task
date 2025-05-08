import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, setPage, setFilter } from "../features/tasks/taskSlice";
import TaskItem from "../Componant/TaskItem";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, currentPage, totalTasks, filters } = useSelector(
    (state) => state.tasks
  );

  console.log(totalTasks, "totalTasks");

  useEffect(() => {
    dispatch(fetchTasks());
  }, [currentPage, filters]);

  const handleSearch = (e) => {
    dispatch(setFilter({ search: e.target.value }));
  };

  const handleStatusFilter = (e) => {
    dispatch(setFilter({ status: e.target.value }));
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">My Tasks</h1>
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={filters.search}
          onChange={handleSearch}
          className="border p-2 w-1/3"
        />
        <select
          onChange={handleStatusFilter}
          value={filters.status}
          className="border p-2"
        >
          <option value="">All</option>
          <option value="PENDING">Pending</option>
          <option value="DONE">Done</option>
        </select>
      </div>
      {tasks?.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
      <div className="flex justify-center mt-4">
        {[...Array(Math.ceil((totalTasks || 0) / 10)).keys()]?.map((n) => (
          <button
            key={n}
            onClick={() => handlePageChange(n + 1)}
            className={`mx-1 px-3 py-1 ${
              currentPage === n + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {n + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
