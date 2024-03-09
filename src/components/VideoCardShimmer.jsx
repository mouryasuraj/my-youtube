const VideoCardShimmer = () => {
  return (
    <div className="flex flex-col gap-3 first-line:md:pb-4">
      <div className="rounded-xl bg-gray-300 h-[230px] relative overflow-hidden">
        <div className="absolute w-full h-full top-0 left bg-gradient-to-r from-transparent via-[#ebebeb] to-transparent animate-ping"></div>
      </div>
      <div className="flex gap-4">
        <div className="w-[10%] h-[40px] bg-gray-300 rounded-full"></div>
        <div className="w-[85%]">
          <div className="w-full h-[40px] bg-gray-300 rounded-lg"></div>
          <div className="flex items-center gap-5">
            <div className="w-[40%] h-6 bg-gray-300 rounded-lg my-2"></div>
            <div className="w-[30%] h-6 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCardShimmer;
