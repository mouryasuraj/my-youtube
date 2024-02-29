import { useEffect } from "react";
import { YOUTBE_API_URL } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const fetchPopularVideos = async () => {
    const data = await fetch(YOUTBE_API_URL);
    const json = await data.json();
    console.log(json);
  };
  /* eslint-disable */
  useEffect(() => {
    fetchPopularVideos();
  }, []);
  /* eslint-enable */
  return (
    <div className="w-full px-4">
      <VideoCard />
    </div>
  );
};

export default VideoContainer;
