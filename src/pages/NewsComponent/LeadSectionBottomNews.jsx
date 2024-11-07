import { Link } from "react-router-dom";
import { getUrl } from "../../utills/utility";

const LeadSectionBottomNews = ({ news }) => {
  return (
    <Link to={`news/${news?.id}`} className="relative overflow-hidden">
      <img
        src={getUrl(news?.thumbnail)}
        alt={news?.title}
        className="w-full h-24 object-cover rounded mb-2 transform hover:scale-105 ease-in-out duration-300"
      />
      <h3 className="text-md font-semibold hover:text-red-700 ease-in-out duration-300">
        {news?.title}
      </h3>
    </Link>
  );
};

export default LeadSectionBottomNews;
