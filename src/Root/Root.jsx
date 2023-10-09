import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";

const Root = () => {
  return (
    <div className="bg-[#0c0002]">
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
