import "swiper/css";
import "swiper/css/navigation";

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import LeadNews from "../NewsComponent/LeadNews";
import LeadSectionBottomNews from "../NewsComponent/LeadSectionBottomNews";
import LeadSectionRightNews from "../NewsComponent/LeadSectionRightNews";
import LeadSidebar from "../NewsComponent/LeadSidebar";

const LeadSection = () => {
  const { featuredNews, leadSecNews } = useLoaderData();

  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 desktop:grid-cols-4 gap-4">
        <div className="desktop:col-span-2 px-4 desktop:px-0">
          <LeadNews leadNews={featuredNews} />

          <div className="bg-white border rounded p-2 mt-2">
            <div className="grid desktop:grid-cols-3 grid-cols-1 desktop:space-x-4 space-y-4 desktop:space-y-0">
              {leadSecNews?.slice(0, 3).map((item, index) => (
                <div
                  key={item.id}
                  className={`${index == 0 ? "" : "border-l pl-4"}`}
                >
                  <LeadSectionBottomNews leadSecNews={item} />
                </div>
              ))}
            </div>
            <div className="border-b my-4"></div>
            <div className="grid desktop:grid-cols-3 grid-cols-1 desktop:space-x-4 space-y-4 desktop:space-y-0">
              {leadSecNews?.slice(3, 6).map((item, index) => (
                <div
                  key={item?.id}
                  className={`${index == 0 ? "" : "border-l pl-4"}`}
                >
                  <LeadSectionBottomNews leadSecNews={item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 p-4 desktop:p-0">
          <LeadSectionRightNews leadSecNews={leadSecNews} />
        </div>

        <div className="grid grid-cols-1 gap-4 p-4 desktop:p-0">
          <LeadSidebar />
        </div>
      </div>
    </section>
  );
};

export default LeadSection;
