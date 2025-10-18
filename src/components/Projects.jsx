import React from "react";
import RightArrow from "../assets/svgs/RightArrow.svg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

function Projects() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 25 },
      },
    },
  });


  return (
    <>
      <div
        ref={sliderRef}
        className="keen-slider bg-black grid-cols-1 lg:grid-cols-4 md:grid-cols-4 lg:gap-3 gap-6 text-center cursor-pointer grid py-16 mx-auto px-4 lg:px-60 sm:px-10"
      >
        <div className="keen-slider__slide bg-white rounded-md p-6 hover:bg-gray-300 transition-all ease-in-out duration-500">
          1
        </div>
        <div className="keen-slider__slide bg-white rounded-md p-6  hover:bg-gray-300 transition-all ease-in-out duration-500">
          2
        </div>
        <div className="keen-slider__slide bg-white rounded-md p-6  hover:bg-gray-300 transition-all ease-in-out duration-500">
          3
        </div>
        <div className="keen-slider__slide bg-white rounded-md p-6  hover:bg-gray-300 transition-all ease-in-out duration-500">
          4
        </div>
        <img className="absolute right-8 top-1/2 w-10 h-10 cursor-pointer hover:scale-110 transition-transform bg-red-600" src={RightArrow} onClick={()=>slider.current?.next()} />
      </div>
    </>
  );
}

export default Projects;
