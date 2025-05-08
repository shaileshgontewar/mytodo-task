import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link to="/tasks" className="hover:underline font-semibold">
          Tasks
        </Link>
        <Link to="/tasks/new" className="hover:underline font-semibold">
          Add Task
        </Link>
      </div>
      {token && (
        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
