import Enquire from "../Enquire/Enquire";
import Navbar from "../Navbar/Navbar";
import Services from "../SerVices/Services";
import Site from "../Site/Site";

const Home = () => {
  return (
    <div>
      <Site></Site>

      <div className="navbg h-[700px] bg-no-repeat filter brightness-95">
        <div>
          <Navbar></Navbar>
          <Enquire></Enquire>
        </div>
      </div>
      <div className="mt-10">
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
