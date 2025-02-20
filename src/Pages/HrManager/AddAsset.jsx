import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddAsset = () => {
  const [selectedValue, setSelectedValue] = useState();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      productName: form.name.value,
      type: form.type.value,
      productQuantity: form.quantity.value,
      date: Date.now(),
    };

    axiosSecure
      .post("/products", formData)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Product Added to the Database!");
        //   navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="pt-20 lg:pt-[120px] pb-8 dark:bg-gray-800">
      <Helmet>
        <title>AddAsset - SmartAssetManager</title>
      </Helmet>
      <div className="card bg-base-100 dark:bg-gray-900 dark:text-white mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Product Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              className="input input-bordered dark:bg-gray-800"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Product Type </span>
            </label>
            <select
              id="products"
              name="type"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              className="select select-bordered w-full max-w-sm dark:bg-gray-800"
            >
              <option disabled value="">
                Select a Product type?
              </option>
              <option value="Returnable">Returnable</option>
              <option value="Non-returnable">Non-returnable</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">
                Product Quantity
              </span>
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Product Quantity"
              className="input input-bordered dark:bg-gray-800"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className=" py-3 rounded-md bg-[#4d2745] text-white hover:bg-[#634f73]">
              Add an Asset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAsset;
