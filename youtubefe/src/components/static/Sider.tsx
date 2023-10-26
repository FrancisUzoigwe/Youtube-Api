import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

const Sider = () => {
  const toggle = useSelector((state: any) => state.toggle);
  return (
    <>
      <div className={`${!toggle? "w-[70px]": "w-[150px]"}  h-[600px] flex flex-col `}>
        <div className="fixed w-full h-full ">Sider</div>
      </div>
    </>
  );
};

export default Sider;
