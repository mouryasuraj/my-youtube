import useVideoContainer from "../hooks/useVideoContainer";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  useVideoContainer(); //customHook

  return (
    <div className="w-full pt-[80px]">
      <VideoCard />
    </div>
  );
};

export default VideoContainer;
