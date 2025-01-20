import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Components/ErrorPage";
import Login from "../Pages/Login/Login";
import JoinEmployee from "../Pages/Login/JoinEmployee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/joinEmployee",
        element: <JoinEmployee></JoinEmployee>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);