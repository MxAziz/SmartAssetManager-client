import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const JoinHr = () => {
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");

  // Regular expression:
  const passwordReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/;

  const packages = [
    { id: 1, name: "5 Members", price: 5 },
    { id: 2, name: "10 Members", price: 8 },
    { id: 3, name: "20 Members", price: 15 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const formData = {
      name,
      photo,
      email,
      dob: form.dob.value,
      // package: form.packageId.value,
      package: selectedValue,
      companyName: form.companyName.value,
      companyLogo: form.companyLogo.value,
      role:"hr",
    };
    console.log(formData);

    // password validation
        if (!passwordReg.test(password)) {
          toast.error(
            "Password Must have an Uppercase, a Lowercase, one digit and Length must be at least 6 characters"
          );
          return;
    }

    createUser(email, password)
          .then((result) => {
            // console.log(result.user);

            updateUserProfile(name, photo)
              .then(() => {
                axiosPublic.post("/users", formData).then((res) => {
                  if (res.data.insertedId) {
                    e.target.reset();
                    toast.success("user added to the database");
                    navigate("/");
                  }
                });
              })
              .catch((error) => console.log("user profile update error", error));
          })
          .catch((error) => {
            toast.error(error.message);
          });



        // Redirect to payment page
    // alert("Registration successful! Redirecting to payment...");
    // window.location.href = "/payment";
  };

  return (
    <div className="mt-[70px] mb-16 w-3/4 mx-auto flex ">
      <Helmet>
        <title>JoinHr - SmartAssetManager</title>
      </Helmet>
      {/* image */}
      <figure className="hidden lg:block">
        <img
          className=" h-full w-[490px] shadow-2xl rounded-l-lg rounded-br-lg"
          src="https://i.pinimg.com/736x/4d/32/95/4d32957d2fc2d92c6893e2cfef3b7bf8.jpg"
        />
      </figure>
      {/* login form */}
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body ">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl mt-2">Registration Now !</h3>
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
              name="packageId"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              className="select select-bordered w-full max-w-sm"
            >
              <option disabled value="">
                Select a package?
              </option>
              {packages.map((pkg) => (
                <option key={pkg.id} value={pkg.price}>
                  {pkg.name} - ${pkg.price}
                </option>
              ))}
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


// import React, { useState } from "react";
// import { Helmet } from "react-helmet";

// const JoinHr = () => {
//   const [selectedValue, setSelectedValue] = useState("");

//   const packages = [
//     { id: 1, name: "5 Members", price: 5 },
//     { id: 2, name: "10 Members", price: 8 },
//     { id: 3, name: "20 Members", price: 15 },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = {
//       name: form.name.value,
//       photo: form.photo.value,
//       email: form.email.value,
//       password: form.password.value,
//       dob: form.dob.value,
//       packageId: form.packageId.value,
//       companyName: form.companyName.value,
//       companyLogo: form.companyLogo.value,
//     };
//     console.table(formData);
//     // Redirect to payment page
//     alert("Registration successful! Redirecting to payment...");
//     window.location.href = "/payment";
//   };

//   return (
//     <div className="mt-[70px] mb-16 w-3/4 mx-auto flex">
//       <Helmet>
//         <title>JoinHr - SmartAssetManager</title>
//       </Helmet>
//       {/* Image Section */}
//       <figure className="hidden lg:block">
//         <img
//           className="h-full w-[490px] shadow-2xl rounded-l-lg rounded-br-lg"
//           src="https://i.pinimg.com/736x/4d/32/95/4d32957d2fc2d92c6893e2cfef3b7bf8.jpg"
//           alt="HR Illustration"
//         />
//       </figure>
//       {/* Registration Form */}
//       <div className="card bg-base-100 w-full max-w-md shadow-2xl">
//         <form onSubmit={handleSubmit} className="card-body">
//           <h3 className="text-2xl text-center mb-4">Register Now!</h3>
//           <div className="form-control">
//             <label className="label">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               className="input input-bordered"
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">Photo URL</label>
//             <input
//               type="text"
//               name="photo"
//               placeholder="Your Photo URL"
//               className="input input-bordered"
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">Company Name</label>
//             <input
//               type="text"
//               name="companyName"
//               placeholder="Company Name"
//               className="input input-bordered"
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">Company Logo URL</label>
//             <input
//               type="text"
//               name="companyLogo"
//               placeholder="Company Logo URL"
//               className="input input-bordered"
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className="input input-bordered"
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="input input-bordered"
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">Date of Birth</label>
//             <input
//               type="date"
//               name="dob"
//               className="input input-bordered"
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">Subscription Packages</label>
//             <select
//               name="packageId"
//               value={selectedValue}
//               onChange={(e) => setSelectedValue(e.target.value)}
//               className="select select-bordered"
//               required
//             >
//               <option value="" disabled>
//                 Select a package
//               </option>
//               {packages.map((pkg) => (
//                 <option key={pkg.id} value={pkg.id}>
//                   {pkg.name} - ${pkg.price}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="form-control mt-6">
//             <button className="btn bg-[#6e3261] text-white hover:bg-gray-700">
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default JoinHr;
