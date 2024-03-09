import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MenuBarSection = ({ sectionName, sectionItems }) => {
  return (
    <div className="">
      <p className="text-lg cursor-pointer px-4 font-semibold">{sectionName}</p>
      {sectionItems.map((item) => {
        return (
          <Link to="/" key={item.name}>
            <button className="w-full flex items-center md:gap-5 gap-3 md:px-4 px-3 py-2 rounded-lg md:py-3 hover:bg-gray-200">
              <i
                className={`fa-solid fa-${item.icon} text-xl w-6 text-gray-800`}
              />
              <span className="text-[16px] md:font-semibold text-gray-600">
                {item.name}
              </span>
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default MenuBarSection;

MenuBarSection.propTypes = {
  sectionName: PropTypes.string,
  sectionItems: PropTypes.array.isRequired,
};
