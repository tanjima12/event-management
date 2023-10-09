import { useLoaderData } from "react-router-dom";
import Enquire from "../Enquire/Enquire";
import Navbar from "../Navbar/Navbar";
import Services from "../SerVices/Services";

import ChooseUs from "../ChooseUs/ChooseUs";
import Site from "../Site/Site";
import Differebcities from "../Differencities/Differebcities";
import Footer from "../Footer/Footer";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <div className="navbg h-[700px] bg-no-repeat filter brightness-95">
        <div>
          <Navbar></Navbar>
          <Enquire></Enquire>
        </div>
      </div>
      <div className=" mr-10 mt-10 ml-10">
        <div>
          <ChooseUs></ChooseUs>
        </div>

        <div>
          <div>
            <h1 className="text-5xl font-DancingScript font-bold text-blue-100 mb-8 text-center ">
              <hr className="mb-8 text-cyan-200"></hr>
              ...We provides...
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-10">
            {services.map((services) => (
              <Services key={services.id} services={services}></Services>
            ))}
            {/* <Services></Services> */}
          </div>
        </div>
      </div>
      <div className=" lg:flex items-center lg:ml-16 mt-10">
        <Differebcities></Differebcities>
        <div className=" ml-14 lg:ml-32">
          <h1 className="text-5xl text-indigo-200 mt-20 font-DancingScript font-semibold">
            Visit Our Sites
          </h1>
          <Site></Site>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
