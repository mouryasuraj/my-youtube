import { filterBtnList } from "../utils/constant";
const FilterList = () => {
  return (
    <div className="w-full bg-white fixed md:top-[62px] overflow-x-scroll scrollbar-none ">
      {/* <i className="fa-solid fa-arrow-left px-4 hidden md:block py-3 bg-gray-900 rounded-md cursor-pointer hover:bg-gray-700 text-white bg-opacity-70 absolute top-[12px] " />
      <i className="fa-solid fa-arrow-right px-4 hidden md:block py-3 right-0 bg-gray-900 rounded-md cursor-pointer hover:bg-gray-700 text-white bg-opacity-70 absolute top-[12px] " /> */}
      <div className="py-3 inline-block whitespace-nowrap space-x-2 pr-16 ">
        {filterBtnList.map((filterBtn) => {
          return (
            <button
              key={filterBtn}
              className="bg-gray-200 w-fit text-gray-900 font-bold hover:bg-gray-300 md:px-4 px-3 md:py-2 py-1 rounded-md cursor-pointer"
            >
              {filterBtn}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterList;
