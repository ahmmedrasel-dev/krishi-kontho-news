import React from "react";
import { Link } from "react-router-dom";
import ashi from "../../assets/images/asif_nazrul.jpeg";
import SectionTitle from "../../components/SectionTitle";
import { getNews } from "../../data/news";
import { getUrl } from "../../utills/utility";

const NationalSection = () => {
  const allNews = getNews();
  const sectionMainNews = allNews[9];
  return (
    <section className="my-5">
      <div className="grid grid-cols-1 desktop:grid-cols-4 gap-4">
        <div className="col-span-3 border p-2 rounded">
          <SectionTitle title={"জাতীয়"} />

          <div className="grid grid-col-1 desktop:grid-cols-3 space-x-4">
            <div className="grid grid-cols-1">
              <Link to="/news/12e3123">
                <div className="relative overflow-hidden">
                  <img
                    src={ashi}
                    alt="asif nazrul"
                    className="w-full object-cover rounded"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-150 hover:ease-in-out rounded"></div>
                </div>

                <h2 className="text-xl text-title-color font-semibold my-4 hover:text-red-700 ease-in-out duration-300">
                  আইন উপদেষ্টাকে হেনস্তায় দায়ীদের বিচার দাবি বৈষম্যবিরোধী ছাত্র
                  আন্দোলনের
                </h2>

                <p className="text-summary-color">
                  অন্তর্বর্তীকালীন সরকারের আইন, বিচার ও সংসদ বিষয়ক উপদেষ্টা
                  অধ্যাপক ড. আসিফ নজরুলকে সুইজারল্যান্ডে হেনস্তার ঘটনায় দায়ী
                  ব্যক্তিদের বিরুদ্ধে
                </p>
              </Link>
            </div>
            <div className="grid grid-cols-1 border-l border-gray-300 pl-4">
              {allNews.slice(5, 9).map((item, index) => (
                <Link to={`/news/${item.id}`} key={item.id}>
                  <div
                    className={`${index === 0 ? "" : "border-b"} my-3`}
                  ></div>
                  <div className="flex space-x-3">
                    <img
                      src={getUrl(item.thumbnail)}
                      alt="Sub Article"
                      className="w-24 object-cover rounded mb-2"
                    />
                    <h3 className="text-md font-semibold hover:text-red-700 ease-in-out duration-300">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-1 border-l border-gray-300 pl-4">
              {allNews.slice(5, 9).map((item, index) => (
                <Link to={`/news/${item.id}`} key={item.id}>
                  <div
                    className={`${index === 0 ? "" : "border-b"} my-3`}
                  ></div>
                  <div className="flex space-x-3">
                    <img
                      src={getUrl(item.thumbnail)}
                      alt="Sub Article"
                      className="w-24 object-cover rounded mb-2"
                    />
                    <h3 className="text-md font-semibold hover:text-red-700 ease-in-out duration-300">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border p-2 rounded-sm">
          <h4 className="text-xl font-semibold mb-4">আমার এলাকার সংবাদ</h4>

          <div class=" p-5 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
            <form class="space-y-4">
              <select class="w-full p-3 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">বিভাগ</option>
              </select>
              <select class="w-full p-3 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">জেলা</option>
              </select>
              <select class="w-full p-3 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">উপজেলা</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationalSection;
