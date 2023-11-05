import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyJobs from "../pages/MyJobs/MyJobs";
import AllJobs from "../pages/AllJobs/AllJobs";
import Blogs from "../pages/Blogs/Blogs";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "all-jobs",
        element: <AllJobs />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "applied-jobs",
        element: (
          <PrivateRoutes>
            <AppliedJobs />
          </PrivateRoutes>
        ),
      },
      {
        path: "add-job",
        element: (
          <PrivateRoutes>
            <AddJobs />
          </PrivateRoutes>
        ),
      },
      {
        path: "my-jobs",
        element: (
          <PrivateRoutes>
            <MyJobs />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default Routes;
