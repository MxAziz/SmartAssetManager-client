import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AssetList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStock, setFilterStock] = useState("");
  const [filterType, setFilterType] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const axiosSecure = useAxiosSecure();

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosSecure.get("/products");
      return res.data;
    },
  });

    console.log(products);

  // Handle delete product
  const handleDelete = (id) => {
    axiosSecure
      .delete(`/products/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          toast.success("Product deleted successfully!");
          refetch();
        }
      })
      .catch((error) => toast.error(error.message));
  };

  // Handle update product (redirect to update page or modal)
  const handleUpdate = (id) => {
    toast.info(`Update feature not implemented for ID: ${id}`);
  };

  // Apply filters, sorting, and search
  const filteredProducts = products
    .filter((product) => {
      // Search by name
      return product.productName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    })
    .filter((product) => {
      // Filter by stock status
      if (filterStock === "available") return product.productQuantity > 0;
      if (filterStock === "out-of-stock") return product.productQuantity === 0;
      return true;
    })
    .filter((product) => {
      if (filterType) return product.type === filterType;
      return true;
    })
    .sort((a, b) => {
      // Sort by quantity
      if (sortOrder === "asc") return a.productQuantity - b.productQuantity;
      if (sortOrder === "desc") return b.productQuantity - a.productQuantity;
      return 0;
    });

  if (isLoading) {
    return (
      <p>
        <span className="loading loading-bars loading-lg"></span>
      </p>
    );
  }

  return (
    <div className="mt-[120px] mb-8 container w-11/12 mx-auto">
      <div className="flex justify-between items-center">
        {/* Search Section */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by product name..."
            className="input input-bordered w-full max-w-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter Section */}
        <div className="mb-4 flex gap-4">
          <select
            className="select select-bordered"
            value={filterStock}
            onChange={(e) => setFilterStock(e.target.value)}
          >
            <option value="">Filter by stock status</option>
            <option value="available">Available</option>
            <option value="out-of-stock">Out of Stock</option>
          </select>

          <select
            className="select select-bordered"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">Filter by asset type</option>
            <option value="Returnable">Returnable</option>
            <option value="Non-returnable">Non-returnable</option>
          </select>
        </div>

        {/* Sorting Section */}
        <div className="mb-4">
          <button
            className="btn bg-[#4d2745] text-white hover:bg-gray-900 mr-2"
            onClick={() => setSortOrder("asc")}
          >
            Sort by Quantity (Asc)
          </button>
          <button
            className="btn bg-[#4d2745] text-white hover:bg-gray-900"
            onClick={() => setSortOrder("desc")}
          >
            Sort by Quantity (Desc)
          </button>
        </div>
      </div>

      {/* List Section */}
      <div className="overflow-x-auto mt-4">
        <table className="table w-full">
          <thead>
            <tr className=" bg-[#4d2745] text-white ">
              <th>Product Name</th>
              <th>Product Type</th>
              <th>Product Quantity</th>
              <th>Date Added</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product._id}>
                <td>{product.productName}</td>
                <td>{product.type}</td>
                <td>{product.productQuantity}</td>
                <td>{new Date(product.date).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn btn-sm btn-info mr-2"
                    onClick={() => handleUpdate(product._id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetList;