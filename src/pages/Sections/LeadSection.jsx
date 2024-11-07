import "swiper/css";
import "swiper/css/navigation";

import { getNews } from "../../data/news";
import LeadNews from "../NewsComponent/LeadNews";
import LeadSectionBottomNews from "../NewsComponent/LeadSectionBottomNews";
import LeadSectionRightNews from "../NewsComponent/LeadSectionRightNews";
import LeadSidebar from "../NewsComponent/LeadSidebar";
const LeadSection = () => {
  const allNews = getNews();
  const leadNews = allNews.find((item) => item.isLeadNews === true);
  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 desktop:grid-cols-4 gap-4">
        <div className="desktop:col-span-2">
          <LeadNews news={leadNews} />
          <div className="bg-white border rounded p-2 mt-2">
            <div className=" grid grid-cols-3 space-x-4">
              {allNews?.slice(1, 4).map((item) => (
                <LeadSectionBottomNews key={item.id} news={item} />
              ))}
            </div>
            <div className="border-b my-6"></div>
            <div className="grid grid-cols-3 space-x-4">
              {allNews?.slice(4, 7).map((item) => (
                <LeadSectionBottomNews key={item.id} news={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="desktop:col-span-1 grid gap-4">
          <LeadSectionRightNews />
        </div>

        <div className="desktop:col-span-1 grid gap-4">
          <LeadSidebar />
        </div>
      </div>
    </section>
  );
};

export default LeadSection;
