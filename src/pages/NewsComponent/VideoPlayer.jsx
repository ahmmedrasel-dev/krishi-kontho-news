import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReactPlayer from "react-player";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const VideoPlayer = ({ videos }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="relative">
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation]}
        slidesPerView={1}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div>
              <ReactPlayer url={video.url} height={400} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={prevRef}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 text-white bg-slate-700 rounded-full"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 text-white bg-slate-700 rounded-full"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default VideoPlayer;
