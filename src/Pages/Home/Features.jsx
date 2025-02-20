import React from "react";

const Features = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-700 text-center  mx-auto">
      <div className="container w-11/12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold dark:text-white">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            {
              title: "Asset Tracking",
              description: "Keep track of all your assets in real-time.",
            },
            {
              title: "User Management",
              description: "Assign assets to employees seamlessly.",
            },
            {
              title: "Reports & Insights",
              description: "Generate detailed reports on asset usage.",
            },
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-gray-200 dark:bg-gray-800 dark:text-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
