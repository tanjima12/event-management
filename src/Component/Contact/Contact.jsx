import { CgMail } from "react-icons/cg";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center">
        <div className="border max-w-[600px] ">
          <p className="mb-3 block font-sans text-2xl font-normal leading-relaxed text-white antialiased px-3 py-3">
            <span> Our Address:</span>
            <br></br>
            <span className="text-xl text-white">Dhanmondi 9/B,Zigatola</span>
          </p>
          <h1 className="text-2xl text-white px-3 ">Contact Number:01880623</h1>
          <h1 className="text-white px-3 flex text-xl gap-2">
            <CgMail className="text-red-800 text-4xl"></CgMail>
            Official Gmail:tanjima@gmail.com
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
