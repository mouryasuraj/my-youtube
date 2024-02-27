import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return <div className={`w-[250px] bg-red-500 px-2 py-3`}></div>;
};

export default SideBar;
