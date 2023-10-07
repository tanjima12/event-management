import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("events.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="w-6/12 ml-8">
      <h1 className="text-5xl font-DancingScript font-bold text-red-300 mb-8 text-center">
        <hr></hr>
        **...We provides...**
        <hr className="mt-2"></hr>
      </h1>
      <div className="grid grid-cols-2 gap-5">
        {services.map((service) => (
          <div key={service.id}>
            <div className="relative grid mb-2 h-[28rem] w-full max-w-[24rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-white">
              <div
                className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover   bg-clip-border bg-center text-gray-700 shadow-none"
                style={{ backgroundImage: `url(${service.picture})` }}
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/50 via-black/30"></div>
              </div>
              <div className="relative p-6 py-14 px-6 md:px-12">
                <h2 className=" block font-poppins mb-3 text-4xl font-bold leading-[1.5] tracking-normal text-white antialiased">
                  {service.title}
                </h2>
                <h5 className=" block font-DancingScript text-3xl font-semibold  leading-snug tracking-normal text-white antialiased">
                  {service.description}
                </h5>
                <Link to="/details">
                  <button className="btn bg-red-300 border-none px-5 mt-2 py-2">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
