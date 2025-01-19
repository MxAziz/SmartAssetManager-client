import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const MainLayout = () => {

  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
