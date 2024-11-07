const videoNews = [
  {
    id: crypto.randomUUID(),
    title: "Breaking News: Market Update",
    thumbnail: "video_1.jpeg",
    videoUrl: "https://example.com/video1.mp4",
  },
  {
    id: crypto.randomUUID(),
    title: "Weather Report: Storm Alert",
    thumbnail: "video_2.jpeg",
    videoUrl: "https://example.com/video2.mp4",
  },
  {
    id: crypto.randomUUID(),
    title: "Sports Highlights: Championship Finals",
    thumbnail: "video_3.jpeg",
    videoUrl: "https://example.com/video3.mp4",
  },
  {
    id: crypto.randomUUID(),
    title: "randomUUID: Latest Gadget Releases",
    thumbnail: "video_4.jpeg",
    videoUrl: "https://example.com/video4.mp4",
  },
  {
    id: crypto.randomUUID(),
    title: "Health News: New Medical Breakthrough",
    thumbnail: "video_5.jpeg",
    videoUrl: "https://example.com/video5.mp4",
  },
  {
    id: crypto.randomUUID(),
    title: "Travel Guide: Top Destinations",
    thumbnail: "video_6.jpeg",
    videoUrl: "https://example.com/video6.mp4",
  },
  {
    id: crypto.randomUUID(),
    title: "Entertainment: Red Carpet Highlights",
    thumbnail: "video_7.jpeg",
    videoUrl: "https://example.com/video7.mp4",
  },
  {
    id: crypto.randomUUID(),
    title: "Science Update: Space Exploration",
    thumbnail: "video_8.jpeg",
    videoUrl: "https://example.com/video8.mp4",
  },
];

const news = [
  {
    id: crypto.randomUUID(),
    title: "সংস্কারের জন্য টাকার অভাব হবে না, ড. ইউনূসকে ইইউ",
    summary:
      "প্রধান উপদেষ্টা অধ্যাপক মুহাম্মদ ইউনূসের নেতৃত্বাধীন বাংলাদেশের অন্তর্বর্তীকালীন সরকারের সংস্কার উদ্যোগ এবং দুর্নীতির বিরুদ্ধে লড়াইয়ে সম্ভাব্য",
    category: "জাতীয়",
    author: "রাসেল আহমেদ",
    thumbnail: "thumbnail_1.jpeg",
    isLeadNews: true,
  },
  {
    id: crypto.randomUUID(),
    title: "২৭তম বিসিএসে বাদ পড়া ১১৩৭ জনের ভাগ্য খুলতে পারে",
    summary:
      "২৭তম বিসিএসের ১ হাজার ১৩৭ জনকে বাদ দেওয়ার মামলা আবারও শুনবেন আপিল বিভাগ। বৃহস্পতিবার (৭ নভেম্বর) সকালে প্রধান বিচারপতি ড. সৈয়দ রেফাত আহমেদের নেতৃত্বাধীন ৪ বিচারপতির আপিল বেঞ্চ ভুক্তভোগীদের রিভিউ শুনানিতে আপিলের অনুমতি দেন",
    category: "জাতীয়",
    author: "রাসেল আহমেদ",
    thumbnail: "thumbnail_2.jpeg",
    isLeadNews: false,
  },
  {
    id: crypto.randomUUID(),
    title: "স্বৈরাচারের দোসরদের ষড়যন্ত্র থেমে নেই : তারেক রহমান",
    summary:
      "অন্তর্বর্তী সরকারকে ব্যর্থ করতে স্বৈরাচারের দোসরদের ষড়যন্ত্র থেমে নেই বলে দাবি করেছেন বিএনপির ভারপ্রাপ্ত চেয়ারম্যান তারেক রহমান। তিনি বলেন, পরাজিত অপশক্তির ষড়যন্ত্র রুখে দিতে অন্তর্বর্তী সরকারের পাশাপাশি অবশ্যই বাংলাদেশের পক্ষের সকল শক্তিকে সজাগ ও সতর্ক থাকতে হবে",
    category: "রাজনীতি",
    author: "রাসেল আহমেদ",
    thumbnail: "thumbnail_3.jpeg",
    isLeadNews: false,
  },
  {
    id: crypto.randomUUID(),
    title: "সাকিব আল হাসানের ব্যাংক হিসাব জব্দ",
    summary:
      "বিশ্বসেরা অলরাউন্ডার বাংলাদেশ জাতীয় ক্রিকেট দলের সাবেক অধিনায়ক সাকিব আল হাসানের সব ব্যাংক হিসাব জব্দ করেছে বাংলাদেশ ফাইন্যান্সিয়াল ইন্টেলিজেন্স ইউনিট (বিএফআইইউ)",
    category: "জাতীয়",
    author: "রাসেল আহমেদ",
    thumbnail: "thumbnail_4.jpeg",
    isLeadNews: false,
  },
  {
    id: crypto.randomUUID(),
    title: "মুশফিকের আঙুলে চোট, দ্বিতীয় ম্যাচে অনিশ্চিত",
    summary:
      "বাংলাদেশ দলের অভিজ্ঞ ব্যাটার মুশফিকুর রহিম বাঁ হাতের আঙুলে চোট পেয়েছেন। এ কারণে তিনি আফগানিস্তানের বিপক্ষে চলমান ওয়ানডে সিরিজের আগামী শনিবার (৯ নভেম্বর) শারজায় অনুষ্ঠিতব্য দ্বিতীয় ওয়ানডে ম্যাচে খেলতে পারবেন না বলে ধারণা করা হচ্ছে।",
    category: "খেলা",
    author: "রাসেল আহমেদ",
    thumbnail: "thumbnail_5.jpeg",
    isLeadNews: false,
  },
  {
    id: crypto.randomUUID(),
    title: "সরকারি ভাতা দেওয়ার নামে ৪ বছর ধরে প্রতারণা, অতঃপর",
    summary:
      "সমাজসেবা অধিদপ্তরের বয়স্ক, প্রতিবন্ধী, বিধবাসহ বিভিন্ন ভাতা দেওয়ার নাম মোটা অঙ্কের টাকা হাতিয়ে নেওয়ার অভিযোগে এক প্রতারকচক্রকে গণধোলাইয়ের পর প্রশাসনের হাতে তুলে দিয়েছে স্থানীয় জনতা।",
    category: "সারাদেশ",
    author: "রাসেল আহমেদ",
    thumbnail: "thumbnail_6.jpeg",
    isLeadNews: false,
  },
  {
    id: crypto.randomUUID(),
    title: "মুক্তির আগেই ‘পুষ্পা-২’র মার্কিন বক্স অফিসে দাপট",
    summary:
      "পুষ্পা-দ্য রাইজ’ সিনেমাটি ২০২১ সালে মুক্তির পর দর্শকমহলে ব্যাপক সাড়া ফেলে। এরই প্রেক্ষিতে ২০২৪ সালে মুক্তি পেতে যাচ্ছে ‘পুষ্পা ২- দ্য রুল’। মুক্তির আগেই সিনেমাটি অগ্রীম বুকিংয়ে শুধু ভারতে নয় মার্কিন বক্স",
    category: "বিনোদন",
    author: "রাসেল আহমেদ",
    thumbnail: "thumbnail_7.jpeg",
    isLeadNews: false,
  },
  {
    id: crypto.randomUUID(),
    title: "বাংলাদেশ ও ভারত সেনাপ্রধানদের ভার্চুয়াল বৈঠক",
    summary:
      "বাংলাদেশের সেনাবাহিনী প্রধান জেনারেল ওয়াকার-উজ-জামানের সঙ্গে ভারতের সেনাবাহিনী প্রধান জেনারেল উপেন্দ্র দ্বিবেদীর ভার্চুয়াল বৈঠক অনুষ্ঠিত হয়েছে। যেখানে পারস্পরিক স্বার্থসংশ্লিষ্ট বিষয় নিয়ে আলোচনা হয়েছে।",
    category: "জাতীয়",
    author: "রাসেল আহমেদ",
    thumbnail: "thumbnail_8.jpeg",
    isLeadNews: false,
  },
  {
    id: crypto.randomUUID(),
    title: "ইসলামিক ফাউন্ডেশনের নতুন মহাপরিচালকের পরিচয়",
    summary:
      "ইসলামিক ফাউন্ডেশনের মহাপরিচালকের (ডিজি) দায়িত্ব পেয়েছেন বিদ্যুৎ বিভাগের অতিরিক্ত সচিব মো. রেজানুর রহমান। তিনি বিদায়ী মহাপরিচালক ড. মুহা. বশিরুল আলমের স্থলাভিষিক্ত হচ্ছেন।",
    category: "জাতীয়",
    author: "রাসেল আহমেদ",
    thumbnail: "thumbnail_9.jpeg",
    isLeadNews: false,
  },
  {
    id: crypto.randomUUID(),
    title: "তিন মাসে অন্তর্বর্তী সরকার অনেক কাজ করেছে : মির্জা ফখরুল",
    summary:
      "অন্তবর্তীকালীন সরকার তিন মাসে অনেকগুলো কাজ করেছে বলে জানিয়েছেন বিএনপির মহাসচিব মির্জা ফখরুল ইসলাম আলমগীর। তিনি আশাবাদ ব্যক্ত করে বলেন, আমরা যদি সরকারকে সহযোগিতা করি,",
    category: "রাজনীতি",
    author: "রাসেল আহমেদ",
    thumbnail: "thumbnail_10.jpeg",
    isLeadNews: false,
  },
];

const getVideo = () => {
  return videoNews;
};
const getNews = () => {
  return news;
};

export { getNews, getVideo };
