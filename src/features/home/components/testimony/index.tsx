import React from "react";
import CardSlider from "../card-slider";

const Testimony: React.FC = () => {
  return (
    <div className="py-10 px-5 bg-gray-100 flex flex-col md:flex-row md:items-center md:justify-around">
      <div className="w-full mb-5 md:w-2/3 md:order-2 px-5">
        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold">
          What Our Users Say About Us
        </h1>
        <hr className="my-5 md:my-8 border-1 rounded border-emerald-600" />
        <p className="font-normal text-gray-500 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          dignissim tincidunt molestie. Praesent scelerisque est et est commodo
          sagittis. Aenean sit amet massa diam. Phasellus dolor lorem, porttitor
          et porta in, interdum vel lacus.
        </p>
      </div>

      <div className="w-full md:w-1/3">
        <CardSlider />
      </div>
    </div>
  );
};

export default Testimony;
