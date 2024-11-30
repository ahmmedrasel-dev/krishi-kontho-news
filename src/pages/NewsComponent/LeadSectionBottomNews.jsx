import { Link } from "react-router-dom";

const LeadSectionBottomNews = ({ leadSecNews }) => {
  return (
    <Link to={`news/${leadSecNews?.slug}`} className="relative overflow-hidden">
      <img
        src={leadSecNews?.thumbnail}
        alt={leadSecNews?.title}
        className="w-full desktop:h-24 object-cover rounded mb-2 transform hover:scale-105 ease-in-out duration-300"
      />
      <h3 className="text-md font-semibold hover:text-red-700 ease-in-out duration-300">
        {leadSecNews?.title.slice(0, 45)}
      </h3>
    </Link>
  );
};

export default LeadSectionBottomNews;
