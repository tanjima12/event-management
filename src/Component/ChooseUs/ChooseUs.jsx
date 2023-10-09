const ChooseUs = () => {
  return (
    <div className="mt-10 lg:ml-52">
      <h1 className="text-5xl font-medium text-white mb-3">Why choose us?</h1>
      <div className="flex-col flex lg:flex-row gap-10">
        <img
          className="mt-10 ml-3 lg:ml-10 rounded-full h-[250px] lg:h-[250px] w-60"
          src="https://i.ibb.co/HP07NbG/20908904-6369740.jpg"
        ></img>
        <p
          className="text-white text-xl mt-5 lg:mt-16 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          At TaRa|S, we are your trusted partner in creating<br></br>
          unforgettable momentsthat celebrate life most cherished <br></br>
          milestones. Our dedication to excellence and our passion<br></br>
          for craftingmemorable experiences set us apart as the <br></br>
          ideal choice for your bridal shower, wedding ceremony, <br></br>
          mehendi night, anniversary celebration,engagement <br></br> and
          ceremony, exquisite wedding invitation and stationery<br></br>
          needs.
        </p>
      </div>

      <button className="rounded-lg lg:ml-[450px] mb-2 lg:mb-10 px-8 py-3 bg-orange-300 border-none text-white mt-3">
        See Our Booklet
      </button>
    </div>
  );
};

export default ChooseUs;
