import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Components/ErrorPage";
import Login from "../Pages/Login/Login";
import JoinEmployee from "../Pages/Login/JoinEmployee";
import JoinHr from "../Pages/Login/JoinHr";
import PrivateRoute from "./PrivateRoute";
import MyAsset from "../Pages/Employee/MyAsset";
import MyTeam from "../Pages/Employee/MyTeam";
import RequestAsset from "../Pages/Employee/RequestAsset";

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
        path: "/myAssets",
        element: (
          <PrivateRoute>
            <MyAsset></MyAsset>
          </PrivateRoute>
        ),
      },
      {
        path: "/myTeam",
        element: (
          <PrivateRoute>
            <MyTeam></MyTeam>
          </PrivateRoute>
        ),
      },
      {
        path: "/requestAsset",
        element: (
          <PrivateRoute>
            <RequestAsset></RequestAsset>
          </PrivateRoute>
        ),
      },
      {
        path: "/joinHr",
        element: <JoinHr></JoinHr>,
      },
    ],
  },
]);