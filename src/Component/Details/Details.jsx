import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  // const { title } = services;
  const [detailCard, setDetailCard] = useState();
  const mainDetailCard = useLoaderData();
  console.log(mainDetailCard);
  const { details, price, picture, title } = detailCard || {};
  const { id } = useParams();

  useEffect(() => {
    const findCard = mainDetailCard?.find(
      (mainDetailCard) => mainDetailCard.id === id
    );

    setDetailCard(findCard);
  }, [id, mainDetailCard]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="relative w-full max-w-[40rem] bg-slate-400 rounded-xl bg-transparent bg-clip-border mt-10 lg:ml-[450px] text-gray-700 shadow-none">
        <div className="relative  mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 text-gray-700 shadow-none">
          <div className=" w-full">
            <div className="flex items-center justify-between">
              <img className="h-[22rem] w-[38rem]" src={picture}></img>
            </div>
            <p className=" text-white block font-sans text-4xl text-center  font-light leading-relaxed text-red-600 antialiased">
              {title}
            </p>
          </div>
        </div>
        <div className=" p-0">
          <p className="block text-white font-sans text-xl font-light leading-relaxed text-inherit antialiased">
            {details}
          </p>
        </div>
        <button className="btn px-8 py-3 bg-orange-700 text-white lg:ml-72 mb-5">
          Price:{price}
        </button>
      </div>
    </div>
  );
};

export default Details;
