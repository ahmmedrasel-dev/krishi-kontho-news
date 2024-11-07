import React from "react";
import { getUrl } from "../../utills/utility";

const LeadNews = ({ news }) => {
  return (
    <div className="bg-white border rounded p-2 flex space-x-4">
      <div className="w-[60%] ">
        <img
          src={getUrl(news.thumbnail)}
          alt="Main Article"
          className="w-full h-60 object-cover rounded"
        />
      </div>
      <div className="w-[40%]">
        <h2 className="text-3xl text-title-color font-semibold">
          {news.title}
        </h2>
        <p className="mt-2 text-summary-color">{news.summary}</p>
      </div>
    </div>
  );
};

export default LeadNews;
