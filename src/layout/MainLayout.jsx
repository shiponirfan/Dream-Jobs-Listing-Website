import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="font-inter">
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default MainLayout;
