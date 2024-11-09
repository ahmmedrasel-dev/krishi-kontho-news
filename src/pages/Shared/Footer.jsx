import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4 py-6 border-b text-sm">
        <p className="text-center md:text-left mb-4">
          বাংলাদেশ ও বিশ্বের সকল খবর, ব্রেকিং নিউজ, লাইভ নিউজ...
        </p>
        <div className="md:flex md:justify-between text-center md:text-left">
          <div>
            <p className="font-semibold">সম্পাদক ও প্রকাশক: আশিকুর রাহমান</p>
            <p className="text-gray-500">
              ডেপুটি প্রধান সম্পাদক (অনলাইন): রাসেল আহমেদ
            </p>
            <p>কৃষি কণ্ঠ মিডিয়া লিমিটেড...</p>
          </div>
          <div>
            <p>ফোন: +880 02 5566XXXX, +880 02 5566XXXX</p>
            <p>
              ই-মেইল:{" "}
              <a
                href="mailto:news@vorbela.com"
                className="text-blue-500 hover:underline"
              >
                news@krishikontho.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="md:flex md:justify-between items-center text-center md:text-left">
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-red-600 hover:text-red-800">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* <div className="mt-4 md:mt-0">
            <p className="font-semibold">নিউজলেটার</p>
            <p>কালবেলা থেকে প্রতিদিন মেইলে আপডেট পেতে সাবস্ক্রাইব করুন।</p>
          </div> */}
          <div className="flex flex-wrap justify-center md:justify-between space-x-4 text-sm">
            <a href="#" className="hover:underline">
              কৃষি কণ্ঠ
            </a>
            <a href="#" className="hover:underline">
              গোপনীয়তা নীতি
            </a>
            <a href="#" className="hover:underline">
              শর্তাবলি
            </a>
            <a href="#" className="hover:underline">
              মহড়া প্রকাশের নীতি
            </a>
            <a href="#" className="hover:underline">
              বাংলা কনভার্টার
            </a>
            <a href="#" className="hover:underline">
              বিজ্ঞাপন
            </a>
            <a href="#" className="hover:underline">
              যোগাযোগ
            </a>
            <a href="#" className="hover:underline">
              ছুটির তালিকা
            </a>
            <a href="#" className="hover:underline">
              দিবস
            </a>
          </div>
          <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              অ্যাপ ডাউনলোড
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              আইফোন
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 text-gray-500 text-center py-2">
        <p>&copy; কৃষি কণ্ঠ ২০২8</p>
        <p>ওয়েবসাইটের কোনো লেখা, ছবি, ভিডিও অনুমতি ছাড়া ব্যবহার বেআইনি।</p>
      </div>
    </footer>
  );
};

export default Footer;
