import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    }
]);

export default Routes;