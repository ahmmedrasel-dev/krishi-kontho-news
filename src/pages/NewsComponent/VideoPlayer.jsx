import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import React, { useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaPlayCircle } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { getUrl } from "../../utills/utility";
import { useLoaderData } from "react-router-dom";
const VideoPlayer = () => {
  const { videoNews } = useLoaderData();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });

    return () => {
      lightbox.destroy();
    };
  }, []);
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
        {videoNews.map((item, index) => (
          <SwiperSlide key={index}>
            <a
              key={item.id}
              href={item.youtube_link}
              className="glightbox"
              data-gallery="gallery"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
                />
                <FaPlayCircle className="absolute inset-0 m-auto text-white text-4xl opacity-80 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h4 className="text-xl text-title-color font-semibold mt-2">
                {item.title}
              </h4>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={prevRef}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 text-white bg-slate-500 rounded-full"
      >
        <FaChevronLeft size={18} />
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 text-white bg-slate-500 rounded-full"
      >
        <FaChevronRight size={18} />
      </button>
    </div>
  );
};

export default VideoPlayer;
