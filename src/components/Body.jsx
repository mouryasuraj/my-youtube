import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="w-full flex">
      <SideBar />
      <div className="mt-12">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
