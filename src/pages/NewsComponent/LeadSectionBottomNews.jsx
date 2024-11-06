import thumbnail1 from "../../assets/images/thumbnail_1.jpeg";

const LeadSectionBottomNews = () => {
  return (
    <div>
      <img
        src={thumbnail1}
        alt="Sub Article"
        className="w-full h-24 object-cover rounded mb-2"
      />
      <h3 className="text-md font-semibold">
        ট্রাম্পকে অভিনন্দন জানিয়ে নেতানিয়াহুর বার্তা
      </h3>
    </div>
  );
};

export default LeadSectionBottomNews;
