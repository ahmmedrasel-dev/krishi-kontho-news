import { FaCamera, FaVideo } from "react-icons/fa";
import VideoPlayer from "./VideoPlayer";

const LeadSidebar = () => {
  return (
    <div className="bg-white border rounded p-2">
      <h3 className="text-md font-semibold mb-4">
        <FaVideo className="inline-block" /> ভিডিও
      </h3>

      <VideoPlayer />
      <div className="border-b my-4"></div>
      <h3 className="text-md font-semibold mb-4">
        <FaCamera className="inline-block" /> ফটোও গ্যালারি
      </h3>

      <VideoPlayer />
    </div>
  );
};

export default LeadSidebar;
