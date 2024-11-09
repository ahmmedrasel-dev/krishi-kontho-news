import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex justify-between my-2 border-b-2 border-black">
      <h4 className="text-2xl font-semibold">{title}</h4>
      <Link
        to={"/"}
        className="text-2xl font-semibold hover:text-red-700 duration-300 ease-in-out"
      >
        সব নিউজ <FiArrowRightCircle className="inline-block ml-2" />
      </Link>
    </div>
  );
};

export default SectionTitle;
