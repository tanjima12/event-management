import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:flex lg:justify-center">
        <div className=" border shadow-lg max-w-[350px] mt-10 lg:ml-10">
          <h1 className="text-white text-3xl text-center">VENUE FEATURES</h1>
          <p className="text-white ml-2">
            conveniently located historic estate hosts up to 190 guests bright
            and open main terrace hall large covered front porch expansive
            outdoor deck & patio indoor bar and outdoor gazebo bar cozy indoor
            lounge with fireplace intimate foyer area with guest bathrooms
            dressing suites with private bathrooms four acres of grounds &
            gardens outdoor ceremony space under willow trees & pergola
            countless picture spots one event per day family owned and operated
          </p>
        </div>
        <div className=" border shadow-lg max-w-[350px] lg:mt-32 lg:ml-10">
          <h1 className="text-white text-3xl text-center">
            HISTORIC MULBERRY ROOM
          </h1>
          <p className="text-white ml-2">
            The indoor bar features dark wood accents, gleaming crystal
            glassware displays and a large bar top for guests to spread out
            across.Adjacent to the indoor bar, the guest lounge provides
            additional room for guests to mingle and adds to the intimate feel
            of the TeRa|S.
          </p>
        </div>
        <div className=" border shadow-lg max-w-[350px] mt-10 lg:ml-10">
          <h1 className="text-white text-3xl text-center">DRESSING SUITES</h1>
          <p className="text-white ml-2">
            The Farmhouse offers two separate dressing areas for the wedding
            party to utilize when getting ready and during the reception.
            Upstairs Suites: Situated on the second floor of The Farmhouse, the
            main dressing room boasts an antique silver floor mirror underneath
            a beautiful chandelier, as well as an updated private bathroom. The
            adjoining room features a table and chairs, as well as more room to
            spread out. Downstairs Suite: Furnished with a leather sofa,
            television and table & chairs, there is also an adjoining private
            bathroom.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
