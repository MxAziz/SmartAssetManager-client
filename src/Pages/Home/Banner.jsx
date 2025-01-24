import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// CSS: Tailwind + DaisyUI
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gray-100 overflow-hidden">
      <Slider {...settings} className="">
        {/* Slider 1 */}
        <div className="relative">
          <img
            src="https://johpartners.com/wp-content/uploads/2024/10/Real-Estate-Asset-Manager-Do-JOH-Partners.webp"
            alt="HR Manager"
            className="w-full max-h-screen object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
            <h2 className="text-4xl text-white font-bold mb-4">
              Join as HR Manager
            </h2>
            <Link
              to="/joinHr"
              className="btn px-6 font-bold text-lg bg-[#4d2745] text-white hover:bg-transparent"
            >
              Join Now
            </Link>
          </div>
        </div>

        {/* Slider 2 */}
        <div className="relative">
          <img
            src="https://cdn.prod.website-files.com/5f60304e4c3571268ae07a7d/650346397c2f3958e5953932_what%20is%20an%20it%20asset%20manager4.webp"
            alt="Employee"
            className="w-full max-h-screen object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
            <h2 className="text-4xl text-white font-bold mb-4">
              Join as Employee
            </h2>
            <Link
              to="/joinEmployee"
              className="btn px-6 font-bold text-lg bg-[#4d2745] text-white hover:bg-transparent"
            >
              Join Now
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;