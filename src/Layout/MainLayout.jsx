import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";


const MainLayout = () => {
  const location = useLocation();
  const isLoginPage =
    location.pathname.includes("login") || location.pathname.includes("signUp");

  return (
    <div className=" min-h-screen flex flex-col">
          {/* {isLoginPage || <Navbar></Navbar>} */}
          <Navbar></Navbar>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
          {/* {isLoginPage || <Footer></Footer>} */}
          <Footer></Footer>
    </div>
  );
};

export default MainLayout;