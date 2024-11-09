import React from "react";
import { Link } from "react-router-dom";
import { getUrl } from "../../utills/utility";

const LeadNews = ({ news }) => {
  return (
    <div className="bg-white border rounded p-2">
      <Link
        to={`/news/${news.id}`}
        className="flex-row desktop:space-x-4 desktop:flex"
      >
        <div className="desktop:w-[60%] w-full relative overflow-hidden desktop:h-60">
          <img
            src={getUrl(news.thumbnail)}
            alt={news.title}
            className="w-full h-60 object-cover rounded"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-150 hover:ease-in-out rounded"></div>
        </div>
        <div className="desktop:w-[40%] w-full">
          <h2 className="text-3xl text-title-color font-semibold transition-all ease-in-out hover:text-red-700">
            {news.title}
          </h2>
          <p className="mt-2 text-summary-color">{news.summary}</p>
        </div>
      </Link>
    </div>
  );
};

export default LeadNews;
