import PropTypes from "prop-types";
import calculateViews from "../utils/calculateViews";
const WatchVideoInfo = ({ channelInfo }) => {
  if (!channelInfo) return;
  console.log(channelInfo);
  const { snippet, statistics } = channelInfo;
  const { title, thumbnails } = snippet;
  const { subscriberCount } = statistics;
  const subscriber = calculateViews(subscriberCount);

  return (
    <div className="py-5 md:px-0 px-3">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <div className="flex items-center gap-3">
          <div className="w-[45px] h-[45px] cursor-pointer ">
            <img
              className="w-full h-full object-cover rounded-full"
              src={thumbnails.high.url}
              alt=""
            />
          </div>
          <div>
            <h2 className="font-semibold text-lg cursor-pointer hover:text-gray-900">
              {title}
            </h2>
            <p className="font-medium text-gray-700 text-sm">
              {subscriber} subscribers
            </p>
          </div>
          <button className="rounded-3xl bg-black text-white font-semibold px-4 py-2 hover:opacity-90 ml-5">
            Subscribe
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center px-4 py-2 bg-[#F2F2F2] rounded-3xl">
            <div className="flex items-center gap-2 cursor-pointer">
              <i className="fa-regular fa-thumbs-up text-2xl" />
              <p className="text-[15px] font-semibold">1K</p>
            </div>
            <div className="border border-gray-400 w-[20px] rotate-90 h-full"></div>
            <div className="cursor-pointer">
              <i className="fa-regular fa-thumbs-down text-2xl" />
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#F2F2F2] rounded-3xl cursor-pointer">
            <i className="fa-solid fa-share text-2xl" />
            <p className="text-[15px] font-semibold">Share</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#F2F2F2] rounded-3xl cursor-pointer">
            <i className="fa-solid fa-arrow-down text-2xl" />
            <p className="text-[15px] font-semibold">Downlaod</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideoInfo;

WatchVideoInfo.propTypes = {
  channelInfo: PropTypes.object.isRequired,
};
