import React from "react";
import Arrowdown from "../assets/gifs/Arrowdown.gif";

function Skills() {
  return (
    <>
      <p className="text-center pb-16 text-3xl pt-0">SKILLS</p>
      <img
        className="mx-auto md:w-[5%] lg:w-[2%] w-[8%] cursor-pointer -mt-10 -mb-4 p-0 z-999"
        src={Arrowdown}
        alt=""
      />
      <div className="bg-cyan-700 text-blue-400 py-12 flex items-center justify-center px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-6xl text-center gap-4 cursor-pointer">
          <div className="col-span-2 sm:col-span-2 bg-stone-100 p-10 rounded hover:bg-orange-300 duration-400 ease-in-out transition-all">
            1
          </div>
          <div className="bg-stone-100 sm:row-span-3  p-10 rounded duration-400 ease-in-out transition-all hover:bg-orange-300">
            2
          </div>
          <div className="bg-stone-100 sm:row-span-4 p-10 rounded hover:bg-orange-300 duration-400 ease-in-out transition-all">
            3
          </div>
          <div className="bg-stone-100 p-10 rounded hover:bg-orange-300 duration-400 ease-in-out transition-all">
            4
          </div>
          <div className="bg-stone-100 sm:row-span-2 p-10 rounded hover:bg-orange-300 duration-400 ease-in-out transition-all">
            6
          </div>
          <div className="bg-stone-100 p-10 rounded hover:bg-orange-300 duration-400 ease-in-out transition-all">
            7
          </div>
          <div className="bg-stone-100 sm:col-span-3 p-10 rounded hover:bg-orange-300 duration-400 ease-in-out transition-all">
            7
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
