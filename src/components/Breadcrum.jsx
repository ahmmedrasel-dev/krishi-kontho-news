import React from "react";
import { FaCalendarTimes, FaHome, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Breadcrum = () => {
  return (
    <>
      <div className="flex items-center gap-2 mb-2">
        <FaHome className="text-xl inline-block" /> /{" "}
        <Link to="news/category" className="text-lg text-red-700 font-semibold">
          জাতীয়
        </Link>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <FaUser className="text-md inline-block" />
        <Link to="news/category" className="">
          কৃষি কন্ঠ প্রতিবেদক
        </Link>
      </div>
      <div className="flex gap-2">
        <FaCalendarTimes className="text-md inline-block" />
        <Link to="news/category" className="">
          প্রকাশ : ১০ নভেম্বর ২০২৪, ০৮:০১ পিএম
        </Link>
      </div>
    </>
  );
};

export default Breadcrum;
