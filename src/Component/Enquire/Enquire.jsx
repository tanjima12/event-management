import { Link } from "react-router-dom";

const Enquire = () => {
  return (
    <div className="ml-32 mt-52">
      <h1 className="font-DancingScript text-5xl font-semibold text-gray-100">
        To Making Your
      </h1>
      <h1 className="text-5xl font-semibold text-gray-100 font-poppins mt-3">
        Special Day <span className="text-rose-100">Memorable</span>
      </h1>
      <Link to="/enquire">
        <button className="btn bg-red-400 px-8 mt-5 border-none">
          Enquire
        </button>
      </Link>
    </div>
  );
};

export default Enquire;
