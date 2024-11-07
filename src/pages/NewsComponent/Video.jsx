import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getUrl } from "../../utills/utility";

const Video = ({ video }) => {
  return (
    <Link to={`video/news/${video.id}`} className="">
      <div className="relative overflow-hidden">
        <img
          src={getUrl(video.thumbnail)}
          alt={video.title}
          className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
        />
        <FaPlayCircle className="absolute inset-0 m-auto text-white text-4xl opacity-80 hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h4 className="text-xl text-title-color font-semibold mt-2">
        {video.title}
      </h4>
    </Link>
  );
};

export default Video;
