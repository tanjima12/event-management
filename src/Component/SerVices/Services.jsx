import { Link } from "react-router-dom";

const Services = ({ services }) => {
  const { title, picture, description, id } = services;
  // const [services, setServices] = useState([]);
  // const { id } = services;
  // useEffect(() => {
  //   fetch("events.json")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  return (
    <div>
      <div
        className=" relative ml-10 grid mb-8 h-[30rem] w-full max-w-[24rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-white"
        data-aos="zoom-in"
      >
        <div
          className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover   bg-clip-border bg-center text-gray-700 shadow-none"
          style={{ backgroundImage: `url(${picture})` }}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/70"></div>
        </div>
        <div className="relative p-6 py-14 px-6 md:px-12">
          <h2 className=" block font-poppins mb-3 text-4xl font-bold leading-[1.5] tracking-normal text-white antialiased">
            {title}
          </h2>
          <h5 className=" block font-DancingScript text-3xl font-semibold  leading-snug tracking-normal text-white antialiased">
            {description}
          </h5>
          <Link to={`/details/${id}`}>
            <button className="btn bg-red-300 border-none px-5 mt-2 py-2">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
