import React from "react";
import { FaUserCheck, FaCogs, FaChartLine } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800  dark:text-white text-center">
      <div className="container w-11/12 mx-auto max-w-4xl ">
        <h2 className="text-4xl font-extrabold ">How It Works</h2>
        <p className="mt-4 text-lg ">
          Follow these simple steps to streamline your asset management.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {[
            {
              icon: <FaUserCheck size={50} />,
              title: "1. Register",
              description:
                "Create an account for your organization in just a few clicks.",
            },
            {
              icon: <FaCogs size={50} />,
              title: "2. Add Assets",
              description:
                "Easily add and categorize your company's assets with our user-friendly interface.",
            },
            {
              icon: <FaChartLine size={50} />,
              title: "3. Assign & Track",
              description:
                "Assign assets to employees and track their usage effortlessly.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-gray-700 dark:text-white text-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-4 text-[#4d2745] dark:text-[#21101e]">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-100">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
