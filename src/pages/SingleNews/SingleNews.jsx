import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCaretRight, FaCopy } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import Breadcrum from "../../components/Breadcrum";
import { getNews } from "../../data/news";
import { convertNumberToBangla, getUrl } from "../../utills/utility";

const SingleNews = () => {
  const [isLatest, setIsLatest] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentNews, setCurrentNews] = useState(null);

  let { id } = useParams();

  const allNews = getNews();
  useEffect(() => {
    const news = allNews?.find((item) => item.id === id);
    setCurrentNews(news);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentNews) {
    return <div>News not found!</div>;
  }

  return (
    <section className="container my-4">
      <div className="grid desktop:grid-cols-5 grid-cols-1 space-x-3">
        <div className="">
          <div className="mb-4 ml-3 desktop:ml-0">
            <Breadcrum news={currentNews} />
          </div>
          <div className="border-y py-4 mb-4 hidden desktop:block">
            <h3 className="text-lg text-title-color font-semibold">
              <FaCaretRight className="inline-block" /> এ সম্পর্কিত আরও খবর
            </h3>
          </div>
          {/* Category News */}
          <div className="hidden desktop:grid grid-cols-1 border rounded p-2">
            {allNews.slice(5, 9).map((item, index) => (
              <Link to={`/news/${item.id}`} key={item.id}>
                <div className={`${index === 0 ? "" : "border-b"} my-3`}></div>
                <div className="flex space-x-3">
                  <img
                    src={getUrl(item.thumbnail)}
                    alt="Sub Article"
                    className="w-24 object-cover rounded mb-2"
                  />
                  <h3 className="text-md font-semibold hover:text-red-700 ease-in-out duration-300">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-3">
          <h1 className="text-3xl font-semibold text-title-color">
            {currentNews?.title}
          </h1>

          <div className="flex space-x-4 mt-4">
            {/* Facebook Share */}
            <FacebookShareButton
              url={currentNews.url}
              quote={currentNews.title}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            {/* Twitter (X) Share */}
            <TwitterShareButton url={currentNews.url} title={currentNews.title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            {/* LinkedIn Share */}
            <LinkedinShareButton url={currentNews.url}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>

            {/* WhatsApp Share */}
            <WhatsappShareButton
              url={currentNews.url}
              title={currentNews.title}
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            {/* Copy Link */}
            <CopyToClipboard text={currentNews.url}>
              <button className="p-2 bg-gray-200 rounded-full">
                <FaCopy />
              </button>
            </CopyToClipboard>
          </div>

          <div className="my-8">
            <img src={getUrl(currentNews?.thumbnail)} alt="" />
          </div>

          <div
            className="my-4"
            dangerouslySetInnerHTML={{ __html: currentNews?.news }}
          ></div>
        </div>

        {/* RIght Sidebar */}
        <div className="grid grid-cols-1 border p-2 rounded">
          <div>
            <ul className="flex gap-6 border-b border-gray-300 px-2">
              <li
                className={`${
                  isLatest ? "selectedLatest" : ""
                } font-semibold cursor-pointer`}
                onClick={() => setIsLatest(true)}
              >
                সর্বশেষ নিউজ
              </li>
              <li
                className={`${
                  !isLatest ? "selectedPopular" : ""
                } font-semibold cursor-pointer`}
                onClick={() => setIsLatest(false)}
              >
                জনপ্রিয় নিউজ
              </li>
            </ul>

            {isLatest ? (
              <div>
                {allNews?.map((item, index) => (
                  <Link key={item.id} to={`/news/${item.id}`}>
                    {index !== 0 && <div className="border-b my-3"></div>}
                    <div className="flex my-4 relative">
                      <h2 className="ml-12">
                        <span className="w-[30px] h-[30px] absolute left-0 top-1 rounded-full bg-slate-100 flex mr-3 justify-center items-center">
                          {convertNumberToBangla(index + 1)}
                        </span>{" "}
                        {item.title}
                      </h2>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div>
                {allNews?.map((item, index) => (
                  <Link key={item.id} to={`/news/${item.id}`}>
                    {index !== 0 && <div className="border-b my-3"></div>}
                    <div className="flex my-4 relative">
                      <h2 className="ml-12">
                        <span className="w-[30px] h-[30px] absolute left-0 top-1 rounded-full bg-slate-100 flex mr-3 justify-center items-center">
                          {convertNumberToBangla(index + 1)}
                        </span>{" "}
                        {item.title}
                      </h2>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleNews;
