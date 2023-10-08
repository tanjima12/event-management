import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-[#0c0002]">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
