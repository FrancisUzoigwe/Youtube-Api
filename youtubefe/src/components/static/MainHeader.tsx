import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { BsFillMicFill } from "react-icons/bs";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import img from "../../assets/react.svg";
import { useState } from "react";
import { changedToggle, toggled } from "../../global/globalState";
const MainHeader = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const [state, setState] = useState<boolean>(false);
  const onToggle = () => {
    setState(!state);
  };
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-full h-[50px] flex items-center justify-center bg-gray-800">
        <div className="w-[95%] h-full justify-between flex items-center fixed ">
          <div className="flex items-center">
            <div
              onClick={() => {
                onToggle();
              }}
            >
              {!state ? (
                <RxHamburgerMenu
                  className="text-2xl mr-5 text-white hover:cursor-pointer hover:scale-110 duration-300 transition-all"
                  onClick={() => {
                    dispatch(toggled());
                  }}
                />
              ) : (
                <RxHamburgerMenu
                  className="text-2xl mr-5 text-white hover:cursor-pointer hover:scale-110 duration-300 transition-all"
                  onClick={() => {
                    dispatch(changedToggle());
                  }}
                />
              )}
            </div>
            <div className="flex items-center hover:cursor-pointer">
              <div>
                <FaYoutube className="text-2xl text-red-600" />
              </div>
              <div className="font-bold text-white">YouTube</div>
            </div>
          </div>
          <div className="flex w-[40%] h-[35px] rounded  items-center justify-between">
            <input
              type="text"
              className=" w-[90%] h-full pl-3 rounded-full outline-none caret-red-500 text-[15px]"
              placeholder="Search here"
            />
            <div className="w-[35px] h-[35px] rounded-full items-center flex justify-center bg-gray-950 ml-1 hover:bg-gray-700 duration-500 transition-all">
              <BsFillMicFill className="text-xl text-white hover:scale-110 duration-500 transition-all cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[35px] h-[35px] rounded-full items-center justify-center bg-gray-500 flex">
              <RiVideoAddLine className="text-[20px] text-white hover:cursor-pointer" />
            </div>
            <div className="ml-5">
              <IoMdNotifications className="text-2xl text-white hover:cursor-pointer" />
            </div>
            <img
              src={img}
              className="w-[35px] h-[35px] rounded-full bg-white object-cover ml-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
