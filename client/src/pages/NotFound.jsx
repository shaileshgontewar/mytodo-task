import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-gray-700 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-500 mb-6">
        Oops! The page you're looking for does not exist.
      </p>
      <Link
        to="/tasks"
        className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        Go Back to Tasks
      </Link>
    </div>
  );
};

export default NotFound;
