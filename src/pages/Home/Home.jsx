import React from "react";
import LeadSection from "../Sections/LeadSection";
import NationalSection from "../Sections/NationalSection";
import VideoGallerySection from "../Sections/VideoGallerySection";

const Home = () => {
  return (
    <div className="container">
      <LeadSection />
      <VideoGallerySection />
      <NationalSection />
    </div>
  );
};

export default Home;
