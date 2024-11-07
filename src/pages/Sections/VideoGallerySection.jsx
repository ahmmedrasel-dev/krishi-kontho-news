import { React, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { getVideo } from "../../data/news";
import Video from "../NewsComponent/Video";

const VideoGallerySection = () => {
  const videos = getVideo();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="border rounded-sm p-2 my-5">
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
          slidesPerView={4}
          spaceBetween={20}
        >
          {videos.map((item) => (
            <SwiperSlide key={item.id}>
              <Video video={item} key={item.id} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          ref={prevRef}
          className="absolute top-[70px] left-0 transform z-10 p-2 text-white bg-slate-700 rounded-full"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          ref={nextRef}
          className="absolute top-[70px] right-0 transform z-10 p-2 text-white bg-slate-700 rounded-full"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default VideoGallerySection;
