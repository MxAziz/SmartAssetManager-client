import React from 'react';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Profile = () => {
    const { user, loading } = useAuth();
    console.log(user);
    return (
      <div className="mt-[110px] mb-10">
        <div className="card bg-base-100 w-96 mx-auto shadow-xl">
          <div className=" min-h-[170px] bg-[#874173] rounded-t-xl text-white ">
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
                className="btn btn-wide bg-[#813c6e] hover:bg-[#150510] text-white"
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