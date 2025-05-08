import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import TaskList from "./pages/TaskList";
import TaskForm from "./pages/TaskForm";
import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./Componant/Navbar";
import Register from "./pages/Register";
import PublicLayout from "./Componant/layouts/PublicLayout";
import PrivateLayout from "./Componant/layouts/PrivateLayout";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();
  const noNavbarRoutes = ["/login", "/register"];
  const hideNavbar = noNavbarRoutes.includes(location.pathname);
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route
          element={
            <ProtectedRoute>
              <PrivateLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id" element={<TaskForm />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
