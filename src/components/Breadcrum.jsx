import React from "react";
import { FaCalendarTimes, FaHome, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { convertDateTimeToBangla } from "../utills/utility";

const Breadcrum = ({ news }) => {
  return (
    <>
      <div className="flex items-center gap-2 mb-2">
        <FaHome className="text-xl inline-block" /> /{" "}
        <Link to="news/category" className="text-lg text-red-700 font-semibold">
          {news?.categories?.map((category, index) => (
            <span key={index}>
              {category.name}
              {index < news.categories.length - 1 && ", "}
            </span>
          )) || "No Categories"}
        </Link>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <FaUser className="text-md inline-block" />
        <Link to="news/category" className="">
          {news?.author?.name}
        </Link>
      </div>
      <div className="flex gap-2">
        <FaCalendarTimes className="text-md inline-block" />
        <Link to="news/category" className="">
          প্রকাশ : {convertDateTimeToBangla(news?.created_at)}
        </Link>
      </div>
    </>
  );
};

export default Breadcrum;
