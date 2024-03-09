import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, toggleMenu } from "../utils/slices/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const url = searchParams.get("v");

  const dispatch = useDispatch();
  /* eslint-disable */
  useEffect(() => {
    dispatch(closeMenu());
    return () => dispatch(toggleMenu(true));
  }, []);
  /* eslint-enable */

  return (
    <div className="absolute md:px-5 px-1 py-5 w-full">
      <div className="flex flex-wrap gap-5">
        <div className="lg:w-fit w-full">
          {/* Video */}
          <div className="lg:w-[63vw] lg:h-[35vw] w-full h-[55vw]">
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
          <p>Video Info</p>
        </div>
        {/* Video Suggestions */}
        <div>Suggestion</div>
      </div>
    </div>
  );
};

export default WatchVideo;
