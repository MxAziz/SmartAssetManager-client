import { Link, NavLink, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { FaCartArrowDown } from "react-icons/fa6";


const Navbar = () => {
  // const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

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
        <NavLink to={"/"}>HOME</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>CONTACT US</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>DASHBOARD</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>OUR</NavLink>
      </li>
      <li>
        <Link to={"/dashboard/cart"}>
          <button className="btn btn-xs border-none bg-opacity-0 hover:text-black text-white">
            {/* <FaCartArrowDown className="size-5" /> */}
            {/* <div className="badge badge-secondary">+{cart.length}</div> */}
          </button>
        </Link>
      </li>

      {/* {user ? ( */}
        <li>
          <NavLink
            className="btn btn-sm btn-outline text-white hover:bg-[#d4912d]"
            onClick={handleLogOut}
          >
            LOGOUT
          </NavLink>
        </li>
      {/* ) : ( */}
        {/* <li>
          <NavLink
            className="btn btn-sm btn-outline text-white hover:bg-[#d4912d]"
            to={"/login"}
          >
            LOGIN
          </NavLink>
        </li> */}
      {/* )} */}
    </>
  );

  return (
    <div>
      <div className="navbar  fixed z-30 bg-opacity-30 bg-black text-white ">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 py-4 shadow"
            >
              <span className="font-bold">
                <p className=" text-lg">SmartAssetManager</p>
              </span>
              <div className="divider"></div>
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xs font-bold">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
