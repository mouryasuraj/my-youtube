import useVideoCard from "../hooks/useVideoCard";
import PropTypes from "prop-types";

const VideoCard = ({ video }) => {
  const {
    id,
    thumbnailUrl,
    title,
    channelTitle,
    formattedDate,
    formattedViews,
    formattedDuration,
  } = useVideoCard(video);

  return (
    <div
      key={id}
      className="flex flex-col gap-3 cursor-pointer md:pb-4 rounded-lg active:bg-gray-200 transition-all duration-200"
    >
      <div className="relative">
        <img
          className="w-full rounded-xl"
          src={thumbnailUrl}
          alt={title + " Thumbnail"}
        />
        <div className="absolute px-1 py-[2px] bg-black bottom-1 right-1 md:text-md font-bold tracking-wider text-sm text-white rounded-md bg-opacity-80">
          {formattedDuration}
        </div>
      </div>
      <div className="flex w-full sm:gap-2 relative">
        <div className="w-[50px]">
          <img
            className="w-[40px] h-[40px] object-cover rounded-full "
            src={thumbnailUrl}
            alt="profile"
          />
        </div>
        <div className="w-[80%] mt-[-2px] pr-5">
          <p className="font-bold line-clamp-2 mb-1">{title}</p>
          <p className="text-gray-500 hover:text-gray-800 font-semibold w-fit">
            {channelTitle}
          </p>
          <div className="flex gap-[6px] items-center">
            <p className="text-gray-500 ">{formattedViews} views</p>
            <i className="fa-solid fa-circle text-gray-500 text-[4px]"></i>
            <p className="text-gray-500 ">{formattedDate}</p>
          </div>
        </div>
        <i className="fa-solid fa-ellipsis-v absolute top-0 right-2 text-xl"></i>
      </div>
    </div>
  );
};

export default VideoCard;

VideoCard.propTypes = {
  video: PropTypes.object.isRequired,
};
