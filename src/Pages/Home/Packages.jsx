import React from "react";
import { FaHandHoldingDollar } from "react-icons/fa6";

const Packages = () => {
  const packages = [
    { id: 1, name: "Maximum 5 employees", price: 5 },
    { id: 2, name: "Maximum 10 employees", price: 8 },
    { id: 3, name: "Maximum 20 employees", price: 15 },
  ];

  return (
    <div className="bg-gray-100 py-10 pb-20 dark:bg-gray-800 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl dark:text-white font-bold mb-6 ">Packages</h2>
        <p className="text-xl text-gray-700 dark:text-gray-100 mb-8">
          Choose the right plan for your needs with our flexible, scalable
          pricing options.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="p-6 bg-white dark:bg-gray-700 dark:text-white shadow-lg rounded-lg flex flex-col items-center"
            >
              <FaHandHoldingDollar className="text-4xl text-[#8c6c58] dark:text-white mb-4" />
              <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-gray-700 dark:text-gray-100">
                <span className="text-2xl font-bold">${pkg.price}</span> / month
              </p>
              <button className=" py-3 rounded-md btn-wide bg-[#633159] text-white hover:bg-[#854276] mt-4">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
