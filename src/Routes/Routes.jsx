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
import AssetList from './../Pages/HrManager/AssetList';
import AddAsset from './../Pages/HrManager/AddAsset';
import AllRequest from './../Pages/HrManager/AllRequest';
import MyEmployee from './../Pages/HrManager/MyEmployee';
import AddEmployee from './../Pages/HrManager/AddEmployee';
import Profile from "../Pages/Common/Profile";
import Payment from "../Pages/Payment/Payment";
import UpdateUser from "../Pages/Common/UpdateUser";

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
        path: "/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: "/updateProfile",
        element: <PrivateRoute><UpdateUser></UpdateUser></PrivateRoute>,
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
      {
        path: "/assetList",
        element: (
          <PrivateRoute>
            <AssetList></AssetList>
          </PrivateRoute>
        ),
      },
      {
        path: "/addAsset",
        element: (
          <PrivateRoute>
            <AddAsset></AddAsset>
          </PrivateRoute>
        ),
      },
      {
        path: "/allRequest",
        element: (
          <PrivateRoute>
            <AllRequest></AllRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/myEmployee",
        element: (
          <PrivateRoute>
            <MyEmployee></MyEmployee>
          </PrivateRoute>
        ),
      },
      {
        path: "/addEmployee",
        element: (
          <PrivateRoute>
            <AddEmployee></AddEmployee>
          </PrivateRoute>
        ),
      },
    ],
  },
]);