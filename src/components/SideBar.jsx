import { useSelector } from "react-redux";
import useHeader from "../hooks/useHeader";
import MenuBarSection from "./MenuBarSection";
import { section1, section2, section3 } from "../utils/helper";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const { handleIsMenuOpen } = useHeader();
  return (
    <div className="md:full">
      <div
        className={`${
          isMenuOpen
            ? "md:w-[250px] w-0 md:px-4 md:py-3 px-0 py-0 "
            : "md:w-0 w-[250px] md:px-0 md:py-0 px-4 py-3"
        } md:sticky fixed bg-white md:top-[62px]  transition-all duration-300 z-[20] h-screen md:h-[calc(100vh-62px)] overflow-y-scroll scrollbar-none hover:scrollbar-thin `}
      >
        <div className="space-y-5 md:mb-0 mb-32">
          <MenuBarSection sectionName="" sectionItems={section1} />
          <hr />
          <MenuBarSection sectionName="You" sectionItems={section2} />
          <hr />
          <MenuBarSection sectionName="Explore" sectionItems={section3} />
        </div>
      </div>
      {/* Bg black in mobile devices */}
      <div
        onClick={handleIsMenuOpen}
        className={`${
          !isMenuOpen ? "w-full" : "w-0"
        } h-screen fixed top-0 left-0 md:hidden transition-all duration-300 bg-black opacity-50 z-10 cursor-pointer`}
      ></div>
    </div>
  );
};

export default SideBar;
