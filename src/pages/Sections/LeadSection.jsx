import "swiper/css";
import "swiper/css/navigation";

import LeadNews from "../NewsComponent/LeadNews";
import LeadSectionBottomNews from "../NewsComponent/LeadSectionBottomNews";
import LeadSectionRightNews from "../NewsComponent/LeadSectionRightNews";
import LeadSidebar from "../NewsComponent/LeadSidebar";
const LeadSection = () => {
  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 desktop:grid-cols-4 gap-4">
        <div className="desktop:col-span-2">
          <LeadNews />
          <div className="bg-white border rounded p-2 mt-2">
            <div className=" grid grid-cols-3 space-x-4">
              <LeadSectionBottomNews />
              <LeadSectionBottomNews />
              <LeadSectionBottomNews />
            </div>
            <div className="border-b my-6"></div>
            <div className=" grid grid-cols-3 space-x-4">
              <LeadSectionBottomNews />
              <LeadSectionBottomNews />
              <LeadSectionBottomNews />
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
