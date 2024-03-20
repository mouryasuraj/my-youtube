import WatchVideoInfo from "./WatchVideoInfo";
import CommentsContainer from "./CommentsContainer";
import useWatchVideo from "../hooks/useWatchVideo";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
  const { channelInfo, url } = useWatchVideo();

  return (
    <div className="absolute md:px-9 px-1 py-5 w-full left-0 h-full">
      <div className="flex lg:flex-nowrap flex-wrap gap-5">
        <div className="lg:w-fit w-full">
          {/* Video */}
          <div className="lg:w-[62vw] lg:h-[35vw] w-full h-[55vw]">
            <iframe
              className="md:rounded-xl rounded-md w-full h-full"
              src={`https://www.youtube.com/embed/${url}?autoplay=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          {/* Vidoe  Info */}
          <WatchVideoInfo channelInfo={channelInfo} />
          <CommentsContainer />
        </div>
        {/* Video Suggestions */}
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchVideo;
