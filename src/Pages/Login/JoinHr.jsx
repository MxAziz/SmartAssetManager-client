import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FcGoogle } from 'react-icons/fc';

const JoinHr = () => {

  const [selectedValue, setSelectedValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value,
      photo: form.photo.value,
      email: form.email.value,
      companyName: form.companyName.value,
      companyLogo: form.companyLogo.value,
    };
  }


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
    <div className="mt-[70px] mb-16 w-2/3 mx-auto flex ">
      <Helmet>
        <title>JoinHr - SmartAssetManager</title>
      </Helmet>
      {/* image */}
      <figure className="hidden lg:block">
        <img
          className=" h-full w-[450px] shadow-2xl rounded-l-lg rounded-br-lg"
          src="https://i.pinimg.com/736x/60/bc/1c/60bc1cd87b84b06905e2402d15c50c0b.jpg"
          alt=""
        />
      </figure>
      {/* login form */}
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body ">
          <div className="flex flex-col items-center">
            <h3 className="text-xl mt-2">Get Your Free Account Now !</h3>
            <button
              // onClick={handleGoogleSignIn}
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
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your PhotoURL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Your PhotoURL"
              className="input input-bordered "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="input input-bordered "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo</span>
            </label>
            <input
              type="text"
              name="companyLogo"
              placeholder="Company Logo"
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subscription Packages </span>
            </label>
            <select
              id="packages"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Select a package?
              </option>
              <option value="member5">5 Members for $5</option>
              <option value="member10">10 Members for $8</option>
              <option value="member20">20 Members for $15</option>
            </select>
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

export default JoinHr;