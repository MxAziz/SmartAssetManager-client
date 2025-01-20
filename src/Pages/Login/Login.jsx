import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GiArchiveRegister } from 'react-icons/gi';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet';

const Login = () => {

    const { signInUser, signInWithGoogle } = useAuth();

    return (
        <div className="mt-[70px] mb-16 w-2/3 mx-auto flex">
            <Helmet><title>Login - SmartAssetManager</title></Helmet>
        {/* image */}
        <figure>
          <img
            className=" h-[510px] w-[450px]"
            src="https://i.pinimg.com/736x/54/b9/ef/54b9ef6848259e884dee8a3744706439.jpg"
            alt=""
          />
        </figure>
        {/* login form */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body rounded-l-none">
            <div className="flex flex-col items-center">
              <h3 className="text-xl mt-2">Welcome Back !</h3>
              <button
                // onClick={handleGoogleLogin}
                className="btn mt-3 w-full flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-900 rounded-lg px-4 py-2 "
              >
                <FcGoogle className="size-5" />
                Login in with Google
              </button>
            </div>
            <div className="divider text-xs hover:underline">
              Or Login with Email
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#6e3261] text-white hover:bg-gray-700">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;