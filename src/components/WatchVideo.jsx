import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/slices/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const url = searchParams.get("v");

  const dispatch = useDispatch();
  /* eslint-disable */
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  /* eslint-enable */

  return (
    <div className="absolute md:px-10 px-2 py-5 w-full">
      <iframe
        className="rounded-xl lg:w-[1000px] lg:h-[600px] h-[220px] w-full"
        src={`https://www.youtube.com/embed/${url}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchVideo;
