import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";

const SaradeshSection = () => {
  const { saradeshNews } = useLoaderData();
  const sectionMainNews = saradeshNews[0];
  return (
    <section className="my-5">
      <div className="grid grid-cols-1 gap-4">
        <div className="border p-2 rounded">
          <SectionTitle title="সারাদেশ" />

          <div className="grid grid-col-1 desktop:grid-cols-4 space-x-4">
            <div className="grid grid-cols-1">
              <Link to={`/news/${sectionMainNews?.slug}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={sectionMainNews?.thumbnail}
                    alt={sectionMainNews?.title}
                    className="w-full object-cover rounded"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-150 hover:ease-in-out rounded"></div>
                </div>

                <h2 className="text-xl text-title-color font-semibold my-4 hover:text-red-700 ease-in-out duration-300">
                  {sectionMainNews?.title}
                </h2>

                <p className="text-summary-color">{sectionMainNews?.summary}</p>
              </Link>
            </div>
            <div className="grid grid-cols-1 border-l border-gray-300 pl-4">
              {saradeshNews.slice(1, 5).map((item, index) => (
                <Link to={`/news/${item?.slug}`} key={item.id}>
                  <div
                    className={`${index === 0 ? "" : "border-b"} my-3`}
                  ></div>
                  <div className="flex space-x-3">
                    <img
                      src={item?.thumbnail}
                      alt="Sub Article"
                      className="w-24 object-cover rounded mb-2"
                    />
                    <h3 className="text-md font-semibold hover:text-red-700 ease-in-out duration-300">
                      {item?.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-1 border-l border-gray-300 pl-4">
              {saradeshNews.slice(6, 11).map((item, index) => (
                <Link to={`/news/${item?.slug}`} key={item.id}>
                  <div
                    className={`${index === 0 ? "" : "border-b"} my-3`}
                  ></div>
                  <div className="flex space-x-3">
                    <img
                      src={item?.thumbnail}
                      alt="Sub Article"
                      className="w-24 object-cover rounded mb-2"
                    />
                    <h3 className="text-md font-semibold hover:text-red-700 ease-in-out duration-300">
                      {item?.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-1 border-l border-gray-300 pl-4">
              {saradeshNews.slice(6, 11).map((item, index) => (
                <Link to={`/news/${item?.slug}`} key={item.id}>
                  <div
                    className={`${index === 0 ? "" : "border-b"} my-3`}
                  ></div>
                  <div className="flex space-x-3">
                    <img
                      src={item?.thumbnail}
                      alt="Sub Article"
                      className="w-24 object-cover rounded mb-2"
                    />
                    <h3 className="text-md font-semibold hover:text-red-700 ease-in-out duration-300">
                      {item?.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaradeshSection;
