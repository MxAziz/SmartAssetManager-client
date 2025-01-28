import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser, loading } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();



  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) return (
    <div>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
  if (isError) return <div>Error: {error.message}</div>;

if (loading) {
  return <span className="loading loading-bars loading-lg"></span>;
  }



  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        navigate("/");
        toast.success("Sign out successful");
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  };


  // navbar links
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user ? (
        <>
          {data?.role === "employee" && (
            <>
              <li>
                <NavLink to="/myAssets" className="hover:underline">
                  My Assets
                </NavLink>
              </li>
              <li>
                <NavLink to="/myTeam" className="hover:underline">
                  My Team
                </NavLink>
              </li>
              <li>
                <Link to="/requestAsset" className="hover:underline">
                  Request for an Asset
                </Link>
              </li>
            </>
          )}

          {data.role === "hr" && (
            <>
              <li>
                <NavLink to={"/assetList"}>Asset List</NavLink>
              </li>
              <li>
                <NavLink to={"/addAsset"}> Add an Asset</NavLink>
              </li>
              <li>
                <NavLink to={"/allRequest"}>All Request </NavLink>
              </li>
              <li>
                <NavLink to={"/myEmployee"}>My Employee List </NavLink>
              </li>
              <li>
                <NavLink to={"/addEmployee"}>Add an Employee </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
          <li className="lg:hidden">
            <button onClick={handleLogOut}>Logout</button>
          </li>
          <li className="hidden lg:block">
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="text" className=" m-1">
                <img
                  className="size-10 rounded-full"
                  src={
                    user.photoURL ||
                    "https://i.pinimg.com/474x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg"
                  }
                  alt=""
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-gray-900 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li className=" text-base">
                  <a>{user?.displayName} </a>
                </li>
                <li>
                  <a>{user.email} </a>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to={"/joinEmployee"}>Join as Employee</NavLink>
          </li>
          <li>
            <NavLink to={"/joinHr"}>Join as HR Manager</NavLink>
          </li>
          <li>
            <NavLink
              className="btn btn-sm px-6 btn-outline text-white hover:bg-[#4d2745]"
              to={"/login"}
            >
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );


  return (
    <div>
      <div className="navbar max-w-screen-xl mx-auto fixed z-30 bg-opacity-30 bg-black text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-gray-900 px-6 py-8 space-y-3 rounded-box z-[1] mt-3 shadow"
            >
              <span className="font-bold">
                <p className=" text-lg">
                  {user?.companyName || "SmartAssetManager"}
                </p>
              </span>
              <div className=" border-t"></div>
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost ">
            <span className="font-bold flex gap-2 justify-center items-center">
              <img
                className="size-10 object-contain mix-blend-color-burn rounded-full"
                src={
                  user?.companyLogo ||
                  "https://w7.pngwing.com/pngs/903/804/png-transparent-asset-management-computer-icons-finance-bank-financial-management-blue-text-investment-thumbnail.png"
                }
                alt=""
              />
              <p className=" text-lg">
                {user?.companyName || "SmartAssetManager"}
              </p>
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm font-bold flex justify-center items-center">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
