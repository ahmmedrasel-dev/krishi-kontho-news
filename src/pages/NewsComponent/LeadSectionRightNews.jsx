import { Link } from "react-router-dom";
import { getNews } from "../../data/news";
import { getUrl } from "../../utills/utility";

const LeadSectionRightNews = () => {
  const allNews = getNews();
  const sectionMainNews = allNews[9];
  return (
    <div className="bg-white border rounded p-2">
      <Link to={`news/${sectionMainNews.id}`} className="flex flex-col gap-2">
        <div className="relative overflow-hidden h-[160px] rounded">
          <img
            src={getUrl(sectionMainNews.thumbnail)}
            alt="Sub Article"
            className="object-cover rounded mb-2 "
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-150 hover:ease-in-out rounded"></div>
        </div>
        <h3 className="text-md font-semibold hover:text-red-700 ease-in-out duration-300">
          {sectionMainNews.title}
        </h3>
      </Link>

      {allNews.slice(5, 10).map((item) => (
        <Link to={`/news/${item.id}`} key={item.id}>
          <div className="border-b my-3"></div>
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
  );
};

export default LeadSectionRightNews;
