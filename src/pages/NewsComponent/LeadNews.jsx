import React from "react";
import mainNews from "../../assets/images/dr_unos.jpeg";

const LeadNews = () => {
  return (
    <div className="bg-white border rounded p-2 flex space-x-4">
      <div className="w-[60%] ">
        <img
          src={mainNews}
          alt="Main Article"
          className="w-full h-60 object-cover rounded"
        />
      </div>
      <div className="w-[40%]">
        <h2 className="text-3xl text-title-color font-semibold">
          সংস্কারের জন্য টাকার অভাব হবে না, ড. ইউনূসকে ইইউ
        </h2>
        <p className="mt-2 text-summary-color">
          প্রধান উপদেষ্টা অধ্যাপক মুহাম্মদ ইউনূসের নেতৃত্বাধীন বাংলাদেশের
          অন্তর্বর্তীকালীন সরকারের সংস্কার উদ্যোগ এবং দুর্নীতির বিরুদ্ধে
          লড়াইয়ে সম্ভাব্য
        </p>
      </div>
    </div>
  );
};

export default LeadNews;
