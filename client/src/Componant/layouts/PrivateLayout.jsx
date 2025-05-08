import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const PrivateLayout = () => {
  return (
    <>
      <Navbar />
      <main className="p-4 bg-gray-100 min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default PrivateLayout;
