import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCaretRight, FaCopy } from "react-icons/fa";
import { Link } from "react-router-dom";
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
import somabes from "../../assets/images/somabes.jpeg";
import Breadcrum from "../../components/Breadcrum";
import { getNews } from "../../data/news";
import { getUrl } from "../../utills/utility";

const SingleNews = () => {
  const allNews = getNews();
  let url = "";
  let title = "";
  return (
    <section className="container my-4">
      <div className="grid grid-cols-5 space-x-3">
        <div className="">
          <div className="mb-4">
            <Breadcrum />
          </div>
          <div className="border-y py-4 mb-4">
            <h3 className="text-lg text-title-color font-semibold">
              <FaCaretRight className="inline-block" /> এ সম্পর্কিত আরও খবর
            </h3>
          </div>

          <div className="grid grid-cols-1 border rounded p-2">
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
            জুলাই গণহত্যার দ্রুত বিচার কার্যকরের দাবি ছাত্রশিবিবের
          </h1>

          <div className="flex space-x-4 mt-4">
            {/* Facebook Share */}
            <FacebookShareButton url={url} quote={title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            {/* Twitter (X) Share */}
            <TwitterShareButton url={url} title={title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            {/* LinkedIn Share */}
            <LinkedinShareButton url={url}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>

            {/* WhatsApp Share */}
            <WhatsappShareButton url={url} title={title}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            {/* Copy Link */}
            <CopyToClipboard text={url}>
              <button className="p-2 bg-gray-200 rounded-full">
                <FaCopy />
              </button>
            </CopyToClipboard>
          </div>

          <div className="my-8">
            <img src={somabes} alt="" />
          </div>

          <div className="my-4">
            <p>
              জুলাইয়ের গণহত্যার দ্রুত বিচার কার্যকরের লক্ষ্যে স্পষ্ট রূপরেখা
              প্রণয়নের দাবি জানিয়েছেন বাংলাদেশ ইসলামী ছাত্রশিবিরের কেন্দ্রীয়
              সভাপতি মঞ্জুরুল ইসলাম।
            </p>
            <p>
              রোববার (১০ নভেম্বর) রাজধানীর শাহবাগে ‘ছাত্রশিবির ঢাকা মহানগর
              কর্তৃক আয়োজিত ফ্যাসীবাদ বিরোধী সমাবেশে প্রধান অতিথির বক্তব্যে
              তিনি এ দাবি উত্থাপন করেন।
            </p>
            <p>
              মঞ্জুরুল ইসলাম বলেন, অভ্যুত্থানের তিন মাস পার হলেও আওয়ামী লীগ ও
              তাদের দোসরদের ষড়যন্ত্র থেমে নেই। চব্বিশের আন্দোলনে আওয়ামী লীগ ও
              তার অঙ্গসংগঠনের সন্ত্রাসীরা যে বর্বর হামলা চালিয়েছে, তাতে হাজারো
              প্রাণ ঝরে গেছে, যা ইতিহাসে নজিরবিহীন। রংপুরের শহীদ আবু সাঈদ, ঢাকার
              শহীদ মুগ্ধসহ অসংখ্য ছাত্রজনতা ও ছাত্রশিবির কর্মীকে শহীদ করা
              হয়েছে। এই গণহত্যায় রাষ্ট্রের সকল শক্তি প্রয়োগ করে ছাত্রজনতার
              ওপর নিপীড়ন চালানো হয়েছে।
            </p>
            <p>
              শিবির সভাপতি বলেন, তাদের পরিকল্পিত ষড়যন্ত্রের কারণে জাতি চরম
              ক্ষতির সম্মুখীন হয়েছে এবং এখনো তারা অস্থিতিশীলতা সৃষ্টি করার
              চেষ্টা করছে। কিন্তু দেশের জনগণ তাদের আর বরদাশত করবে না। আমরা দাবি
              করছি, চব্বিশে যারা এই গণহত্যার সঙ্গে জড়িত তাদের দ্রুত বিচারের
              আওতায় এনে বাংলার মাটিতে বিচার করা হবে।
            </p>
            <p>
              তিনি আরও বলেন, শিক্ষার্থীরা যে স্বপ্ন ও আকাঙ্ক্ষা নিয়ে আন্দোলনে
              ঝাঁপিয়ে পড়েছিল তা তখনই পূর্ণ হবে, যখন এই হত্যাযজ্ঞের নায়কদের
              বিচারের মুখোমুখি করা হবে। আমরা দেশের বিচারব্যবস্থা ও সামগ্রিক
              বিশৃঙ্খলা সৃষ্টিকারীদেরও বিচার দাবি করছি।
            </p>
            <p>
              সমাবেশে অন্যদের মধ্যে আরও উপস্থিত ছিলেন- ছাত্রশিবিরের সাবেক
              কেন্দ্রীয় সভাপতি দেলোয়ার হোসেন, ছাত্রশিবিরের কেন্দ্রীয় দপ্তর
              সম্পাদক নুরুল ইসলামসহ বিভিন্ন রাজনৈতিক ও ছাত্রসংগঠনের নেতাকর্মীরা।
            </p>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi porro,
          impedit et nobis expedita rem. Fuga molestias praesentium, ab
          voluptatem veniam qui, culpa illum sed optio quae impedit nisi, labore
          cupiditate aliquid nesciunt quis. Laborum veritatis ducimus
          voluptates, unde nisi, impedit eum ex reprehenderit voluptatum enim
          ut. Nesciunt nobis laudantium suscipit dolorum, est architecto nihil
          quis rerum. Quasi, ipsa adipisci. Laudantium doloremque odio libero
          ducimus, officia, debitis itaque magnam repudiandae molestias nam
          placeat quaerat, deleniti adipisci? Ut voluptatibus impedit sapiente
          minima atque fuga nisi exercitationem, magnam perferendis velit natus
          incidunt placeat facilis assumenda accusamus quibusdam doloremque
          fugiat alias eius quae?
        </div>
      </div>
    </section>
  );
};

export default SingleNews;
