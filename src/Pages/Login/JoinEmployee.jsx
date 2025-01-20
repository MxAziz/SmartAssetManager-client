import React, { useState } from "react";
import useAuth from "./../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";

const JoinEmployee = () => {
  const { signInWithGoogle, createUser } = useAuth();

  const [error, setError] = useState("");



  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const birth = e.target.dob.value;
    console.log(name, email, password, birth);
  };

  // google signIn method
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
        toast.success("Sign up with Google is successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="mt-[70px] mb-16 w-2/3 mx-auto flex flex-row-reverse">
      <Helmet>
        <title>JoinEmployee - SmartAssetManager</title>
      </Helmet>
      {/* image */}
      <figure className="hidden lg:block">
        <img
          className=" h-full w-[450px] shadow-2xl rounded-r-lg rounded-bl-lg"
          src="https://i.pinimg.com/736x/21/90/af/2190af9f526c96a4680d68335c9a3d25.jpg"
          alt=""
        />
      </figure>
      {/* login form */}
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body ">
          <div className="flex flex-col items-center">
            <h3 className="text-xl mt-2">Get Your Free Account Now !</h3>
            <button
              onClick={handleGoogleSignIn}
              className="btn mt-3 w-full flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-400 rounded-lg px-4 py-2 "
            >
              <FcGoogle className="size-5" />
              SignUp with Google
            </button>
          </div>
          <div className="divider text-xs hover:underline">
            Or Registration with Email
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered "
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
          <div>
            <label className="label-text ml-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              required
              className="w-full px-4 py-2 border rounded-md "
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#6e3261] text-white hover:bg-gray-700">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinEmployee;
