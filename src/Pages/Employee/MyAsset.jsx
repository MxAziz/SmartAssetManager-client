import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const MyAsset = () => {
  const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const {
      data: requestAssets = [],
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["requestAssets"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/products`);
        return res.data;
      },
    });

      if (isLoading) return <p>Loading...</p>;




    console.log(requestAssets);
  return <div></div>;
};

export default MyAsset;


// import React, { useState, useEffect } from "react";
// // import { PDFDownloadLink } from "@react-pdf/renderer";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import useAuth from "../../hooks/useAuth";
// import { useQuery } from "@tanstack/react-query";
// // import AssetPrint from "./AssetPrint";

// const MyAsset = () => {
//   const [search, setSearch] = useState("");
//   const [filters, setFilters] = useState({ status: "", type: "" });
//   const [allAssets, setAllAssets] = useState([]);
//   const [filteredAssets, setFilteredAssets] = useState([]);
//   const axiosSecure = useAxiosSecure();
//     const { user } = useAuth();



//     // Fetch assets from server
//     const { data: assets = [], refetch } = useQuery({
//       queryKey: ["requestAsset", search, filters],
//       enabled: !!user?.email,
//       queryFn: async () => {
//         try {
//           const res = await axiosSecure.get(`/requestAsset/${user?.email}`);
//           setAllAssets(res.data);
//           setFilteredAssets(res.data);
//           return res.data;
//         } catch (error) {
//           console.error("Error fetching assets:", error);
//           throw new Error("Failed to fetch assets");
//         }
//       },
//     });

// //   useEffect(() => {
// //     const fetchAssets = async () => {
// //       try {
// //         const res = await axiosSecure.get(`/assets/${user.email}`);

// //       } catch (error) {
// //         console.error("Error fetching assets:", error);
// //       }
// //     };
// //     fetchAssets();
// //   }, [axiosSecure, user.email]);

//   // Filter assets based on search and filters
//   useEffect(() => {
//     let filtered = allAssets;

//     if (search) {
//       filtered = filtered.filter((asset) =>
//         asset.productName.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (filters.status) {
//       filtered = filtered.filter((asset) => asset.status === filters.status);
//     }


//     if (filters.type) {
//       filtered = filtered.filter((asset) => asset.type === filters.type);
//     }

//     setFilteredAssets(filtered);
//   }, [search, filters, allAssets]);

//   // Cancel request
//   const handleCancelRequest = async (id) => {
//     try {
//       await axiosSecure.patch(`/assets/${id}`, { status: "Cancelled" });
//       const updatedAssets = allAssets.map((asset) =>
//         asset._id === id ? { ...asset, status: "Cancelled" } : asset
//       );
//       setAllAssets(updatedAssets);
//     } catch (error) {
//       console.error("Error cancelling request:", error);
//     }
//   };

//   // Return asset
//   const handleReturnAsset = async (id) => {
//     try {
//       await axiosSecure.patch(`/assets/${id}`, { status: "Returned" });
//       const updatedAssets = allAssets.map((asset) =>
//         asset._id === id ? { ...asset, status: "Returned" } : asset
//       );
//       setAllAssets(updatedAssets);
//     } catch (error) {
//       console.error("Error returning asset:", error);
//     }
//   };

//   return (
//     <div className="p-4 space-y-4">
//       {/* Search Section */}
//       <div>
//         <input
//           type="text"
//           placeholder="Search by Asset Name"
//           className="p-2 border rounded w-full"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Filter Section */}
//       <div className="flex space-x-4">
//         <select
//           className="p-2 border rounded"
//           value={filters.status}
//           onChange={(e) => setFilters({ ...filters, status: e.target.value })}
//         >
//           <option value="">Filter by Status</option>
//           <option value="Pending">Pending</option>
//           <option value="Approved">Approved</option>
//           <option value="Cancelled">Cancelled</option>
//         </select>
//         <select
//           className="p-2 border rounded"
//           value={filters.type}
//           onChange={(e) => setFilters({ ...filters, type: e.target.value })}
//         >
//           <option value="">Filter by Type</option>
//           <option value="Returnable">Returnable</option>
//           <option value="Non-returnable">Non-returnable</option>
//         </select>
//       </div>

//       {/* Asset List Section */}
//       <div className="space-y-4">
//         {assets.map((asset) => (
//           <div
//             key={asset._id}
//             className="p-4 border rounded shadow flex justify-between items-center"
//           >
//             <div>
//               <h3 className="text-lg font-semibold">{asset.productName}</h3>
//               <p>Type: {asset.type}</p>
//               <p>
//                 Request Date: {new Date(asset.requestDate).toLocaleDateString()}
//               </p>
//               <p>
//                 Approval Date:{" "}
//                 {asset.approvalDate
//                   ? new Date(asset.approvalDate).toLocaleDateString()
//                   : "N/A"}
//               </p>
//               <p>Status: {asset.status}</p>
//             </div>
//             <div className="space-x-2">
//               {asset.status === "Pending" && (
//                 <button
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                   onClick={() => handleCancelRequest(asset._id)}
//                 >
//                   Cancel Request
//                 </button>
//               )}
//               {asset.status === "Approved" && (
//                 <>
//                   {/* <PDFDownloadLink
//                     document={<AssetPrint asset={asset} />}
//                     fileName={`${asset.productName}_details.pdf`}
//                   >
//                     <button className="bg-blue-500 text-white px-4 py-2 rounded">
//                       Print Details
//                     </button>
//                   </PDFDownloadLink> */}
//                   {asset.type === "Returnable" && (
//                     <button
//                       className="bg-green-500 text-white px-4 py-2 rounded"
//                       onClick={() => handleReturnAsset(asset._id)}
//                       disabled={asset.status === "Returned"}
//                     >
//                       Return Asset
//                     </button>
//                   )}
//                 </>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyAsset;