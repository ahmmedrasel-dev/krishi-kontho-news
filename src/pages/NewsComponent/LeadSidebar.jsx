import { FaVideo } from "react-icons/fa";
import VideoPlayer from "./VideoPlayer";

const LeadSidebar = () => {
  const videos = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      url: "https://youtu.be/yVYQeDhAQWk?si=10DtagHpwq2OR13m",
    },
    {
      title: "Adipisicing elit. Veniam, quas.",
      url: "https://youtu.be/oYRw02g706M?si=N4YaFD3cSMpM_DQj",
    },
    {
      title: "Consectetur adipisicing elit. Quae?",
      url: "https://www.youtube.com/watch?v=rkpzYNB6xks",
    },
    // Add more videos as needed
  ];
  return (
    <div className="bg-white border rounded p-2">
      <h3 className="text-md font-semibold mb-4">
        <FaVideo className="inline-block" /> ভিডিও
      </h3>

      <VideoPlayer videos={videos} />
    </div>
  );
};

export default LeadSidebar;
