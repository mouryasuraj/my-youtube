import FilterList from "./FilterList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-full md:px-5 px-2">
      <FilterList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
