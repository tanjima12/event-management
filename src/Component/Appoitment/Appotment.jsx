import Navbar from "../Navbar/Navbar";

const Appotment = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="appoitpic">
        <div className="hero min-h-scree">
          <div className="hero-content flex-col justify-center lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Choose Now!</h1>
              <p className="py-6 text-3xl font-bold text-orange-900">
                Please Accept Our Elegant Service and Make you day beatiful!
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Enter Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className=" border-b-2"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Desired Event Date</span>
                  </label>
                  <input
                    type="text"
                    placeholder="date"
                    className="border-b-2"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Chose Your Event</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Choose event option"
                    className="border-b-2"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="border-b-2"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-lime-100">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appotment;
