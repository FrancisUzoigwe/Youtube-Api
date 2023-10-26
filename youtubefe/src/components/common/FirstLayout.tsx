import { Outlet } from "react-router-dom";
import Header from "../static/Header";

const FirstLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
};

export default FirstLayout;
