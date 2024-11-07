import { getNews } from "../../data/news";
import { getUrl } from "../../utills/utility";

const LeadSectionRightNews = () => {
  const allNews = getNews();
  const sectionMainNews = allNews[8];
  return (
    <div className="bg-white border rounded p-2">
      <div>
        <img
          src={getUrl(sectionMainNews.thumbnail)}
          alt="Sub Article"
          className="w-full object-cover rounded mb-2"
        />
        <h3 className="text-md font-semibold">{sectionMainNews.title}</h3>
      </div>

      {allNews.slice(5, 10).map((item) => (
        <div>
          <div className="border-b my-3"></div>
          <div className="flex space-x-3">
            <img
              src={getUrl(item.thumbnail)}
              alt="Sub Article"
              className="w-24 object-cover rounded mb-2"
            />
            <h3 className="text-md font-semibold">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeadSectionRightNews;
