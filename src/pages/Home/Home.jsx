import React from "react";
import LeadSection from "../Sections/LeadSection";
import NationalSection from "../Sections/NationalSection";
import SaradeshSection from "../Sections/SaradeshSection";
import VideoGallerySection from "../Sections/VideoGallerySection";

const Home = () => {
  return (
    <div className="container">
      <LeadSection />
      <VideoGallerySection />
      <NationalSection />
      <SaradeshSection />
    </div>
  );
};

export default Home;
