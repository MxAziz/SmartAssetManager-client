import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddEmployee = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [currentPackage, setCurrentPackage] = useState({
    employeeCount: 3,
    packageLimit: 5,
  });


  // Fetch users who are not affiliated with any company
  const {
    data: employees = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

    console.log(employees);

//   Mutation to add employee to the team
//   const addEmployeeMutation = useMutation(
//     (employeeId) =>
//       axiosSecure.put(`/add-to-team/${employeeId}`, {
//         // Optional data for future use
//       }),
//     {
//       onSuccess: () => {
//         toast.success("Employee added to the team!");
//         refetch();
//         setCurrentPackage((prev) => ({
//           ...prev,
//           employeeCount: prev.employeeCount + 1,
//         }));
//       },
//       onError: (error) =>
//         toast.error(error.response.data.message || error.message),
//     }
//   );

  // Redirect to Package Upgrade Page
  const handleUpgrade = () => navigate("/upgrade-package");

  if (isLoading) return (
    <p>
      <span className="loading loading-bars loading-lg"></span>
    </p>
  );

  return (
    <div className="mt-20 container mx-auto">
      {/* Package Section */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold">Current Package</h2>
        <p>Employee Count: {currentPackage.employeeCount}</p>
        <p>Package Limit: {currentPackage.packageLimit}</p>
        {currentPackage.employeeCount >= currentPackage.packageLimit && (
          <p className="text-red-500">
            Upgrade your package to add more members.
          </p>
        )}
        <button
          onClick={handleUpgrade}
          className="btn btn-primary mt-4"
          disabled={currentPackage.employeeCount < currentPackage.packageLimit}
        >
          Upgrade Package
        </button>
      </div>

      {/* Employee List */}
      <div className="overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4">Add Employees to the Team</h2>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Select</th>
              <th>Image</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(employees) ? employees.map((employee) => (
              <tr key={employee._id}>
                <td>
                  <input type="checkbox" className="checkbox" />
                </td>
                <td>
                  <img
                    src={employee.photo || "/default-profile.png"}
                    alt={employee.name}
                    className="w-12 h-12 rounded-full"
                  />
                </td>
                <td>{employee.name}</td>
                <td>
                  <button
                    onClick={() => addEmployeeMutation.mutate(employee._id)}
                    className="btn btn-sm btn-info"
                    disabled={
                      currentPackage.employeeCount >=
                      currentPackage.packageLimit
                    }
                  >
                    Add to Team
                  </button>
                </td>
              </tr>
            )): (<p>Loading...</p>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddEmployee;