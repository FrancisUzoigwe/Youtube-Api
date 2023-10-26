import { Outlet } from "react-router-dom";
import MainHeader from "../static/MainHeader";
import Sider from "../static/Sider";

const Layout = () => {
  return (
    <div>
      <MainHeader />
      <div className="w-full h-auto flex flex-col items-center bg-gray-800">
        <div className="flex w-[95%] text-white">
          <div className="ml-">
            <Sider />
          </div>
          <div className="bg-green-300 w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
