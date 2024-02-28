import Logo from "./Logo";
import useHeader from "../hooks/useHeader";

const Header = () => {
  const { handleSearch, handleIsMenuOpen } = useHeader();

  return (
    <div className="md:px-5 px-2 md:py-2 py-1 grid grid-flow-col place-items-center place-content-between sticky top-0 left-0 w-full bg-white z-[100] md:shadow-none shadow-md">
      {/* section 1 */}
      <div className="flex items-center md:gap-5 gap-1 col-span-1">
        <i
          onClick={handleIsMenuOpen}
          className="fa-solid fa-bars text-2xl cursor-pointer md:hover:bg-gray-200 md:px-[12px] px-2 md:py-[6px] rounded-full"
        />
        <Logo />
      </div>
      {/* section 2 */}
      <div className="flex col-span-10 w-full">
        <form
          onClick={handleSearch}
          className="w-full items-center justify-center hidden md:flex"
        >
          <input
            className="w-1/2 outline-none px-5 py-2 border border-gray-300 rounded-l-full placeholder:text-lg font-semibold focus:border-gray-500"
            type="text"
            placeholder="Search"
          />
          <button
            title="Search"
            className="px-5 py-2 border-t border-r border-b border-gray-300 hover:bg-gray-100 rounded-r-full py-2x"
          >
            <i className="fa-solid fa-search cursor-pointer" />
          </button>
        </form>
      </div>
      {/* section 3 */}
      <div className="col-span-1">
        <i className="fa-solid fa-search md:hidden px-4 py-2 text-lg text-gray-800 cursor-pointer" />
        <i className="fa-solid fa-user px-2 text-lg md:text-2xl md:cursor-pointer md:hover:bg-gray-200 md:px-[12px] md:py-[7px] md:rounded-full cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
