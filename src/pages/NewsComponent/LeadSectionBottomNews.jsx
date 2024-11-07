import { getUrl } from "../../utills/utility";

const LeadSectionBottomNews = ({ news }) => {
  console.log(news);
  return (
    <div>
      <img
        src={getUrl(news?.thumbnail)}
        alt="Sub Article"
        className="w-full h-24 object-cover rounded mb-2"
      />
      <h3 className="text-md font-semibold">{news?.title}</h3>
    </div>
  );
};

export default LeadSectionBottomNews;
