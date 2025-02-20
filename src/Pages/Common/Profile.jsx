import React from 'react';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Profile = () => {
    const { user, loading } = useAuth();
    return (
      <div className="pt-[120px] pb-10 dark:bg-gray-800">
        <div className="card bg-base-100 dark:bg-gray-900 dark:text-white w-96 mx-auto shadow-xl">
          <div className=" min-h-[170px] bg-gradient-to-l bg-[#874173] from-black rounded-t-xl text-white ">
            <p className="font-semibold text-xl text-center mt-8">
              Welcome back to your profile
            </p>
          </div>
          <div className="flex flex-col justify-center items-center absolute left-32 top-28">
            <img className="size-28 rounded-full" src={user.photoURL} />
          </div>
          <div className="card-body pt-[70px] text-center">
            <h2 className="card-title mx-auto text-3xl font-bold">
              {user.displayName}
            </h2>
            <p className=" font-semibold">{user.email}</p>
            <div className="card-actions justify-center mt-1">
              <NavLink
                to={"/updateProfile"}
                className="py-3 rounded-md btn-wide bg-[#813c6e] hover:bg-[#150510] text-white"
              >
                Update Profile
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;