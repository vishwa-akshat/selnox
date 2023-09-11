import { createBrowserRouter } from "react-router-dom";
import EmployeeRegistration from "../pages/EmployeeRegistration";
import EmployeeList from "../pages/EmployeeList";
import EmployeeView from "../pages/EmployeeView";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <EmployeeRegistration />,
    },
    {
        path: "/list",
        element: <EmployeeList />,
    },
    {
        path: "/view",
        element: <EmployeeView />,
    },
]);
