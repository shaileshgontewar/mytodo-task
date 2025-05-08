import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "../Componant/layouts/PublicLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import PrivateLayout from "../Componant/layouts/PrivateLayout";
import TaskList from "../pages/TaskList";
import TaskForm from "../pages/TaskForm";

const AppRoutes = () => (
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
);

export default AppRoutes;
