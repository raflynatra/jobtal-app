import { TESTIMONY } from "@/constants";
import React from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const CardSlider: React.FC = () => {
  const slideUp = () => {
    const slider = document.getElementById("slider");

    if (slider) slider.scrollTop = slider.scrollTop - 161;
  };

  const slideDown = () => {
    const slider = document.getElementById("slider");

    if (slider) slider.scrollTop = slider.scrollTop + 161;
  };
  return (
    <div className="relative md:w-full md:h-80 md:flex md:items-center">
      <MdKeyboardArrowUp
        size={35}
        className="bg-white absolute rounded-full cursor-pointer opacity-40 hover:opacity-100 -top-5 left-1/2 right-1/2 shadow-md"
        onClick={slideUp}
      />
      <div
        id="slider"
        className="md:mx-auto overflow-y-scroll w-full h-64 md:h-full scroll-smooth"
      >
        {TESTIMONY.map(({ img, name, role, testimony }, index) => (
          <div
            key={index}
            className="block my-2 p-3 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 h-38"
          >
            <div className="pb-2 flex">
              <img
                src={img}
                className="rounded w-10 mr-2"
                alt={`testimony-${name}`}
              />
              <div>
                <p className="text-md font-semibold">{name}</p>
                <p className="text-sm text-gray-900">{role}</p>
              </div>
            </div>
            <p className="font-normal text-gray-700">{`"${testimony}" - ${name}`}</p>
          </div>
        ))}
      </div>
      <MdKeyboardArrowDown
        size={35}
        className="bg-white absolute rounded-full cursor-pointer opacity-40 hover:opacity-100 -bottom-5 left-1/2 right-1/2 shadow-md"
        onClick={slideDown}
      />
    </div>
  );
};

export default CardSlider;
