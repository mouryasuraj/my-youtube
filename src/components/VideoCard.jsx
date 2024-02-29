import { useSelector } from "react-redux";

const VideoCard = () => {
  const homePageVideos = useSelector((store) => store.videos.homePageVideos);
  if (!homePageVideos)
    return <p className="text-5xl font-bold top-10">Loading.........</p>;

  return (
    <div className="flex flex-wrap justify-between gap-5">
      {homePageVideos.map((video) => {
        const { snippet, statistics, id } = video;
        const { title, thumbnails, channelTitle } = snippet;
        return (
          <div
            key={id}
            className="sm:w-[32%] w-full min-w-[300px] flex flex-col gap-3 cursor-pointer"
          >
            <div>
              <img
                className="w-full h-[220px] object-cover rounded-xl"
                src={thumbnails.medium.url}
                alt={title + " Thumbnail"}
              />
            </div>
            <div className="flex gap-2 w-full">
              <div className="size-[40px]">
                <img
                  className="size-[40px] object-cover rounded-full"
                  src={thumbnails.medium.url}
                  alt=""
                />
              </div>
              <div className="space-y-1 w-[100%]">
                <p className="font-bold line-clamp-2">
                  {title} Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Sint, animi a Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Ut, fuga qui veniam explicabo quos
                  reiciendis fugiat voluptate nam velit ex doloribus totam modi
                  consequuntur facere recusandae praesentium cupiditate odio
                  rerum! Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Delectus ad qui excepturi magni, officiis voluptatem
                  ipsa ex eos. Est facere sed magnam modi, molestiae, vitae nam
                  placeat commodi, laudantium harum earum animi sequi voluptas
                  necessitatibus iure dicta quia ipsa quaerat quidem debitis
                  deserunt iusto quisquam cupiditate? Officiis eaque eveniet id
                  consectetur unde perspiciatis? Veniam, consequuntur!
                  Accusantium officiis atque adipisci nobis quidem quis aut
                  totam? Dignissimos quam id harum ipsum sed architecto impedit
                  sit repudiandae, ab aut iure sunt nulla praesentium alias
                  reiciendis beatae eaque eligendi velit. At doloremque cum
                  ipsam, sit repellendus earum nesciunt repudiandae odit error,
                  officiis quibusdam eaque!
                </p>
                <p className="text-gray-500">{channelTitle}</p>
                <p className="text-gray-500">{statistics.viewCount} views</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoCard;
