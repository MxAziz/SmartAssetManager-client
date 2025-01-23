import { Link, NavLink, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { FaCartArrowDown } from "react-icons/fa6";


const Navbar = () => {
  // const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  // const handleLogOut = () => {
  //   signOutUser()
  //     .then(() => {
  //       navigate("/");
  //       toast.success("Sign out successful");
  //     })
  //     .catch((error) => {
  //       console.log("ERROR:", error);
  //     });
  // };
  // navbar links
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
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
                <p className=" text-lg">SmartAssetManager</p>
              </span>
              <div className=" border-t"></div>
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost ">
            <span className="font-bold flex gap-2 justify-center items-center">
              <img
                className="size-10 object-contain mix-blend-color-burn rounded-full"
                src="https://w7.pngwing.com/pngs/903/804/png-transparent-asset-management-computer-icons-finance-bank-financial-management-blue-text-investment-thumbnail.png"
                alt=""
              />
              <p className=" text-lg">SmartAssetManager</p>
            </span>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm font-bold">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
