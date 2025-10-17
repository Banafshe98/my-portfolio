import React from "react";
import RightArrow from "../assets/svgs/RightArrow.svg"
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module

function Projects() {
     const [sliderRef, instanceRef] = useKeenSlider(
        {loop:true},
        {autoplay:true},
    {
      slideChanged() {
        console.log('slide changed')
      },
    },
    [
      // add plugins here
    ]
  )
  return (
    <>
      <div ref={sliderRef} className="keen-slider bg-black grid-cols-1 md:grid-cols-4 lg:gap-3 gap-6 text-center cursor-pointer grid py-16 mx-auto px-4 lg:px-60 sm:px-10">
        <div className="keen-slider__slide bg-white rounded-md p-6 hover:bg-gray-300 hover:scale-125 transition-all ease-in-out duration-500">1</div>
        <div className="keen-slider__slide bg-white rounded-md p-6  hover:bg-gray-300 hover:scale-125 transition-all ease-in-out duration-500">2</div>
        <div className="keen-slider__slide bg-white rounded-md p-6  hover:bg-gray-300 hover:scale-125 transition-all ease-in-out duration-500">3</div>
        <div className="keen-slider__slide bg-white rounded-md p-6  hover:bg-gray-300 hover:scale-125 transition-all ease-in-out duration-500">4</div>
    <img className="right-0 bg-red-600 w-20 h-20" src={RightArrow}/>
      </div>
    </>
  );
}

export default Projects;
