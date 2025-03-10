import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://sam000.vercel.app",
  // headers: { Authorization: `Bearer ${token}` },
});


const useAxiosSecure = () => {
  // const navigate = useNavigate();
  // const { signOutUser, user } = useAuth();

  // request interceptor to add authorization header for every secure call to the api
//   axiosSecure.interceptors.request.use(
//     function (config) {
//       const token = localStorage.getItem("access-token");
//       console.log("request stopped by interceptors", token);
//       config.headers.authorization = `Bearer ${token}`;
//       return config;
//     },
//     function (err) {
//       // do something with request err.
//       return Promise.reject(err);
//     }
//   );

  // intercepts 401 and 403 status.
//   axiosSecure.interceptors.response.use(
//     function (response) {
//       return response;
//     },
//     async (error) => {
//       const status = error.response.status;
//       // console.log('status error in the interceptor', status);
//       // for 401 or 403 logout the user and move the user to the login
//       if (status === 401 || status === 403) {
//         await signOutUser();
//         navigate("/login");
//       }
//       return Promise.reject(error);
//     }
//   );

  return axiosSecure;
};

export default useAxiosSecure;
