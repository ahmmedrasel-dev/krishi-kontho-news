import { CopyToClipboard } from "react-copy-to-clipboard";
import { Helmet } from "react-helmet-async";
import { FaCaretRight, FaCopy } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
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
import SingleNewsRightSide from "./SingleNewsRightSide";

const SingleNews = () => {
  const { singleNews, latestNews } = useLoaderData();
  const relatedNews = latestNews.filter(
    (item) =>
      item.categories[0].id === singleNews.categories[0].id &&
      item.id !== singleNews.id
  );
  const filterLatest = latestNews.filter((item) => item.id !== singleNews.id);

  return (
    <section className="container my-4">
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{singleNews.title}</title>
        <meta
          name="description"
          content={singleNews.summary || singleNews.content.slice(0, 150)}
        />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content={singleNews.title} />
        <meta
          property="og:description"
          content={singleNews.summary || singleNews.content.slice(0, 150)}
        />
        <meta property="og:image" content={singleNews.thumbnail} />
        <meta
          property="og:url"
          content={`https://krishikantho.com/news/${singleNews.slug}`}
        />
        <meta property="og:type" content="article" />

        {/* Twitter Meta Tags (Optional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={singleNews.title} />
        <meta
          name="twitter:description"
          content={singleNews.summary || singleNews.content.slice(0, 150)}
        />
        <meta name="twitter:image" content={singleNews.thumbnail} />
      </Helmet>
      <div className="grid desktop:grid-cols-5 grid-cols-1 space-x-3">
        <div>
          <div className="mb-4 ml-3 desktop:ml-0">
            <Breadcrum news={singleNews} />
          </div>
          <div className="border-y py-4 mb-4 hidden desktop:block">
            <h3 className="text-lg text-title-color font-semibold">
              <FaCaretRight className="inline-block" /> এ সম্পর্কিত আরও খবর
            </h3>
          </div>
          {/* Category News */}
          <div className="hidden desktop:grid grid-cols-1 border rounded p-2">
            {relatedNews.slice(0, 5).map((item, index) => (
              <Link to={`/news/${item?.slug}`} key={item?.id}>
                <div className={`${index === 0 ? "" : "border-b"} my-3`}></div>
                <div className="flex space-x-3">
                  <img
                    src={item?.thumbnail}
                    alt={item?.title}
                    className="w-24 object-cover rounded mb-2"
                  />
                  <h3 className="text-md font-semibold hover:text-red-700 ease-in-out duration-300">
                    {item?.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-3">
          <h1 className="text-3xl font-semibold text-title-color">
            {singleNews?.title}
          </h1>

          <div className="flex space-x-4 mt-4">
            {/* Facebook Share */}
            <FacebookShareButton
              url={singleNews?.slug}
              quote={singleNews?.title}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            {/* Twitter (X) Share */}
            <TwitterShareButton
              url={singleNews?.slug}
              title={singleNews?.title}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            {/* LinkedIn Share */}
            <LinkedinShareButton url={singleNews?.slug}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>

            {/* WhatsApp Share */}
            <WhatsappShareButton
              url={singleNews?.slug}
              title={singleNews?.title}
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            {/* Copy Link */}
            <CopyToClipboard text={singleNews?.slug}>
              <button className="p-2 bg-gray-200 rounded-full">
                <FaCopy />
              </button>
            </CopyToClipboard>
          </div>

          <div className="my-8">
            <img src={singleNews?.thumbnail} alt="" />
          </div>

          <div
            className="my-4"
            dangerouslySetInnerHTML={{ __html: singleNews?.content }}
          ></div>
        </div>

        {/* RIght Sidebar */}
        <div className="grid grid-cols-1 border p-2 rounded">
          <SingleNewsRightSide latestNews={filterLatest} />
        </div>
      </div>
    </section>
  );
};

export default SingleNews;
