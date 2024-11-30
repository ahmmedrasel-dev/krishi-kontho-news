import { useState } from "react";
import { Link } from "react-router-dom";
import { convertNumberToBangla } from "../../utills/utility";

const SingleNewsRightSide = ({ latestNews }) => {
  const [isLatest, setIsLatest] = useState(true);

  return (
    <div>
      <ul className="flex gap-6 border-b border-gray-300 px-2">
        <li
          className={`${
            isLatest ? "selectedLatest" : ""
          } font-semibold cursor-pointer`}
          onClick={() => setIsLatest(true)}
        >
          সর্বশেষ নিউজ
        </li>
        <li
          className={`${
            !isLatest ? "selectedPopular" : ""
          } font-semibold cursor-pointer`}
          onClick={() => setIsLatest(false)}
        >
          জনপ্রিয় নিউজ
        </li>
      </ul>

      {isLatest ? (
        <div>
          {latestNews?.map((item, index) => (
            <Link to={`/news/${item?.slug}`} key={item?.id}>
              {index !== 0 && <div className="border-b my-3"></div>}
              <div className="flex my-4 relative">
                <h2 className="ml-12">
                  <span className="w-[30px] h-[30px] absolute left-0 top-1 rounded-full bg-slate-100 flex mr-3 justify-center items-center">
                    {convertNumberToBangla(index + 1)}
                  </span>{" "}
                  {item?.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div>
          {latestNews?.map((item, index) => (
            <Link key={item?.id} to={`/news/${item?.slug}`}>
              {index !== 0 && <div className="border-b my-3"></div>}
              <div className="flex my-4 relative">
                <h2 className="ml-12">
                  <span className="w-[30px] h-[30px] absolute left-0 top-1 rounded-full bg-slate-100 flex mr-3 justify-center items-center">
                    {convertNumberToBangla(index + 1)}
                  </span>{" "}
                  {item?.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleNewsRightSide;
