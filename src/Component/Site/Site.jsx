import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Site = () => {
  return (
    <div className="flex justify-between mb-1 mt-2">
      <div className="flex gap-14 ">
        <div className="flex gap-5  ml-16">
          <a href="">
            <FaFacebookF className="text-3xl text-white"></FaFacebookF>
          </a>
          <a href="">
            <FaTwitter className="text-3xl text-blue-500"></FaTwitter>
          </a>
          <a href="">
            <FaInstagram className="text-3xl text-red-500"></FaInstagram>
          </a>
        </div>
        {/* <div>
          <h1 className="text-2xl text-white flex gap-2 items-center font-semibold ">
            <BsWhatsapp className="text-green-500 text-3xl"></BsWhatsapp>
            0125xxxx
          </h1>
        </div>
        <div>
          <h1 className="text-2xl font-semibold flex gap-2 items-center">
            <CgMail className="text-3xl"></CgMail> talats12@gmail.com
          </h1>
        </div> */}
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
