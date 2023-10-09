import Navbar from "../Navbar/Navbar";

const EnquireDetails = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-10">
        <h1 className="text-4xl text-white font-DancingScript text-center">
          SPECIAL EVENT INCLUSIONS
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <p
              className="border bg-cyan-200 text-black  max-w-[250px]"
              data-aos="flip-up"
            >
              reception for up to 190 guests for your holiday party, bridal/baby
              shower, corporate event and more
            </p>
            <p className="border bg-cyan-200 text-black max-w-[250px]">
              your choice of a sit down dinner, dinner buffet, cocktail
              reception, brunch or luncheon buffet
            </p>
            <p
              className="border bg-cyan-200 text-black max-w-[250px]"
              data-aos="flip-up"
            >
              rround banquet tables and dark walnut chiavari chairs with ivory
              cushions
            </p>
            <p className="border bg-cyan-200 text-black max-w-[250px]">
              deluxe coffee station and soft beverages included bar options
              available for additional fees
            </p>
            <p
              className="border bg-cyan-200 text-black max-w-[250px]"
              data-aos="flip-up"
            >
              three-tier centerpieces with floating candles and complemented
              with glass mirrors
            </p>
            <p className="border bg-cyan-200 text-black max-w-[250px]">
              napkins and floor length table linens in your choice of color
              (upgraded options available)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquireDetails;
