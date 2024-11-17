import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import { React, useEffect, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlayCircle,
  FaVideo,
} from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getVideo } from "../../data/news";
import { getUrl } from "../../utills/utility";

const VideoGallerySection = () => {
  const videos = getVideo();
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
    <section className="border rounded-sm p-2 my-5">
      <div className="flex justify-between my-2">
        <h4 className="text-2xl font-semibold">
          <FaVideo className="inline-block mr-2" /> ভিডিও
        </h4>
        <Link
          to={"/"}
          className="text-2xl font-semibold hover:text-red-700 duration-300 ease-in-out"
        >
          সব ভিডিও <FiArrowRightCircle className="inline-block ml-2" />
        </Link>
      </div>
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
          breakpoints={{
            430: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          spaceBetween={20}
        >
          {videos.map((item) => (
            <SwiperSlide key={item.id}>
              <a
                key={item.id}
                href={item.videoUrl}
                className="glightbox"
                data-gallery="gallery"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={getUrl(item.thumbnail)}
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
