import { createBrowserRouter } from "react-router-dom";
import EmployeeRegistration from "../pages/EmployeeRegistration";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <EmployeeRegistration />,
    },
]);
