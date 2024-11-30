import React from "react";
import { Link } from "react-router-dom";

const LeadNews = ({ leadNews }) => {
  return (
    <div className="bg-white border rounded p-2">
      <Link
        to={`/news/${leadNews?.slug}`}
        className="flex-row desktop:space-x-4 desktop:flex"
      >
        <div className="desktop:w-[60%] w-full relative overflow-hidden desktop:h-60">
          <img
            src={leadNews?.thumbnail}
            alt={leadNews?.title}
            className="w-full h-60 object-cover rounded"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-150 hover:ease-in-out rounded"></div>
        </div>
        <div className="desktop:w-[40%] w-full">
          <h2 className="text-3xl text-title-color font-semibold transition-all ease-in-out hover:text-red-700">
            {`${leadNews?.title.slice(0, 55)} ...`}
          </h2>
          <p className="mt-2 text-summary-color">
            {`${leadNews?.summary?.slice(0, 140)}...`}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default LeadNews;
