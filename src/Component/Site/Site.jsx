import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

const Site = () => {
  return (
    <div className="flex justify-between mb-1 mt-2">
      <div className="flex gap-14 ">
        <div className="flex gap-5  ml-5">
          <a href="">
            <FaFacebookF className="text-3xl"></FaFacebookF>
          </a>
          <a href="">
            <FaTwitter className="text-3xl"></FaTwitter>
          </a>
          <a href="">
            <FaInstagram className="text-3xl"></FaInstagram>
          </a>
        </div>
        <div>
          <h1 className="text-2xl flex gap-2 items-center font-semibold ">
            <BsTelephone className="text-3xl"></BsTelephone>0193xxxxxxx
          </h1>
        </div>
        <div>
          <h1 className="text-2xl font-semibold flex gap-2 items-center">
            <CgMail className="text-3xl"></CgMail> talats12@gmail.com
          </h1>
        </div>
      </div>
      {/* <div className="flex gap-3 items-center">
        <FaUserAlt className="text-3xl "></FaUserAlt>
        <Link to="/login">
          <button className="btn btn-outline bg-red-200 px-10 border-none mr-3">
            LogIn
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Site;
