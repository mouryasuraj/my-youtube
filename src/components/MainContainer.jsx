import FilterList from "./FilterList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-full px-5">
      <FilterList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
