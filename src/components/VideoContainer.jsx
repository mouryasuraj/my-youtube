import { Link } from "react-router-dom";
import useVideoContainer from "../hooks/useVideoContainer";
import HomePageShimmer from "./HomePageShimmer";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  useVideoContainer(); //customHook
  const homePageVideos = useSelector((store) => store.videos.homePageVideos);
  if (!homePageVideos) return <HomePageShimmer />;

  return (
    <div className="w-full pt-[80px] pb-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-5 gap-x-3 md:gap-y-5 gap-y-7">
        {homePageVideos.map((video) => (
          <Link
            to={`/${video.snippet.channelId}/watch?v=${video.id}`}
            key={video.id}
          >
            <VideoCard video={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
