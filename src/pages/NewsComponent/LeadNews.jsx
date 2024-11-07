import React from "react";
import { Link } from "react-router-dom";
import { getUrl } from "../../utills/utility";

const LeadNews = ({ news }) => {
  return (
    <Link
      to={`/news/${news.id}`}
      className="bg-white border rounded p-2 flex space-x-4"
    >
      <div className="w-[60%] relative overflow-hidden h-60">
        <img
          src={getUrl(news.thumbnail)}
          alt={news.title}
          className="w-full h-60 object-cover rounded"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-150 hover:ease-in-out rounded"></div>
      </div>
      <div className="w-[40%]">
        <h2 className="text-3xl text-title-color font-semibold transition-all ease-in-out hover:text-red-700">
          {news.title}
        </h2>
        <p className="mt-2 text-summary-color">{news.summary}</p>
      </div>
    </Link>
  );
};

export default LeadNews;
